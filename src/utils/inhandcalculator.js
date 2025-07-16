export function calculateInhand(ctc, components) {
  const {
    basic,
    hra,
    da,
    lta,
    specialAllowance, 
    bonus              
  } = components;

  const grossSalary = basic + hra + da + lta +bonus +specialAllowance ;
  const standardDeduction = 75000;
  const epf = 0.12 * (basic+da);
  const professionalTax = 2400;
  const fix = grossSalary-bonus;
  const totalDeductions = epf + professionalTax;
  const taxableIncome = fix - totalDeductions;

  const netAnnual = Math.max(0, taxableIncome);
  const netMonthly = Math.round(netAnnual / 12);

  return {
    breakdown: {
      basic,
      hra,
      da,
      lta,
      specialAllowance,
      bonus,
      grossSalary,
      standardDeduction,
      epf,
      professionalTax,
      fix,
      totalDeductions,
      taxableIncome,
    },
    netAnnual,
    netMonthly,
  };
}
