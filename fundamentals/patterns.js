function pyramidPattern(n) {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = 0; j < i + 1; j++) {
			row = row + "*";
		}
		console.log(row);
	}
}

function numberPattern(n) {
	for (let i = 0; i <= n; i++) {
		let row = "";
		for (let j = 1; j < i + 1; j++) {
			row = row + j;
		}
		console.log(row);
	}
}

function reversePyramid(n) {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = n - (i + 1); j >= 0; j--) {
			row = row + " ";
		}
		for (let j = 0; j < i + 1; j++) {
			row = row + "*";
		}
		console.log(row);
	}
}

reversePyramid(10);
