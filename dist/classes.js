"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id = string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // validation, etc
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`IT department - ID: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[reports.length - 1];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value.');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log(`Accounting department - ID: ${this.id}`);
    }
    addEmployee(name) {
        if (name !== 'Chaz') {
            this.employees.push(name);
        }
    }
    addReport(text) {
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
accounting.mostRecentReport = 'setter report';
console.log(accounting.mostRecentReport);
//# sourceMappingURL=classes.js.map