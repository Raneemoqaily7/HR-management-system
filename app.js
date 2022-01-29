function Employee(fullName, department, level, imgUrl, employeeID, salary) {

  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imagepath = imgUrl;
  this.employeeID = employeeID;
  this.salary = salary

}

const Ghazi = new Employee("Ghazi", "administration", "Senior", "assest/Ghazi.jpg ", 1000);
const Lana = new Employee("Lana", "Finance", "Senior", "assest/Lana.jpg", 1001);
const Tamara = new Employee("Tamara	", "Marketing", "Senior", "assest/Tamara.jpg", 1002);
const Safi = new Employee("Safi	", "administration", "Midsenior", "assest/Safi.jpg", 1003);
const Omar = new Employee("Omar", "Development", "Senior", "assest/Omar.jpg", 1004);
const Rana = new Employee("Rana	", "Development", "Junior", "assest/Rana.jpg", 1005);
const Hadi = new Employee("Hadi 	", "Finance", "Midsenior", "assest/Hadi.jpg", 1006);

if (JSON.parse(localStorage.getItem("employees")) == null) {
  Employee.employees = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi]
}
else {
  Employee.employees = JSON.parse(localStorage.getItem("employees"))
}


// helper Function

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
//The maximum is exclusive and the minimum is inclusive

// prototype function to calculate salary without tax

Employee.prototype.netSalary = function (min, max) {

  if (this.level == "Senior") {
    let random = getRandomNumber(1500, 2000)
    return this.salary = random;
  } else if (this.level == "Midsenior") {
    let random = getRandomNumber(1000, 1500)
    return this.salary = random;

  } else if (this.level == "Junior") {
    let random = getRandomNumber(500, 1000)
    return this.salary = random;
  }
}
//prototype function to calculate salary with tax

Employee.prototype.netSalarytax = function (min, max) {
   if (this.level.toLowerCase() == "senior") {
    let random = getRandomNumber(1500, 2000)
    return this.salary = random - (0.075 * random);
  } else if (this.level.toLowerCase() == "midsenior") {
    let random = getRandomNumber(1000, 1500)
    return this.salary = random - (0.075 * random);

  } else if (this.level.toLowerCase() == "junior") {
    let random = getRandomNumber(500, 1000)
    return this.salary = random - (0.075 * random);
  } 
}



Ghazi.netSalarytax()
Lana.netSalarytax()
Tamara.netSalarytax()
Safi.netSalarytax()
Omar.netSalarytax()
Rana.netSalarytax()
Hadi.netSalarytax()

Employee.prototype.render = function () {
  let mySection = document.getElementById("new");
  let divEl = document.createElement("div");
  divEl.setAttribute("id", "imgdiv")

  mySection.appendChild(divEl);
  let pEl = document.createElement("p")

  let imgEl = document.createElement("img");
  divEl.appendChild(imgEl);
  imgEl.setAttribute("src", this.imagepath)
  imgEl.setAttribute("id", "employeeImage")
  divEl.appendChild(pEl);

  pEl.textContent = `Name:${this.fullName} - ID: ${this.employeeID}   `;

  let pE2 = document.createElement("p")
  divEl.appendChild(pE2);
  pE2.textContent = `Department:${this.department}`;

  let pE3 = document.createElement("p")
  divEl.appendChild(pE3);
  pE3.textContent = `Level: ${this.level}`;
  let pE4 = document.createElement("p")
  divEl.appendChild(pE4);
  pE3.textContent = `${this.salary}`;
}



localStorage.setItem("employees", JSON.stringify(Employee.employees))

JSON.parse(localStorage.getItem("employees")).forEach(

  emp => {

    var e = new Employee(emp.fullName, emp.department, emp.level, emp.imagepath, emp.employeeID, emp.salary)
    e.render()
  }
)

uniqeEmployeeID = function () {
  return Math.floor(1000 + Math.random() * 9000);
}

let deplformation = document.getElementById("deplform");
deplformation.addEventListener("submit", addNewInData)

function addNewInData(event) {
  event.preventDefault()
  let fullName = event.target.name.value;
  let department = event.target.depa.value;
  let level = event.target.level.value;
  let imgUrl = event.target.imgUrl.value;
  let employeeID = uniqeEmployeeID()
  let newEmployee = new Employee(fullName, department, level, imgUrl, employeeID)
  newEmployee.netSalarytax()
  Employee.employees.push(newEmployee)
  localStorage.setItem("employees", JSON.stringify(Employee.employees))

  newEmployee.render()
}

// Employee.prototype.render=function(){
//   document.write(`Employee name is${this.fullName}     and salary is${this.salary} his uniqe ID is${this.employeeID} <br>`)
// }
// Employee1.render();
// Employee2.render();
// Employee3.render();
// Employee4.render();
// Employee5.render();
// Employee6.render();
// Employee7.render();

//  function generateId() 
//  {var id = Math.floor(1000 + Math.random() * 9000);
//  return id}

//  const form  = document.getElementById('depaform');

// form.addEventListener('submit', (event) => {
//     console.log(event)
//     event.preventDefault();
// });

// form.elements['fname']; // by name
