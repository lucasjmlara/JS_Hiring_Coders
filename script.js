console.log('JS carregado');

function validacao() {
    console.log('Iniciando validação de CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

function validaCPF(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    }

    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }
    console.log(soma);
    var resto = soma % 11;
    var resultado = resto < 2 ? 0 : 11 - resto;

    // Validacao do primeiro digito
    if (resultado != digitos.charAt(0)) {
        return false;
    }

    numeros = cpf.substring(0, 10);
    soma = 0;
    for (var k = 11; k > 1; k--) {
        soma += numeros.charAt(11 - k) * k;
    }
    console.log(soma);

    var resto = soma % 11;
    var resultado = resto < 2 ? 0 : 11 - resto;

    // Validacao do segundo digito
    if (resultado != digitos.charAt(1)) {
        return false;
    }

    return true;
}