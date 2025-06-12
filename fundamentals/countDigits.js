function countDigits(n) {
	if (n == 0) return 1;

	//handling negative numbers
	n = Math.abs(n);

	let count = 0;

	while (n > 0) {
		n = Math.floor(n / 10);
		count++;
	}

	return count;
}

let num = -8890;
let res = countDigits(num);
console.log(res);
