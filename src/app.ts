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

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Tom");
// accounting.employees[0] = "Lee";
accounting.printEmployeeInformation();

accounting.describe();
