class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
  }

  describe() {
    console.log(`Department: ${this.id} : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
    console.log(this.employees.length);
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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new ITDepartment("d1", ["Accounting"]);
accounting.addEmployee("Max");
accounting.addEmployee("Tom");
// accounting.employees[0] = "Lee";
accounting.printEmployeeInformation();

accounting.describe();
