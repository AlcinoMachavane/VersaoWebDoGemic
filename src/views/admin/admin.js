
    // Obtém o modal e o botão de fechar
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    // Exibe o modal ao clicar no botão
    document.getElementById("registerButton").addEventListener("click", function(event) {
        event.preventDefault(); // Impede a ação padrão do link
        modal.style.display = "block"; // Exibe o modal
    });

    // Fecha o modal ao clicar no 'x'
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
