document.addEventListener('DOMContentLoaded', function() {
   
    var generoRadios = document.querySelectorAll('input[name="genero"]');
    generoRadios.forEach(function(radio) {
        radio.addEventListener('change', verificarSelecoes);
    });

    
    verificarSelecoes();

    
    var btnEnviar = document.querySelector('#userForm button');
    btnEnviar.addEventListener('click', exibirMensagem);
});

var nomesPermitidos = [
    
];

function verificarSelecoes() {
    var generoSelecionado = document.querySelector('input[name="genero"]:checked');
    
    if (generoSelecionado) {
        var corDeFundo;

        if (generoSelecionado.value === "Masculino") {
            corDeFundo = "#0000FF"; 
        } else if (generoSelecionado.value === "Feminino") {
            corDeFundo = "#FF69B4"; 
        } else if (generoSelecionado.value === "Outro") {
            corDeFundo = "#808080"; 
        }

        document.body.style.backgroundColor = corDeFundo;
        document.body.style.color = "#000"; 
    }
}

function exibirMensagem() {
    var mensagemDiv = document.getElementById('mensagemAgradecimento');
    mensagemDiv.style.display = 'block';
}
