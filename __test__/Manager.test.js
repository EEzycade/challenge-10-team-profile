const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('checks to see if an manager object is created', () => {
    const manager = new Manager("Bob", "5", "bob@bob.com", "2");

    expect(typeof(manager)).toBe("object");
});

test('checks to see if name is generated', () => {
    const testValue = "Bob";
    const manager = new Manager(testValue, "5", "bob@bob.com", "2");

    expect(manager.getName()).toBe(testValue);
});

test('checks to see if manager ID is generated', () => {
    const testValue = 5;
    const manager = new Manager("Bob", testValue, "bob@bob.com", "2");

    expect(manager.getEmployeeId()).toBe(testValue);
});

test('checks to see if email is generated', () => {
    const testValue = "bob@bob.com"
    const manager = new Manager("Bob", "5", testValue, "2");

    expect(manager.getEmail()).toBe(testValue);
});

test('checks to see if email is generated', () => {
    const testValue = "2"
    const manager = new Manager("Bob", "5", "bob@bob.com", testValue);

    expect(manager.getOfficeNum()).toBe(testValue);
});