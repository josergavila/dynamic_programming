// countCounstruct Implementation
// m = target.length and n = wordBank.length


// (i) brute force countConstruct
// Time complexity >> O(n ** m * m) -> multiplicative m comes from word slicing
// Space complexity >> O(m ** 2)
const countConstruct1 = (target, wordBank) => {
	if (target === '') return 1;
	
	let totalCount = 0;
	for (word of wordBank) {
		if (target.indexOf(word) === 0) {
			const numWaysForRest = countConstruct1(target.slice(word.length), wordBank);
			totalCount += numWaysForRest;
		}
	}

	return totalCount;
};
console.log(countConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct1("purple", ["purp", "p", "ur", "le", "purpl"]));


// (ii) memoized countConstruct
// Time complexity >> O(n * m ** 2)
// Space complexity >> O(m ** 2)
const countConstruct2 = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return 1;

	let totalCount = 0;
	for (word of wordBank) {
		if (target.indexOf(word) === 0) {
			const numWaysForRest = countConstruct2(target.slice(word.length), wordBank, memo);
			totalCount += numWaysForRest;

		}

	}
	memo[target] = totalCount;
	return totalCount;
};
console.log(countConstruct2("eeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeeeee"]));
