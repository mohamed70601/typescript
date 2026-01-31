class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accouting = new Department("Accounting");

accouting.addEmployee("Moh");
accouting.addEmployee("Manu");

// accouting.employees[2] = "Anna";

accouting.describe();
accouting.printEmployeeInformation();
