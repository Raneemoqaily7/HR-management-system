function Employee(fullName,department,level,imgUrl,employeeID) {
  this.fullName=fullName;
  this.department=department;
  this.level=level;
  this.imagepath=imgUrl;
  this.employeeID=employeeID;
}

const Ghazi=new Employee("Ghazi","Administration","Senior","assest/Ghazi.jpg ",1000);
const Lana= new Employee ("Lana","Finance","Senior","assest/Lana.jpg",1001);
const Tamara= new Employee ("Tamara	","Marketing	","Senior","assest/Tamara.jpg",1002);
const Safi= new Employee("Safi	","Administration","Midsenior","assest/Safi.jpg",1003);
const Omar= new Employee("Omar","Development	","Senior","assest/Omar.jpg",1004);
const Rana= new Employee ("Rana	","Development","Junior","assest/Rana.jpg",1005);
const Hadi= new Employee ("Hadi 	","Finance","Midsenior","assest/Hadi.jpg",1006);

//helper Function

// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
//  } //The maximum is exclusive and the minimum is inclusive

//prototype function to calculate salary without tax

// Employee.prototype.netSalary= function (min,max){
 
//   if(this.level=="Senior"){
//       let random = getRandomNumber(1500,2000)
//       return this.salary=random;
//   }else if(this.level=="Midsenior"){
//     let random = getRandomNumber(1000,1500)
//     return this.salary=random;

//     }else if(this.level=="Junior"){
//       let random = getRandomNumber(500,1000)
//       return this.salary=random;
//     }
// }
////prototype function to calculate salary with tax

// Employee.prototype.netSalarytax= function (min,max){
 
//   if(this.level=="Senior"){
//       let random = getRandomNumber(1500,2000)
//       return this.salary=random-(0.075*random);
//   }else if(this.level=="Midsenior"){
//     let random = getRandomNumber(1000,1500)
//     return this.salary=random-(0.075*random);

//     }else if(this.level=="Junior"){
//       let random = getRandomNumber(500,1000)
//       return this.salary=random-(0.075*random);
//     }
// }



// let Ghazi=new Employee("Ghazi","Administration","Senior"+);
// let lana= new Employee ("Lana","Finance","Senior");
// let Tamara= new Employee ("Tamara	","Marketing	","Senior");
// let Safi= new Employee("Safi	","Administration","Midsenior");
// let Omar= new Employee("Omar","Development	","Senior");
// let Rana= new Employee ("Rana	","Development","Junior");
// let Hadi= new Employee ("Hadi 	","Finance","Midsenior");


// Employee1.netSalarytax()
// Employee2.netSalarytax()
// Employee3.netSalarytax()
// Employee4.netSalarytax()
// Employee5.netSalarytax()
// Employee6.netSalarytax()
// Employee7.netSalarytax()

// Employee1.uniqeNumber()
// Employee2.uniqeNumber()
// Employee3.uniqeNumber()
// Employee4.uniqeNumber()
// Employee5.uniqeNumber()
// Employee6.uniqeNumber()
// Employee7.uniqeNumber()



Employee.prototype.render=function(){
  let mySection=document.getElementById("new");
  let divEl=document.createElement("div");
  divEl.setAttribute("id","imgdiv")

  mySection.appendChild(divEl);
  let pEl=document.createElement("p")
  
  let imgEl=document.createElement("img");
  divEl.appendChild(imgEl);
  imgEl.setAttribute("src",this.imagepath)
  imgEl.setAttribute("id","employeeImage")
  divEl.appendChild(pEl);

  pEl.textContent=`Name:${this.fullName} - ID: ${this.employeeID}   `;

  let pE2=document.createElement("p")
  divEl.appendChild(pE2);
  pE2.textContent=`Department:${this.department}`;

  let pE3=document.createElement("p")
  divEl.appendChild(pE3);
  pE3.textContent=`Level: ${this.level}`;


}


Ghazi.render()
Lana.render()
Tamara.render()
Safi.render()
Omar.render()
Rana.render()
Hadi.render()



uniqeEmployeeID= function(){
  return Math.floor(1000 + Math.random() * 9000);
}

let deplformation=document.getElementById("deplform");
deplformation.addEventListener("submit",addNewInData)

function addNewInData(event){
  event.preventDefault()
let fullName =event.target.name.value;
let department=event.target.depa.value;
let level=event.target.level.value;
let imgUrl=event.target.imgUrl.value;
let employeeID = uniqeEmployeeID()
let newEmployee =new Employee(fullName,department,level,imgUrl, employeeID)
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
