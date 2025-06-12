var reverse = function (x) {
	const xCopy = x;
	let limit = Math.pow(2, 31);
	x = Math.abs(x);

	let rev = 0;

	while (x > 0) {
		let last = x % 10;
		rev = rev * 10 + last;
		x = Math.floor(x / 10);
	}

	if (rev > limit || rev < -limit) return 0;
	return xCopy < 0 ? -rev : rev;
};

let res = reverse(123);
console.log(res);
