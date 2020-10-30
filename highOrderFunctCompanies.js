/*
High order functions 
*/
const companies= [
    {name: "Company 1", category: "Finance", start: 2000, end: 2016, employees: 20},
    {name: "Company 2", category: "Retail", start: 2000, end: 2018, employees: 60},
    {name: "Company 3", category: "Auto", start: 2010, end: 2018, employees: 10},
    {name: "Company 4", category: "Retail", start: 2000, end: 2006, employees: 8},
    {name: "Company 5", category: "Technology", start: 2014, end: 2018, employees: 26},
    {name: "Company 6", category: "Finance", start: 2002, end: 2010, employees: 12},
    {name: "Company 7", category: "Auto", start: 2006, end: 2014, employees: 22},
    {name: "Company 8", category: "Technology", start: 2002, end: 2016, employees: 24},
    {name: "Company 9", category: "Retail", start: 2000, end: 2016, employees: 30}
  ];

// //---------map--------- company names
let compNames = companies.map( company => `${company.name} - ${company.category}: [${company.start} - ${company.end}]`);
console.log("compNames: ",compNames);

//---------filter--------- retail company
let TechCompFilter = companies.filter(company => company.category === "Technology");
console.log("retailCompanyFilter: ",TechCompFilter);

//---------filter--------- companies that started in 2010 - 2018
let startedComp = companies.filter(company => (company.start >=2010 && company.start < 2018));
console.log("startedComp: ",startedComp);

//---------filter--------- lasted 10 years or more
let lasted10years = companies.filter(company => ((company.end - company.start) >= 10));
console.log("lasted10years: ",lasted10years);

//---------filter--------- number of employees - more than 25
let compEmp = companies.filter(company => (company.employees >= 25));
console.log("Company Employees: ",compEmp);

//---------sort--------- sort companies start date
let sortedComp = companies.sort((a,b)=> (a.start > b.start ? 1 : -1));
console.log(sortedComp);

