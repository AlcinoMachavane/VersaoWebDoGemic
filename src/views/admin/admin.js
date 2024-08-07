
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

//////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
    const invitationLink = document.getElementById('link-to-copy');

    invitationLink.addEventListener('click', () => {
        // Cria um elemento de input temporário para usar a funcionalidade de copiar
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = invitationLink.textContent;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Opcional: Feedback para o usuário
        alert('Link copiado para a área de transferência!');
    });
});

