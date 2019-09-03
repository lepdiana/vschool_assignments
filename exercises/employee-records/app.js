const employees = []

function Employee(name, jobTitle, salary, status="Full time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log(`
        Name: ${this.name}
        Job title: ${this.jobTitle}
        Salary: ${this.salary}
        Status: ${this.status}
        `);
    }
}

const employee1 = new Employee("Susan", "Mechanical Engineer", 120000, "Part time")
const employee2 = new Employee("Robert", "Data Analyst", 58000, "Contract")
const employee3 = new Employee("Jake", "Auto Mechanic", 38000, "Part time")

employees.push(employee1)
employees.push(employee2)
employees.push(employee3)
// console.log(employees)

console.log(employee1.printEmployeeForm())
console.log(employee2.printEmployeeForm())
console.log(employee3.printEmployeeForm())




