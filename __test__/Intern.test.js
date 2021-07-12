const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('checks to see if an intern object is created', () => {
    const intern = new Intern("Bob", "5", "bob@bob.com", "UofA");

    expect(typeof(intern)).toBe("object");
});

test('checks to see if name is generated', () => {
    const testValue = "Bob";
    const intern = new Intern(testValue, "5", "bob@bob.com", "UofA");

    expect(intern.getName()).toBe(testValue);
});

test('checks to see if intern ID is generated', () => {
    const testValue = 5;
    const intern = new Intern("Bob", testValue, "bob@bob.com", "UofA");

    expect(intern.getEmployeeId()).toBe(testValue);
});

test('checks to see if email is generated', () => {
    const testValue = "bob@bob.com"
    const intern = new Intern("Bob", "5", testValue, "UofA");

    expect(intern.getEmail()).toBe(testValue);
});

test('checks to see if email is generated', () => {
    const testValue = "UofA"
    const intern = new Intern("Bob", "5", "bob@bob.com", testValue);

    expect(intern.getSchool()).toBe(testValue);
});