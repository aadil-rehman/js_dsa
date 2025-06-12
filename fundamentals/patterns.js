// *
// **
// ***
// ****
// *****

function pyramidPattern(n) {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = 0; j < i + 1; j++) {
			row = row + "*";
		}
		console.log(row);
	}
}

// 1
// 12
// 123
// 1234
// 12345

function numberPattern(n) {
	for (let i = 0; i <= n; i++) {
		let row = "";
		for (let j = 1; j < i + 1; j++) {
			row = row + j;
		}
		console.log(row);
	}
}

//      *
//     **
//    ***
//   ****
//  *****
// ******
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

// 1
// 10
// 101
// 1010
// 10101
// 101010

function binaryPatter(n) {
	for (let i = 0; i <= n; i++) {
		let row = "";
		let toggle = 1;
		for (let j = 1; j < i + 1; j++) {
			row = row + toggle;
			if (toggle === 1) {
				toggle = 0;
			} else {
				toggle = 1;
			}
		}
		console.log(row);
	}
}

binaryPatter(2);
