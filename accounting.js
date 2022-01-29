function Accounting(department, numberOfEmployees, salaryAvg, salaryTotal) {
    this.department = department;
    this.numberOfEmployees = numberOfEmployees;
    this.salaryAvg = salaryAvg;
    this.salaryTotal = salaryTotal;
}


Accounting.prototype.render = function () {

    let mySection = document.getElementById("deps");
    let tr = document.createElement("tr");
    mySection.appendChild(tr)
    let divEl = document.createElement("td");
    let divE2 = document.createElement("td");
    let divE3 = document.createElement("td");
    let divE4 = document.createElement("td");
    tr.appendChild(divEl);
    tr.appendChild(divE2);
    tr.appendChild(divE3);
    tr.appendChild(divE4);

    divEl.textContent = this.department;
    divE2.textContent = this.numberOfEmployees;
    divE3.textContent = this.salaryAvg;
    divE4.textContent = this.salaryTotal;
}
var employees = JSON.parse(localStorage.getItem("employees")) || []
console.log(employees, "Hereee")
// Marketing 
var employeesOfMarketing = employees.filter(employee => employee.department.toLowerCase() === 'marketing')
var numberOfEmployeesInMarketing = employeesOfMarketing.length
var salaryTotalInMarketing = 0
employeesOfMarketing.forEach(employee => salaryTotalInMarketing = salaryTotalInMarketing + employee.salary)
var salaryAvgInMarketing = salaryTotalInMarketing / numberOfEmployeesInMarketing
var marketing = new Accounting("Marketing", numberOfEmployeesInMarketing, salaryAvgInMarketing, salaryTotalInMarketing)
marketing.render()

//Finance
var employeesOfFinance = employees.filter(employee => employee.department.toLowerCase() === 'finance')
var numberOfEmployeesInFinance = employeesOfFinance.length
var salaryTotalInFinance = 0
employeesOfFinance.forEach(employee => salaryTotalInFinance = salaryTotalInFinance + employee.salary)
var salaryAvgInFinance = salaryTotalInFinance / numberOfEmployeesInFinance
var finance = new Accounting("Finance", numberOfEmployeesInFinance, salaryAvgInFinance, salaryTotalInFinance)
finance.render()
//Administration
var employeesOfAdministration = employees.filter(employee => employee.department.toLowerCase() === 'administration' )

var numberOfEmployeesInAdministration = employeesOfAdministration.length
var salaryTotalInAdministration = 0
employeesOfAdministration.forEach(employee => salaryTotalInAdministration = salaryTotalInAdministration + employee.salary)
var salaryAvgInAdministration = salaryTotalInAdministration / numberOfEmployeesInAdministration
var administration = new Accounting("Administration", numberOfEmployeesInAdministration, salaryAvgInAdministration, salaryTotalInAdministration)
administration.render()
//Development
var employeesOfDevelopment = employees.filter(employee => employee.department.toLowerCase() === 'development')
var numberOfEmployeesInDevelopment = employeesOfDevelopment.length
var salaryTotalInDevelopment = 0
employeesOfDevelopment.forEach(employee => salaryTotalInDevelopment = salaryTotalInDevelopment + employee.salary)
var salaryAvgInDevelopment = salaryTotalInDevelopment / numberOfEmployeesInDevelopment
var development = new Accounting("Development", numberOfEmployeesInDevelopment, salaryAvgInDevelopment, salaryTotalInDevelopment)
development.render()
var totalNumber = numberOfEmployeesInDevelopment  + numberOfEmployeesInMarketing +numberOfEmployeesInAdministration +numberOfEmployeesInFinance
var totalSalaryAvg = salaryAvgInDevelopment  + salaryAvgInMarketing +salaryAvgInAdministration +salaryAvgInFinance
var totalSalary = salaryTotalInDevelopment  + salaryTotalInMarketing +salaryTotalInAdministration +salaryTotalInFinance
var total = new Accounting("Marketing \n Finance \n Administration \n Development", totalNumber, totalSalaryAvg, totalSalary)
total.render()