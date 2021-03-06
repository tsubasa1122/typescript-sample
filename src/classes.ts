class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

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
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。")
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return
    };
    this.employees.push(name);
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }
}

console.log(Department.createEmployee("Jon"));
console.log(Department.fiscalYear);
const accounting = AccountingDepartment.getInstance();
console.log(accounting);
accounting.mostRecentReport = "Account";
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Tom");
// accounting.employees[0] = "Lee";
accounting.printEmployeeInformation();

accounting.describe();
