const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('checks to see if an engineer object is created', () => {
    const engineer = new Engineer("Bob", "5", "bob@bob.com", "b0b");

    expect(typeof(engineer)).toBe("object");
});

test('checks to see if name is generated', () => {
    const testValue = "Bob";
    const engineer = new Engineer(testValue, "5", "bob@bob.com", "b0b");

    expect(engineer.getName()).toBe(testValue);
});

test('checks to see if engineer ID is generated', () => {
    const testValue = 5;
    const engineer = new Engineer("Bob", testValue, "bob@bob.com", "b0b");

    expect(engineer.getEmployeeId()).toBe(testValue);
});

test('checks to see if email is generated', () => {
    const testValue = "bob@bob.com"
    const engineer = new Engineer("Bob", "5", testValue, "b0b");

    expect(engineer.getEmail()).toBe(testValue);
});

test('checks to see if email is generated', () => {
    const testValue = "b0b"
    const engineer = new Engineer("Bob", "5", "bob@bob.com", testValue);

    expect(engineer.getGitHub()).toBe(testValue);
});