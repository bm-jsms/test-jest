const Person = require('./05_person');

describe('test for Person', () => {
	let person = null;

	beforeEach(() => {
		person = new Person('Dan', 60, 1.7);
	});

	test('should calculate BMI correctly', () => {
		const result = person.calcBMI();

		expect(result).toBe('Normal');
	});

	test('should return overweight when BMI is 25', () => {
		person.weight = 85;
		const result = person.calcBMI();

		expect(result).toBe('Overweight');
	});
});
