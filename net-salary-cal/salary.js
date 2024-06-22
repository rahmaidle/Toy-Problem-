// Tax rates from KRA
const taxRates = [
    { min: 0, max: 12298, rate: 0.1 },
    { min: 12299, max: 23885, rate: 0.15 },
    { min: 23886, max: 35472, rate: 0.2 },
    { min: 35473, max: 47059, rate: 0.25 },
    { min: 47060, max: Infinity, rate: 0.3 }
  ];
  
  // NHIF rates
  const nhifRates = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 950 },
    { min: 40000, max: Infinity, rate: 1000 }
  ];
  
  // NSSF rates
  const nssfRate = 0.06;
  
  // Function to calculate tax
  function calculateTax(basicSalary) {
    let tax = 0;
    for (let i = 0; i < taxRates.length; i++) {
      if (basicSalary > taxRates[i].max) {
        tax += (taxRates[i].max - taxRates[i].min) * taxRates[i].rate;
      } else {
        tax += (basicSalary - taxRates[i].min) * taxRates[i].rate;
        break;
      }
    }
    return tax;
  }
  
  // Function to calculate NHIF
  function calculateNhif(basicSalary) {
    for (let i = 0; i < nhifRates.length; i++) {
      if (basicSalary <= nhifRates[i].max) {
        return nhifRates[i].rate;
      }
    }
    return 0;
  }
  
  // Function to calculate NSSF
  function calculateNssf(basicSalary) {
    return basicSalary * nssfRate;
  }
  
  // Main function
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhif = calculateNhif(grossSalary);
    const nssf = calculateNssf(grossSalary);
    const netSalary = grossSalary - tax - nhif - nssf;
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax: ${tax}`);
    console.log(`NHIF: ${nhif}`);
    console.log(`NSSF: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
    return netSalary;
  }
  
  // Test the function
  const basicSalary = 80000;
  const benefits = 10000;
  calculateNetSalary(basicSalary, benefits);