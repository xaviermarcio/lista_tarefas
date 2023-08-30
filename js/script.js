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
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome" onclick="marcarTarefa(${contador})">
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
//funcao delelar
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
    
}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe =="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

//Apertar a tecla enter
input.addEventListener("keyup", function (event){
    if (event.keyCode === 13 || event.which == "Enter"){
        event.preventDefault();    
        btnAdd.click();
    }    
})