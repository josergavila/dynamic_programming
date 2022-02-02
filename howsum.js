// howSum Implementation (at least one combination)
// m = target sum; n = array length

// (i) recursive howSum (brute Force)
// Time complexity >> O(n ** m * m) -> last m comes from copying array
// Space complexity >> O(m)
const howSum1 = (targetSum, numbers) => {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderResult = howSum1(remainder, numbers);
		if (remainderResult !== null) {
			return [ ...remainderResult, num];
		}
	}

	return null;
}
console.log(howSum1(7, [2, 3]));
console.log(howSum1(7, [2, 4]));


// (ii) recursive howSum with memoization
// Time complexity >> O(n * m * m) -> last m comes from copying array
// Space complexity >> O(m ** 2)
const howSum2 = (targetSum, numbers, memo={}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderResult = howSum2(remainder, numbers, memo);
		if (remainderResult !== null) {
			memo[targetSum] = [ ...remainderResult, num];
			return memo[targetSum];
		}
	}

	memo[targetSum] = null;
	return null;
}
console.log(howSum2(7, [2, 3]));
console.log(howSum2(300, [7, 14]));
