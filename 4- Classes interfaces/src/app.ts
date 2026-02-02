class Department {
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(
    id: string,
    private reports: string[],
  ) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Moh") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Moh"]);

it.addEmployee("Moh");
it.addEmployee("Manu");

// it.employees[2] = "Anna";

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");

accounting.addEmployee("Moh");
accounting.addEmployee("Manu");

accounting.printReports();
