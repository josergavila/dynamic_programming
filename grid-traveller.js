// grid traveller implementations


// (i) recursive grid traveller (brute force) 
// Time complexity >> O(2 ** (n + m))
// Space complexity >> O(n + m)
const gridTraveler1 = (m, n) => {
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	return gridTraveler1(m - 1, n) + gridTraveler1(m, n - 1);
};
console.log(gridTraveler1(1, 1));
console.log(gridTraveler1(3, 2));


// (i) recursive grid traveller with memoization
// Time complexity >> O(m * n)
// Space complexity >> O(n + m)
const gridTraveler2 = (m, n, memo = {}) => {
	// comma separator guarantees unique identification
	const key = m + ',' + n;
	if (key in memo) return memo[key];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
	return memo[key]
};
console.log(gridTraveler2(1, 1));
console.log(gridTraveler2(3, 2));
console.log(gridTraveler2(18, 18));
