var alunos = document.querySelectorAll(".aluno");
console.log(alunos);

for (var i = 0; i < alunos.length;  i++) {
    var aluno = alunos[i]
    var tdNota1 = aluno.querySelector(".info-nota1");
    var nota1 = tdNota1.textContent;

    var tdNota2 = aluno.querySelector(".info-nota2");
    var nota2 = tdNota2.textContent;

    var tdNota3 = aluno.querySelector(".info-nota3");
    var nota3 = tdNota3.textContent;
    

    var media = calculaMedia(nota1, nota2, nota3 );
    console.log(media)

    var tdMedia = aluno.querySelector(".info-media");
    tdMedia.textContent = media;



    // var nota1Valida = validaNota1(nota1);
    // var nota2Valida = validaNota2(nota2);
    // var nota3Valida = validaNota3(nota3);

    // if (!nota1Valida) {
    //     console.log("nota1 é inválida!");
    //     tdNota1.textContent = "nota 1 é inválido!";
    // }

    // if (!nota2Valida) {
    //     console.log("nota2 é inválida!");
    //     tdNota2.textContent = "nota 2 é inválida!";
    // }

    // if (!nota3Valida) {
    //     console.log("nota3 é inválida!");
    //     tdNota3.textContent = "nota 3 é inválida!";
    // }

    

        
}

function calculaMedia(nota1, nota2, nota3) {
    var media = 0;
    media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    return media.toFixed(2);
}


//function situacaoFinal(media) {
    //if(media >= 7) {
        //return "Aprovado";
    //} if(media < 4) {
        //return "Reprovado";
    //} if(media > 4 && 7) {
        //return "prova final"
    //}
//}
    



