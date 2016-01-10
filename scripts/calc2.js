function calc2() {

	var sum = 0;
	var a = 0;
	var b = 1;
	var c = 0;

	while (a <= document.getElementById('num2').value; a++) {

		if (a % 2 === 0) {
			sum += a;
		}
		var c = a + b;
		a = b;
		b = c;
	}

	document.getElementById('result').innerHTML = sum;
}


