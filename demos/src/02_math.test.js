const { add, subtract, multiply, divide } = require('./02_math');

test('adds 1 + 2 to equal 3', () => {
	const res = add(1, 2);
	expect(res).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
	const res = subtract(2, 1);
	expect(res).toBe(1);
});

test('multiplies 2 * 2 to equal 4', () => {
	const res = multiply(2, 2);
	expect(res).toBe(4);
});

test('divides 4 / 2 to equal 2', () => {
	const res = divide(4, 2);
	expect(res).toBe(2);
});

test('should return null when dividing by 0', () => {
	const res = divide(4, 0);
	expect(res).toBeNull();
});
