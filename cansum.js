// canSum Implementation

// (i) recursive canSum (brute Force)
// m = target sum; n = array length
// Time complexity >> O(n ** m)
// Space complexity >> O(m)
const canSum1 = (targetSum, numbers) => {
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (let num of numbers) {
		const remainder = targetSum - num;
		if (canSum1(remainder, numbers) === true) {
			return true;
		}
	}
	return false;
}
console.log(canSum1(7, [2, 3]));

// (ii) recursive canSum with memoization
// m = target sum; n = array length
// Time complexity >> O(m * n)
// Space complexity >> O(m)
const canSum2 = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (let num of numbers) {
		const remainder = targetSum - num;
		if (canSum2(remainder, numbers, memo) === true) {
			memo[targetSum] = true;
			return true;
		}
	}

	memo[targetSum] = false;
	return false;
}
console.log(canSum2(7, [2, 3]));
console.log(canSum2(300, [7, 14]));


// (iii) canSum tabulation 
// Time complexity >> O(m * n)
// Space complexity >> O(m)
const canSum = (targetSum, numbers) => {
	const table = Array(targetSum + 1).fill(false);
	table[0] = true;
	for (let i = 0; i <= targetSum; i++) {
		if (table[i] === true) {
			for (let num of numbers) {
				table[i + num] = true;
			}
		}
	}
	return table[targetSum];
};
console.log(canSum(7, [5, 3, 4, 7]));
