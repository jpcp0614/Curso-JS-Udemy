function recursao(n) {
	if (n - 1 < 2) {
		console.log('Fim');
	} else if (n % 2 != 0) {
		console.log('impar:', n);
		recursao(n - 1);
	} else {
		console.log('par: ', n);
		recursao(n - 2);
	}
}

recursao(28);
recursao(17);