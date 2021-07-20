var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("animacao");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 1000);
}); 


