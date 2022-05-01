// fibonacci implementations


// (i) classical recursive fibonacci 
// Time complexity >> O(2 ** n)
// Space complexity >> O(n)
const fib1 = (n) => {
	if (n <= 2) return 1;
	return fib1(n - 1) + fib1(n - 2);
};
console.log(fib1(6));


// (ii) recursive fibonacci with memoization 
// Time complexity >> O(2n)
// Space complexity >> O(n)
const fib2 = (n, memo = {}) => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
	return memo[n];
};
console.log(fib2(6));
console.log(fib2(50));

// (iii) fibonacci table (linear complexity)
 const fib = (n) => {
	 const table = Array(n + 1).fill(0);
	 table[1] = 1;
	 for (let i = 0; i <= n; i++) {
		 table[i + 1] += table[i];
		 table[i + 2] += table[i];
	}
	return table[n];
 };
console.log(fib(6));
