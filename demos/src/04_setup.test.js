describe('group 1', () => {
	beforeAll(() => {
		console.log('beforeAll');
	});

	afterAll(() => {
		console.log('afterAll');
	});

	beforeEach(() => {
		console.log('beforeEach');
	});

	afterEach(() => {
		console.log('afterEach');
	});

	test('case 1', () => {
		expect(3 * 7).toBe(21);
	});
	test('case 2', () => {
		expect(4 / 2).toBe(2);
	});

	describe('group 2', () => {
		test('case 3', () => {
			expect(5 * 7).toBe(35);
		});
		test('case 4', () => {
			expect(8 / 2).toBe(4);
		});
	});
});
