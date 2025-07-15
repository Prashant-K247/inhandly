export function oldregimetax(income) {
  const standardDeduction = 50000;
  let taxableIncome = income - standardDeduction; // standard deduction
  if (taxableIncome <= 700000) return { tax: 0, standardDeduction, taxableIncome };

  let tax = 0;
  const slabs = [
    { limit: 300000, rate: 0 },
    { limit: 600000, rate: 0.05 },
    { limit: 900000, rate: 0.1 },
    { limit: 1200000, rate: 0.15 },
    { limit: 1500000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 }
  ];

  let prev = 0;
  for (let slab of slabs) {
    if (taxableIncome > slab.limit) {
      tax += (slab.limit - prev) * slab.rate;
      prev = slab.limit;
    } else {
      tax += (taxableIncome - prev) * slab.rate;
      break;
    }
  }
  return {
    tax: Math.round(tax),
    standardDeduction,
    taxableIncome
  };
}

export function newregimetax(income) {
  const standardDeduction = 75000;
  let taxableIncome = income - standardDeduction; // standard deduction
  if (taxableIncome <= 1200000) return { tax: 0, standardDeduction, taxableIncome };

  let tax = 0;
  const slabs = [
    { limit: 400000, rate: 0 },
    { limit: 800000, rate: 0.05 },
    { limit: 1200000, rate: 0.1 },
    { limit: 1600000, rate: 0.15 },
    { limit: 2000000, rate: 0.2 },
    { limit: 2400000, rate: 0.25 },
    { limit: Infinity, rate: 0.3 }
  ];

  let prev = 0;
  for (let slab of slabs) {
    if (taxableIncome > slab.limit) {
      tax += (slab.limit - prev) * slab.rate;
      prev = slab.limit;
    } else {
      tax += (taxableIncome - prev) * slab.rate;
      break;
    }
  }
  return {
    tax: Math.round(tax),
    standardDeduction,
    taxableIncome
  };
}