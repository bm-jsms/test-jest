class Person {
	constructor(name, weight, height) {
		this.name = name;
		this.weight = weight;
		this.height = height;
	}

	calcBMI() {
		const result = Math.round(this.weight / Math.pow(this.height, 2));

		if (result < 0) {
			return 'Invalid';
		} else if (result < 18.5) {
			return 'Underweight';
		} else if (result < 25) {
			return 'Normal';
		} else if (result < 30) {
			return 'Overweight';
		} else {
			return 'Obese';
		}
	}
}

module.exports = Person;
