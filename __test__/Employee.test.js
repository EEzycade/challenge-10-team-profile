const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('checks to see if an employee object is created', () => {
    const employee = new Employee("Bob", "5", "bob@bob.com");

    expect(typeof(employee)).toBe("object");
});

test('checks to see if name is generated', () => {
    const testValue = "Bob";
    const employee = new Employee(testValue, "5", "bob@bob.com");

    expect(employee.getName()).toBe(testValue);
});

test('checks to see if employee ID is generated', () => {
    const testValue = 5;
    const employee = new Employee("Bob", testValue, "bob@bob.com");

    expect(employee.getEmployeeId()).toBe(testValue);
});

test('checks to see if email is generated', () => {
    const testValue = "bob@bob.com"
    const employee = new Employee("Bob", "5", testValue);

    expect(employee.getEmail()).toBe(testValue);
});