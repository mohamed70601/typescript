class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(
    private readonly id: string,
    public name: string,
  ) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Departement (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accouting = new Department("d1", "Accounting");

accouting.addEmployee("Moh");
accouting.addEmployee("Manu");

// accouting.employees[2] = "Anna";

accouting.describe();
accouting.printEmployeeInformation();
