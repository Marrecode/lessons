/**
 * Vue.js Basics
 *
 */

const app = new Vue({
	el: '#app',
	data: {
		url: 'https://www.espressohouse.se',

		clicks: 0,
		salary: 10,
		x: 0,
		y: 0,
	},
	methods: {
		increaseClicks() {
			this.clicks++;
		},

		increaseSalary(amount) {
			this.changeSalary(amount)
			
			
		},
		decreaseSalary(amount) {
			const res = this.changeSalary(-amount);
			if (!res) {
				alert('didnt change');
			}
		},
		getSalary(){
			return `salary per hour: ${this.salary} per hour`
		},
		changeSalary(amount) {
			if (this.salary + amount < 0) {
				return false;
			} 
			this.salary += amount;
			return true;
		},

		updateCoords(e) {
			console.log(e);
			this.x = e.offsetX;
			this.y = e.offsetY;
		}
	},
});
