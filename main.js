const form = document.getElementById('form-atividade');
const contato = [];
const nomeContato = [];

let linhas = '';

form.addEventListener('submit', function(event){
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
    agendaFinal()
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nomeContato.includes(inputNomeContato.value) ){
        alert(`O contato: ${inputNomeContato.value} já está na agenda`);
    } else {
        nomeContato.push(inputNomeContato.value);
        contato.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
}

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}