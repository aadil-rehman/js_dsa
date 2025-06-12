var isPalindrome = function (x) {
	if (x < 0) return false;
	const original = x;
	let rev = 0;
	while (x > 0) {
		let lastDigit = x % 10;
		rev = rev * 10 + lastDigit;
		x = Math.floor(x / 10);
	}

	return rev === original;
};

console.log(isPalindrome(12321));
