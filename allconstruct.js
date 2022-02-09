// allCounstruct Implementation
// m = target.length and n = wordBank.length


// (i) brute force countConstruct
// Time complexity >> O(n ** m)
// Space complexity >> O(m)
const allConstruct1 = (target, wordBank) => {
	if (target === '') return [[]];

	const result = [];

	for (word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			const suffixWays = allConstruct1(suffix, wordBank);
			const targetWays = suffixWays.map(way => [ word, ...way]);
			result.push(...targetWays);
		}
	}

	return result;
};
console.log(allConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct1("purple", ["purp", "p", "ur", "le", "purpl"]));

// (ii) memoized countConstruct
// Time complexity >> O(n * m)
// Space complexity >> O(m)
const allConstruct2 = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return [[]];

	const result = [];

	for (word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			const suffixWays = allConstruct1(suffix, wordBank, memo);
			const targetWays = suffixWays.map(way => [ word, ...way]);
			result.push(...targetWays);
		}
	}

	memo[target] = result;
	return result
	
};
console.log(allConstruct2("eeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeeeee"]));
