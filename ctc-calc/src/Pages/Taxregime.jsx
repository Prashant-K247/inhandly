import React ,{useState} from 'react'
import {oldregimetax,newregimetax} from '../utils/Taxcalculator'

function Taxregime() {

  const[income,setincome]=useState("");
  const[result,setresult]=useState(null);

  const calculatetax = () => {
    const annualincome = parseFloat(income);
    if (isNaN(annualincome) || annualincome < 0) return;

    const old = oldregimetax(annualincome);
    const newT = newregimetax(annualincome);

    if (!old || !newT) return;

    setresult({
      old: {
        ...old,
        netincome: annualincome - old.tax,
        rate: ((old.tax / annualincome) * 100).toFixed(2),
      },
      new: {
        ...newT,
        netincome: annualincome - newT.tax,
        rate: ((newT.tax / annualincome) * 100).toFixed(2),
      },
    });
  };



  return (
    <>
      <div className='px-4 sm:px-10 md:px-20 mt-10'>
        <div className='px-4 sm:px-10 md:px-20 py-8 border-2 bg-white border-amber-50 rounded-3xl shadow-xl'>
          <h1 className='text-gray-700 text-sm sm:text-2xl md:text-4xl font-sans font-bold '>New Tax Regime changes: FY 2024-25 v/s <br/> FY 2025-26</h1>
        </div>
      </div>

      {/* taxt calculator input */}
      <div className='px-4 sm:px-10 md:px-20 py-10'>
        <div className=' px-4 sm:px-10 md:px-15 border-2 bg-white border-amber-50 rounded-3xl shadow-xl'>
          <h3 className=' text-left py-5 text-gray-700 font-bold text-lg sm:text-xl md:text-2xl'>Tax Calculator </h3>
          <div className=' flex flex-col sm:flex-row items-center gap-2 sm:-gap-4 mb-6 '>
            <input type="text" className=' w-full sm:w-3/4 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' 
            placeholder ='Enter Your Annual income after deductions'          
            value={income}
            onChange={(e)=>setincome(e.target.value)}/>
            <button className='w-full sm:w-1/4 bg-blue-600 text-white py-3 rounded-lg  font-semibold hover:bg-blue-700 transition' 
             onClick={calculatetax}>
              Calculate Tax
            </button>
          </div>
          {/* output */}
      {result && (
        <div className=' flex flex-col md:flex-row gap-8 px-4 pb-10'>
          {/* OLD Regime */}
          <div className='w-full md:w-1/2 bg-gray-100 rounded-2xl shadow-md p-6'>
            <h3 className='text-sm md:text-xl  font-bold text-gray-700 mb-2 border-b border-gray-300 pb-2'>
              FY 2024-25 <span className='text-gray-600 text-sm'>(return to be filed between 1st April 2025 - 31 Dec 2025)</span>
            </h3>
            <div className='text-lg text-gray-700 space-y-2'>
              <div className='flex justify-between'>
                <span>Annual Income:</span>
                <span className='font-semibold'>₹{parseFloat(income).toLocaleString()}</span>
              </div>
              <div className='flex justify-between'>
                <span>Standard Deduction:</span>
                <span className='font-semibold'>₹50,000</span>
              </div>
              <div className='flex justify-between'>
                <span>Net Taxable Income:</span>
                <span className='font-semibold'>₹{result.old.taxableIncome.toLocaleString()}</span>
              </div>
              <div className='flex justify-between'>
                <span>Effective Tax Rate:</span>
                <span className='font-semibold'>{result.old.rate}%</span>
              </div>
              <div className='flex justify-between'>
                <span>Total Tax:</span>
                <span className='font-semibold'>₹{result.old.tax.toLocaleString()}</span>
              </div>
              <div className='flex justify-between text-green-600 font-semibold mt-2'>
                <span>Net Income:</span>
                <span>₹{result.old.netincome.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* NEW Regime */}
          <div className='w-full md:w-1/2 bg-blue-50 rounded-2xl shadow-md p-6'>
            <h3 className='text-sm md:text-xl font-bold text-gray-700 mb-2 border-b border-gray-300 pb-2'>
              FY 2025-26 <span className='text-gray-600 text-sm'>(return to be filed between 1st April 2026 - 31 Dec 2026) - Latest</span>
            </h3>
            <div className='text-lg text-gray-700 space-y-2'>
              <div className='flex justify-between'>
                <span>Annual Income:</span>
                <span className='font-semibold'>₹{parseFloat(income).toLocaleString()}</span>
              </div>
              <div className='flex justify-between'>
                <span>Standard Deduction:</span>
                <span className='font-semibold'>₹75,000</span>
              </div>
              <div className='flex justify-between'>
                <span>Net Taxable Income:</span>
                <span className='font-semibold'>₹{result.new.taxableIncome.toLocaleString()}</span>
              </div>
              <div className='flex justify-between'>
                <span>Effective Tax Rate:</span>
                <span className='font-semibold'>{result.new.rate}%</span>
              </div>
              <div className='flex justify-between'>
                <span>Total Tax:</span>
                <span className='font-semibold'>₹{result.new.tax.toLocaleString()}</span>
              </div>
              <div className='flex justify-between text-green-600 font-semibold mt-2'>
                <span>Net Income:</span>
                <span>₹{result.new.netincome.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}


        </div>
      </div>
      
      
      <div className='px-4 sm:px-10 md:px-20pb-20'>
        <div className='flex flex-col md:flex-row gap-5 justify-center'>

          <div className='w-full md:w-1/2 border  bg-white border-amber-50 rounded-3xl shadow-xl p-6'>
            <h2 className='text-xl  font-bold mb-4'>Financial Year  2024-25</h2>
            <p className='text-gray-700  font-semibold mb-2'>Tax Slabs</p>
{/* fy24 table */}
            <div className='rounded-2xl overflow-hidden border border-gray-200 shadow-md'>
              <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-4 border-b font-semibold text-gray-600">Income Range (₹)</th>
                <th className="px-4 py-4 border-b font-semibold text-gray-600">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-4">Up to 3,00,000</td>
                <td className="px-4 py-4">Nil</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">3,00,001 - 6,00,000</td>
                <td className="px-4 py-4">5%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">6,00,001 - 9,00,000</td>
                <td className="px-4 py-4">10%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">9,00,001 - 12,00,000</td>
                <td className="px-4 py-4">15%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">12,00,001 - 15,00,000</td>
                <td className="px-4 py-4">20%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">Above 15,00,000</td>
                <td className="px-4 py-4">30%</td>
              </tr>
            </tbody>
            </table>
            </div>
            <div>
              <h2 className='text-left py-5 text-xl text-gray-800 font-semibold' >Key features:</h2>
              <ul className='text-left text-gray-700'>
                <li className='mt-1.5'>✔️Tax Rebate up to ₹7,00,000. </li>
                <li className='mt-1.5'>✔️Standard deduction ₹50,000.</li>
                <li className='mt-1.5'>✔️Tax Exemption limit ₹3,00,00.</li>
                <li className='mt-1.5'>❌No marginal relief provision.</li>
                <li className='mt-1.5'>✔️80c-80d</li>
              </ul>

            </div>
            
          </div>


          <div className='w-full md:w-1/2 border bg-white border-amber-50 rounded-3xl shadow-xl p-6'>
            <h2 className='text-xl  font-bold mb-4'>Financial Year 2025-26</h2>
            <p className='text-gray-700 font-semibold mb-2'>Tax Slabs</p>
{/* fy25 table */}
            <div className='rounded-2xl overflow-hidden border border-gray-200 shadow-md'>
              <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 ">
              <tr>
                <th className="px-4 py-4 border-b font-semibold text-gray-600">Income Range (₹)</th>
                <th className="px-4 py-4 border-b font-semibold text-gray-600">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-4">Up to 4,00,000</td>
                <td className="px-4 py-4">Nil</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">4,00,001 - 8,00,000</td>
                <td className="px-4 py-4">5%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">8,00,001 - 12,00,000</td>
                <td className="px-4 py-4">10%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">12,00,001 - 16,00,000</td>
                <td className="px-4 py-4">15%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">16,00,001 - 20,00,000</td>
                <td className="px-4 py-4">20%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">20,00,001 - 24,00,000</td>
                <td className="px-4 py-4">25%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-4">Above 24,00,000</td>
                <td className="px-4 py-4">30%</td>
              </tr>
            </tbody>
            </table>
            </div>
            <div>
              <h2 className='text-left py-6 text-xl text-gray-800 font-semibold' >Key features:</h2>
              <ul className='text-left text-gray-700'>
                <li className='mt-1.5'>✔️Tax Rebate up to ₹12,00,000.</li>
                <li className='mt-1.5'>✔️Standard deduction ₹75,000.</li>
                <li className='mt-1.5'>✔️Tax Exemption limit ₹4,00,000.</li>
                <li className='mt-1.5'>✔️Marginal Relief between ₹12L - ₹12.75L.</li>
                <li className='mt-1.5'>✔️no 80c-80d deduction </li>
                
              </ul>
            </div>
          </div>

        
        
        </div>
        <div className='px-4 sm:px-10 md:px-20 py-10 bg-gray-200 rounded-3xl mt-10 shadow-md'>
          <h1 className='text-xl text-gray-700 font-semibold mb-2'>To read more about Tax Regime follow the link: </h1>
          <a href="http://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-1" className='text-indigo-600 underline hover:text-indigo-800 transition'> - Income Tax Official Website -</a>         
        </div>
        <div className=''>
        <div className="bg-orange-100 rounded-2xl px-10 py-4 mt-10 ">
          <h1 className='flex text-xl text-yellow-900 font-semibold'> ⚠️Important Note!</h1>
          <p className='flex text-left px-7 mt-2 text-yellow-800'>This calculator provides estimates based on standard deductions and tax rates. Actual figures may vary based on your specific situation, tax regime choice, and company policies.</p>
        </div>
      </div>
      </div>

      
        
    </>
  );
}

export default Taxregime