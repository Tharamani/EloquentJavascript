/** @format */

function findSolution(target) {
	console.log('target', target);
	function find(current, history) {
		console.log('current : history: ', `${current}, ${history}`);
		if (current == target) {
			console.log('current == target', `${current}, ${target}`);
			return history;
		} else if (current > target) {
			console.log('current > target', `${current}, ${target}`);
			return null;
		} else {
			console.log(find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`));
			return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
		}
	}
	return find(1, '1');
}

console.log(findSolution(13));
