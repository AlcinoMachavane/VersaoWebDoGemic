document.addEventListener("DOMContentLoaded", function () {
    var popupForm = document.getElementById("myModal");
    var showButton = document.getElementById("showModal");
    var modalCloseButton = document.getElementById("modalClose");

    // Função para abrir o modal
    function openModal() {
        popupForm.style.display = "flex";
    }

    // Função para fechar o modal
    function closeModal() {
        popupForm.style.display = "none";
    }

    // Evento de clique no botão de abrir o modal
    showButton.addEventListener("click", openModal);

    // Evento de clique no botão de fechar o modal
    modalCloseButton.addEventListener("click", closeModal);

    // Evento de clique na div do modal para fechar o modal
    popupForm.addEventListener("click", function(event) {
        if (event.target === popupForm) {
            closeModal();
        }
    });

});
