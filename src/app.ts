class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

const accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Tom");
// accounting.employees[0] = "Lee";
accounting.printEmployeeInformation();

accounting.describe();
