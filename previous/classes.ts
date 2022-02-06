abstract class Department {
  static fiscalYear = 2021;
  // private id = string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation, etc
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
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log(`IT department - ID: ${this.id}`)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value.')
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[reports.length - 1];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting department - ID: ${this.id}`)
  }

  addEmployee(name:string) {
    if (name !== 'Chaz') {
      this.employees.push(name);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Chaz');
console.log(employee1, Department.fiscalYear);

// const accounting = new AccountingDepartment('001', []);
const accounting = AccountingDepartment.getInstance();
console.log(accounting);

// const accountingCopy = {name: 'Marketing', describe: accounting.describe};
// accountingCopy.describe();
// console.log(accounting.mostRecentReport);
accounting.addEmployee('Chaz');
accounting.addEmployee('Matt');
// accounting.employees[2] = 'Ana'; // bad
accounting.describe();
accounting.printEmployeeInformation();
accounting.addReport('report1');
accounting.addReport('report2');
accounting.printReports();
accounting.mostRecentReport = 'setter report'
console.log(accounting.mostRecentReport);
