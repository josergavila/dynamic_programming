// canConstruct Implementation
// m = target.length and n = wordBank.length


// (i) brute force canConstruct
// Time complexity >> O(n ** m * m) -> multiplicative m comes from word slicing
// Space complexity >> O(m ** 2)
const canConstruct1 = (target, wordBank) => {
	if (target === '') return true;

	for (let word of wordBank) {
		// needs to check if there is prefix of target in wordBank
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			if (canConstruct1(suffix, wordBank) === true) {
				return true;
			}
		}
	}

	return false;
};
console.log(canConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd"]));


// (ii) memoized canConstruct
// Time complexity >> O(n * m ** 2)
// Space complexity >> O(m ** 2)
	const canConstruct2 = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return true;

	for (let word of wordBank) {
		// needs to check if there is prefix of target in wordBank
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			if (canConstruct2(suffix, wordBank, memo) === true) {
				memo[target] = true;
				return true;
			}
		}
	}

	memo[target] = false;
	return false;
};
console.log(canConstruct2("eeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeeeeeeeee"]));
