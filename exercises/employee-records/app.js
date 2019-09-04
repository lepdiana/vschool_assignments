const employees = []

function Employee(name, jobTitle, salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full time";
}

Employee.prototype.printEmployeeForm = function(){
    return this
}

const employee1 = new Employee("Susan", "Mechanical Engineer", 120000)
employee1.status = "Part time"
console.log(employee1.printEmployeeForm())
const employee2 = new Employee("Robert", "Data Analyst", 58000)
employee2.status = "Contract"
console.log(employee2.printEmployeeForm())
const employee3 = new Employee("Jake", "Auto Mechanic", 38000, "Part time")
employee3.status = "Part time"
console.log(employee3.printEmployeeForm())

employees.push(employee1)
employees.push(employee2)
employees.push(employee3)
// console.log(employees)




