function Employee(employeeID,fullName,department,level,salary) {
  this.employeeID=employeeID;
  this.fullName=fullName;
  this.department=department;
  this.level=level;
  this.imgspath=`./imgs/empl.jpeg`;
  this.salary=salary
 

}

Employee.prototype.random = function (){
   { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}

function eSalary(level){
  if(level=="Senior"){
      return random(1500,2000);
  }else if(level=="Midsenior"){
      return random(1000,1500);
  }else if(level=="Junior"){
   return random(500,1000);

  }
}
Employee1.random();
Employee2.random();
Employee3.random();
Employee4.random();
Employee5.random();
Employee6.random();
Employee7.random();

function taxPersent(salary){
  return salary*75*100;
}



let Employee1=new Employee(1000,"Ghazi Samer","Administration,senior",eSalary);
let Employee2= new Employee (1001,"Lana Ali	","Finance","Senior",eSalary);
let Employee3= new Employee (1002,"Tamara Ayoub	","Marketing	","Senior",eSalary);
let Employee4= new Employee(1003,"Safi Walid	","Administration","Mid-Senior",eSalary);
let Employee5= new Employee(1004,"Omar Zaid	","Development	","Senior",eSalary);
let Employee6= Employee (1005,"Rana Saleh	","Development","Junior",eSalary);
let Employee7= new Employee (1006,"Hadi Ahmad	","Finance","Mid-Senior",eSalary);


Employee.prototype.render=function(){
  document.write(`Employee name is${this.fullName} and salary is${this.salary}`)
}
Employee1.render();
Employee2.render();
Employee3.render();
Employee4.render();
Employee5.render();
Employee6.render();
Employee7.render();

