import React, { useContext, useEffect } from 'react';
import Input from '../Components/Input';
import Result from '../Components/Result';
import { calculateInhand } from '../utils/inhandcalculator';
import { CalculatorContext } from '../Context/CalculatorContext';

function Home() {
  
  
  const {
    ctc, setCtc,
    esops, setEsops,
    components, setComponents,
    result, setResult
  } = useContext(CalculatorContext);

  const handleComponentChange = (key, value) => {
    setComponents(prev => ({ ...prev, [key]: Number(value) }));
  };
//download button added
  const handledownload = async () => {
    console.log("Frontend result object:", result,ctc);
    if (!result) {
    alert("Please calculate your CTC first");
    return;
    }
    const data = {
      ctc:ctc,
      breakdown: JSON.stringify(result.breakdown,null,2),
      inhand: result.netAnnual,
      netmonthly: result.netMonthly
    };

    const response = await fetch("/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ctc-report.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  useEffect(() => {
    const ctcValue = parseFloat(ctc);
    const esopsValue = parseFloat(esops);

    if (
      !isNaN(ctcValue) &&
      ctcValue > 0 &&
      !isNaN(esopsValue) &&
      esopsValue >= 0 &&
      esopsValue < ctcValue
    ) {
      const gross = ctcValue - esopsValue;
      const basic = 0.4 * gross;
      const hra = 0.5 * basic;
      const da = 0.1 * gross;
      const lta = 0.05 * gross;
      const specialAllowance = 0.15 * gross;
      const bonus = 0.1 * gross;

      const updated = {
        basic,
        hra,
        da,
        lta,
        specialAllowance,
        bonus
      };

      setComponents(updated);
      setResult(calculateInhand(ctcValue, updated));
    } else {
      setResult(null);
    }
  }, [ctc, esops]);

  useEffect(() => {
    const ctcValue = parseFloat(ctc);
    const esopsValue = parseFloat(esops);

    if (
      !isNaN(ctcValue) &&
      ctcValue > 0 &&
      !isNaN(esopsValue) &&
      esopsValue >= 0 &&
      esopsValue < ctcValue
    ) {
      setResult(calculateInhand(ctcValue, components));
    }
  }, [components]);

  const componentSum =
    components.basic +
    components.hra +
    components.da +
    components.lta +
    components.specialAllowance +
    components.bonus;

  const expectedGross = parseFloat(ctc || 0) - parseFloat(esops || 0);
  const showError = Math.abs(componentSum - expectedGross) > 1;

  return (
    <>
      <h1 className='flex items-center justify-center px-2 sm:px-10 md:px-20 mt-8 mb-3 text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl font-sans'>
        CTC to In-hand Calculator
      </h1>
      <h5 className='flex items-center justify-center px-2 sm:px-10 md:px-15 text-xl text-gray-700 font-sans font-semibold'>
        Calculate your in-hand salary and understand your complete compensation structure
      </h5>

      <div className='px-4 sm:px-10 md:px-20 mt-10'>
        <div className='bg-white rounded-xl shadow-md py-6 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row gap-6'>
          <div className='flex-col sm:w-full md:w-1/2 '>
            <Input
            ctc={ctc}
            setCtc={setCtc}
            esops={esops}
            setEsops={setEsops}
            components={components}
            setComponents={setComponents}
            handleComponentChange={handleComponentChange}
            showError={showError}
          />
          <button
          onClick={handledownload}
          className='mt-6 px-6 py-2 text-white font-semibold text-lg bg-blue-600 transition duration-300 ease-in-out hover:bg-blue-800 transform rounded-lg '>
            Get Report
          </button>
          </div>
  
          <Result result={result} />  
        </div>
      </div>

      <div className='bg-blue-50 rounded-lg px-4 sm-px-10 md:px-20 my-10 font-sans'>
        <h2 className='flex items-center justify-center text-lg font-medium text-gray-900 mb-2'>
          What is Cost to Company (CTC)?
        </h2>
        <div className='space-y-4 text-sm text-gray-700 text-left'>
          <p>
            Cost to Company (CTC) is the total amount your employer spends on you annually, including salary, benefits, and other expenses. It's not just your take-home pay, but everything the company pays out to hire and keep you on their payroll.
          </p>
          <p>
            Your take-home salary will be lower than your CTC due to various deductions and the fact that some components are non-monetary benefits.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div id='accordian' className='px-2 sm:px-10 md:px-20 rounded-3xl font-sans'>
        <details className='group border-b pb-3'>
          <summary className='flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-700 '>
            What is Basic salary?
            <span className='transition-transform group-open:rotate-180'>
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className='text-left text-gray-700 mt-2'>
            Basic salary is the fixed, pre-tax amount of money an employee earns for their job, before any allowances, bonuses, or deductions are applied. It is usually 40% to 50% of your CTC.
          </p>
        </details>

        <details className='group border-b pb-3 mt-3'>
          <summary className='flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-700 '>
            What is Dearness Allowance (DA)?
            <span className='transition-transform group-open:rotate-180'>
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className='text-left text-gray-700 mt-2'>
            DA is a cost-of-living adjustment provided to employees to offset inflation. It is calculated as a percentage of basic salary.
          </p>
        </details>

        <details className='group border-b pb-3 mt-3'>
          <summary className='flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-700 '>
            What is House Rent Allowance (HRA)?
            <span className='transition-transform group-open:rotate-180'>
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className='text-left text-gray-700 mt-2'>
            HRA is a common salary component that helps you reduce tax liability if you're paying rent.
          </p>
        </details>

        <details className='group border-b pb-3 mt-3'>
          <summary className='flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-700 '>
            Understanding Provident Fund (PF)?
            <span className='transition-transform group-open:rotate-180'>
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className='text-left text-gray-700 mt-2'>
            PF is a retirement savings scheme where 12% of your basic salary is deducted monthly and matched by your employer.
          </p>
        </details>
      </div>

      <div className='px-2 sm:px-10 md:px-20'>
        <div className="bg-orange-100 rounded-2xl px-10 py-4 mt-10 ">
          <h1 className='flex text-xl text-yellow-900 font-semibold'> ⚠️Important Note!</h1>
          <p className='flex text-left px-7 mt-2 text-yellow-800'>This calculator provides estimates based on standard deductions and tax rates. Actual figures may vary based on your specific situation, tax regime choice, and company policies.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
