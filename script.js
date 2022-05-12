console.log('JS carregado');

function validacao() {
    console.log('Iniciando validação de CPF');

    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

function validaCPF(cpf) {
    return true;
}