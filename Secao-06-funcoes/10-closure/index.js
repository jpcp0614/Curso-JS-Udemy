function lembrarSoma(x) {
	return function(y) {
			return x + y;
	}
}

let soma1 = lembrarSoma(2);
console.log(soma1(3)); //* 5

function contador(i) {
	let cont = i;
	let somarContador = function() {
		console.log(cont);
		return cont += 2;
	}
	return somarContador;
}

let meuContador = contador(2);
meuContador(); //* 4
meuContador(); //* 6
meuContador(); //* 8