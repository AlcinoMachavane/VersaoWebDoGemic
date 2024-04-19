document.addEventListener("DOMContentLoaded", function () {
    var popupForm = document.getElementById("myform");
    var showButton = document.getElementById("showform");
    var formCloseButton = document.getElementById("formClose");

    // Função para abrir o form
    function openform() {
        popupForm.style.display = "flex";
    }

    // Função para fechar o form
    function closeform() {
        popupForm.style.display = "none";
    }

    // Evento de clique no botão de abrir o form
    showButton.addEventListener("click", openform);

    // Evento de clique no botão de fechar o form
    formCloseButton.addEventListener("click", closeform);

    // Evento de clique na div do form para fechar o form
    popupForm.addEventListener("click", function(event) {
        if (event.target === popupForm) {
            closeform();
        }
    });

});
