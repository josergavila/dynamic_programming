// betSum Implementation (shortest combination)
// m = target sum; n = numbers.length

// (i) recursive bestSum (brute Force)
// Time complexity >> O(n ** m * m) -> multiplicative m comes from array copying
// Space complexity >> O(m ** 2) -> at every level needs to store an array
const bestSum1 = (targetSum, numbers) => {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;
	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderCombination = bestSum1(remainder, numbers);
		if (remainderCombination !== null) {
			const combination = [ ...remainderCombination, num ];
			// update with combination is shorter than shortest combination
			if (shortestCombination === null || combination.length < shortestCombination.length) {
				shortestCombination = combination;
			}
		}
	}

	return shortestCombination;
}
console.log(bestSum1(7, [5, 3, 4, 7]));
console.log(bestSum1(8, [2, 3, 5]));


// // (ii) memoized bestSum
// // Time complexity >> O(m * n * m) -> polynomial
// // Space complexity >> O(m ** 2)
const bestSum2 = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;
	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderCombination = bestSum2(remainder, numbers, memo);
		if (remainderCombination !== null) {
			const combination = [ ...remainderCombination, num ];
			// update with combination is shorter than shortest combination
			if (shortestCombination === null || combination.length < shortestCombination.length) {
				shortestCombination = combination;
			}
		}
	}

	memo[targetSum] = shortestCombination;
	return shortestCombination;
}
console.log(bestSum2(100, [1, 2, 5, 25]));
