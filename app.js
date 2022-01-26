function Employee(employeeID,fullName,department,level,salary) {
  this.employeeID=employeeID;
  this.fullName=fullName;
  this.department=department;
  this.level=level;
  this.salary=salary
}
//helper Function

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
 } //The maximum is exclusive and the minimum is inclusive

//prototype function to calculate salary without tax

Employee.prototype.netSalary= function (min,max){
 
  if(this.level=="Senior"){
      let random = getRandomNumber(1500,2000)
      return this.salary=random;
  }else if(this.level=="Midsenior"){
    let random = getRandomNumber(1000,1500)
    return this.salary=random;

    }else if(this.level=="Junior"){
      let random = getRandomNumber(500,1000)
      return this.salary=random;
    }
}
////prototype function to calculate salary with tax

Employee.prototype.netSalarytax= function (min,max){
 
  if(this.level=="Senior"){
      let random = getRandomNumber(1500,2000)
      return this.salary=random-(0.075*random);
  }else if(this.level=="Midsenior"){
    let random = getRandomNumber(1000,1500)
    return this.salary=random-(0.075*random);

    }else if(this.level=="Junior"){
      let random = getRandomNumber(500,1000)
      return this.salary=random-(0.075*random);
    }
}
let Employee1=new Employee(1000,"Ghazi Samer","Administration","Senior");
let Employee2= new Employee (1001,"Lana Ali	","Finance","Senior");
let Employee3= new Employee (1002,"Tamara Ayoub	","Marketing	","Senior");
let Employee4= new Employee(1003,"Safi Walid	","Administration","Midsenior");
let Employee5= new Employee(1004,"Omar Zaid	","Development	","Senior");
let Employee6= new Employee (1005,"Rana Saleh	","Development","Junior");
let Employee7= new Employee (1006,"Hadi Ahmad	","Finance","Midsenior");


Employee1.netSalarytax()
Employee2.netSalarytax()
Employee3.netSalarytax()
Employee4.netSalarytax()
Employee5.netSalarytax()
Employee6.netSalarytax()
Employee7.netSalarytax()



Employee.prototype.render=function(){
  document.write(`Employee name is${this.fullName}     and salary is${this.salary} <br>`)
}
Employee1.render();
Employee2.render();
Employee3.render();
Employee4.render();
Employee5.render();
Employee6.render();
Employee7.render();

