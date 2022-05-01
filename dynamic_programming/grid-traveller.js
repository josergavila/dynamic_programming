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


// (ii) recursive grid traveller with memoization
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


// (iii) grid traveller tabulation
// Time complexity >> O(m * n)
// Space complexity >> O(n * m)
const gridTraveler = (m, n) => {
	const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
	// base case
	table[1][1] = 1; 
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			const current = table[i][j];
			if (j + 1 <= n) table[i][j + 1] += current;
			if (i + 1 <= m) table[i + 1][j] += current;
		}
	}
	
	return table[m][n];
};
console.log(gridTraveler(3, 2));
console.log(gridTraveler(18, 18));
