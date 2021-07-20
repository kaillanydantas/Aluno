var botao = document.querySelector("#adicionar-aluno");
botao.addEventListener("click", function(event) {

    event.preventDefault();

    var form = document.querySelector("#form-alunos");

    var aluno = obtemAlunoDoForm(form);


    var alunoTr = montaTr(aluno);

    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagem-erro")
    mensagensErro.innerHTML = "";
});

function obtemAlunoDoForm(form) {

    var aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        nota3: form.nota3.value,
        media: calculaMedia(parseInt(nota1), parseInt(nota2), parseInt(nota3))
    }

    return aluno;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.nota1, "info-nota1"));
    alunoTr.appendChild(montaTd(aluno.nota2, "info-nota2"));
    alunoTr.appendChild(montaTd(aluno.nota3, "info-nota3"));
    alunoTr.appendChild(montaTd(aluno.media, "info-media"));

    return alunoTr;
}

// function validaAluno(aluno) {

//     var erros = [];

//     if(aluno.nome.length == 0) {
//         erros.push("O nome não pode ser vazio!");
//     }

//     if(!validaNota1(aluno.nota1)) {
//         erros.push("Nota1 é inválida!");
//     }

//     if(!validaNota2(aluno.nota2)) {
//         erros.push("Nota2 é inválida!");
//     } 

//     if(!validaNota3(aluno.nota3)) {
//         erros.push("Nota3 é inválida!");
//     } 
    
    /*if(aluno.media.length == 0) {
        erros.push("A media não pode ser vazia!");
    } else if(aluno.media < 0) {
        erros.push("Media é inválida!");
    }*/

    //return erros;
//}

// function exibeMensagensDeErro(erros) {
//     var ul = document.querySelector("#mensagem-erro");
//     ul.innerHTML = "";
    
//     for (var i = 0; i < erros.length; i++) {
//         var li = document.createElement("li");
//         li.textContent = erros[i];
//         ul.appendChild(li);
//     }
// }