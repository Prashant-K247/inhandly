import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Link} from 'react-router-dom'
import Taxregime from '../Pages/Taxregime';

function Result({ result }) {
  if (!result) return (
    <div className='w-1/2 pl-10 border-l flex items-center justify-center text-gray-400'>
      Enter valid CTC and component values.
    </div>
  );


  const { breakdown, netAnnual, netMonthly } = result;
  const combinedData = [
    { name: 'Basic', value: breakdown.basic },
    { name: 'HRA', value: breakdown.hra },
    { name: 'DA', value: breakdown.da },
    { name: 'LTA', value: breakdown.lta },
    { name: 'Special Allowance', value: breakdown.specialAllowance },
    { name: 'Bonus', value: breakdown.bonus },
    { name: 'EPF', value: breakdown.epf },
    { name: 'Professional Tax', value: breakdown.professionalTax },
  ];

  
  const PASTEL_COLORS = [
  "#87CEEB", // Sky Blue
  "#F08080", // Light Coral
  "#66CDAA", // Medium Aquamarine
  "#FAFAD2", // Light Goldenrod
  "#DA70D6", // Orchid
  "#F4A460", // Sandy Brown
  "#AFEEEE", // Pale Turquoise
  "#D8BFD8"  // Thistle
];



  return (
    <div className='w-1/2 pl-10 border-l'>
      <h2 className='text-xl font-bold text-gray-700 mb-4'>Salary Breakdown</h2>

      <div className='bg-gray-100 p-6 rounded-lg shadow'>
        <div className='mb-4 space-y-1'>
          <div className='flex justify-between'>
            <p className='text-gray-700 font-semibold'>Net Monthly Equivalent (Pre-tax):</p>
            <span className='text-green-600 font-semibold'>₹{netMonthly.toLocaleString()}</span>
          </div>
          <div className='flex justify-between'>
            <p className='text-gray-700 font-semibold'>Net Annual Salary (Pre-tax):</p>
            <span className='text-green-600 font-semibold'>₹{netAnnual.toLocaleString()}</span>
          </div>
        </div>

        <hr className='my-4' />

        <div className='space-y-1'>
          <h1 className='text-left text-gray-800 font-semibold'>Earnings</h1>
          <div className='flex justify-between'><p className='text-gray-700'>Basic:</p><span>₹{Math.round(breakdown.basic).toLocaleString()}</span></div>
          <div className='flex justify-between'><p className='text-gray-700'>HRA:</p><span>₹{Math.round(breakdown.hra).toLocaleString()}</span></div>
          <div className='flex justify-between'><p className='text-gray-700'>DA:</p><span>₹{Math.round(breakdown.da).toLocaleString()}</span></div>
          <div className='flex justify-between'><p className='text-gray-700'>LTA:</p><span>₹{Math.round(breakdown.lta).toLocaleString()}</span></div>
          <div className='flex justify-between'><p className='text-gray-700'>Special Allowance:</p><span>₹{Math.round(breakdown.specialAllowance).toLocaleString()}</span></div>
          <div className='flex justify-between'><p className='text-gray-700'>Bonus:</p><span>₹{Math.round(breakdown.bonus).toLocaleString()}</span></div>
          <div className='flex justify-between font-medium mt-2'><p className='text-gray-700'>Gross Salary:</p><span>₹{Math.round(breakdown.grossSalary).toLocaleString()}</span></div>
        </div>

        <hr className='my-4' />

        <div className='space-y-1'>
          <h1 className='text-left text-red-500 font-semibold'>Deductions</h1>
          <div className='flex justify-between'><p className='text-red-500'>EPF (12% of Basic):</p><span className='text-red-500'>₹{Math.round(breakdown.epf).toLocaleString()}</span></div>
          <div className='flex justify-between'><p className='text-red-500'>Professional Tax:</p><span className='text-red-500'>₹{Math.round(breakdown.professionalTax).toLocaleString()}</span></div>
          <div className='flex justify-between font-medium'><p className='text-red-600'>Total Deductions:</p><span className='text-red-500'>₹{Math.round(breakdown.totalDeductions).toLocaleString()}</span></div>
        </div>

        <hr className='my-4' />

        <div className='flex justify-between font-semibold'>
          <p className='text-gray-700'>Net Taxable Income (Post Deductions):</p>
          <span>₹{Math.round(breakdown.taxableIncome).toLocaleString()}</span>
        
          
        </div>
        <nav className='py-3 mt-4'>
                <Link to="/taxregime" >
                <button className='bg-indigo-600 text-white cursor-pointer rounded-xl px-5 py-3'>Calculate Income Tax</button>
                </Link>  
        </nav>
        

        <div className='mt-8 border-t pt-6'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Combined Earnings & Deductions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={combinedData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {combinedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PASTEL_COLORS[index % PASTEL_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>


      </div>
    </div>
  );
}

export default Result;