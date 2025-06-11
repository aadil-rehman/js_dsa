function secondLargest(arr) {
	if (arr.length < 2) {
		return null;
	}
	let largest = -Infinity;
	let secondLargestNumber = -Infinity;

	for (el of arr) {
		if (el > largest) {
			secondLargestNumber = largest;
			largest = el;
		} else if (el > secondLargestNumber && el !== largest) {
			secondLargestNumber = el;
		}
	}
	return secondLargestNumber;
}

let arr = [4, 9, 0, 12, 8, 7, 12, 1];

let res = secondLargest(arr);

console.log(res);
