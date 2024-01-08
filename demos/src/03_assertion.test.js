test('test object equality', () => {
	const data = { one: 1 };
	data['two'] = 2;

	expect(data).toEqual({ one: 1, two: 2 });
});

test('null', () => {
	const n = null;

	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('boolean', () => {
	const t = true;
	const f = false;

	expect(t).toBeTruthy();
	expect(f).toBeFalsy();
	expect(f).not.toBeTruthy();
	expect(t).not.toBeFalsy();
});

test('string', () => {
	const str = 'Hello World!';

	expect(str).toMatch(/World/);
	expect(str).not.toMatch(/world/);
});

test('numbers', () => {
	const val = 2 + 2;

	expect(val).toBeGreaterThan(3);
	expect(val).toBeGreaterThanOrEqual(3.5);
	expect(val).toBeLessThan(5);
	expect(val).toBeLessThanOrEqual(4.5);

	expect(val).toBe(4);
	expect(val).toEqual(4);
});

test('list / array', () => {
	const arr = [1, 2, 3, 4, 5];

	expect(arr).toContain(3);
	expect(arr).not.toContain(6);
});
