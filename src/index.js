module.exports = function reverse(n) {
	if (n < 0) {
		n * -1;
	} else {
		n = n;
	}
	return parseInt(n.toString().split('').reverse().join(''));
}
