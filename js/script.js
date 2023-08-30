let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    //pegar o valor digitado no input
    let valorInput = input.value;
    //se nçao for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput!== undefined)){

        ++contador;
        let novoItem = 
        `<div id="${contador}"class="item">
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete"><i class="mdi mdi-delete" onclick="deletar(${contador})">Deletar</i></button>
            </div>
        </div>`;
        //adicionar novo item na main
        main.innerHTML += novoItem;
        //zerar campos
        input.value = "";
        input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
    
}
//Apertar a tecla enter
input.addEventListener("keyup", function (event){
    if (event.keyCode === 13 || event.which == "Enter"){
        event.preventDefault();    
        btnAdd.click();
    }    
})