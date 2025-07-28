import React from 'react';

function Input({ ctc, setCtc, esops, setEsops, components, handleComponentChange,showError}) {

  return (
    <div className='w-full md:w-1/2'>
      <h1 className='text-3xl font-bold text-gray-700 mb-6'>CTC to Inhand Calculator</h1>
      <div>
        <label className='block text-gray-600 mb-1 text-left font-semibold'>Cost to Company (CTC)*</label>
        <input
        type="text"
        placeholder='Enter your yearly CTC  (e.g - 2500000)'
        className='w-full px-5 py-3 mb-6 border border-gray-300 rounded-lg shadow-sm'
        value={ctc}
        onChange={(e) => setCtc(e.target.value)}
        />
      </div>
      
      {/* ESOPs Input */}
        <div className='mb-6'>
          <label className='block text-gray-600 mb-1 text-left font-semibold'>ESOPs (in ₹)*</label>
          <input
            type='text'
            placeholder='Enter ESOPs  (enter 0 if none)'
            inputMode='numeric'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            value={esops}
            onChange={(e) => setEsops(e.target.value)}
          />
        </div>
      
      <div>
        <h3 className='text-left text-gray-700 mb-4 text-xl'>Components:</h3>
      {/* components */}
      {[
        { label: 'Basic Salary', key: 'basic' },
        { label: 'HRA', key: 'hra' },
        { label: 'DA', key: 'da' },
        { label: 'LTA', key: 'lta' },
        { label: 'Special Allowance', key: 'specialAllowance' },
        { label: 'Performance Bonus', key: 'bonus' }
      ].map(({ label, key }) => (
        <div key={key} className='mb-4 text-left font-semibold'>
          <label className='block text-gray-600 mb-1'>{label}</label>
          <input
            type='text'
            inputMode='numeric'
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            value={components[key] === 0 ? '' : components[key]}
            onChange={(e) => handleComponentChange(key, e.target.value)}
          />
        </div>
      ))}
      {showError && (
          <p className="text-white mb-4 bg-red-500 rounded-xl py-2 text-xl">
             Component values do not add up to CTC, Please correct them.
          </p>
      )}

      </div>
         
    </div>
  );
}

export default Input;
