// scripts.js

// Funções para abrir, fechar e redefinir o modal

//     function openModal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";
// }
//
//     function closeModal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";
// }
//
// function resetForm() {
//     document.getElementById("sign").reset();


document.addEventListener("DOMContentLoaded", function () {
    var popupForm = document.getElementById("myModal");
    var showButton = document.getElementById("showModal");
    var cancelButton = document.getElementById("modalClose");

    showButton.addEventListener("click", function () {
        popupForm.style.display = "flex";
    });

    cancelButton.addEventListener("click", function () {
        popupForm.style.display = "none";
    });

    // document.addEventListener("click", function(event) {
    //     if (event.target !== popupForm && event.target !== showButton) {
    //         popupForm.style.display = "none";
    //     }
    // });
});


// VALIDAÇÃO

    // Função para validar o formulário
    function validateForm() {
    // Limpar mensagens de validação
    clearValidationMessages();

    // Validação para o campo Nome completo
    var fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
    displayValidationMessage('fullName', 'O campo Nome completo é obrigatório.');
}

    // Validação para o campo Moradia
    var residence = document.getElementById('residence').value.trim();
    if (residence === '') {
    displayValidationMessage('residence', 'O campo Moradia é obrigatório.');
}

    // Validação para o campo E-mail
    var email = document.getElementById('email').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
    displayValidationMessage('email', 'O campo E-mail é obrigatório.');
} else if (!emailPattern.test(email)) {
    displayValidationMessage('email', 'Por favor, insira um endereço de e-mail válido.');
}

    // Validação para o campo Senha
    var password = document.getElementById('password').value;
    if (password === '') {
    displayValidationMessage('password', 'O campo Senha é obrigatório.');
}

    // Validação para o campo Confirmar a senha
    var passwordConfirm = document.getElementById('passwordConfirm').value;
    if (passwordConfirm === '') {
    displayValidationMessage('passwordConfirm', 'O campo Confirmar a senha é obrigatório.');
} else if (password !== passwordConfirm) {
    displayValidationMessage('passwordConfirm', 'As senhas não coincidem.');
}

    // Validação para os campos de rádio
    var positionRadios = document.getElementsByName('position');
    var positionChecked = false;
    for (var i = 0; i < positionRadios.length; i++) {
    if (positionRadios[i].checked) {
    positionChecked = true;
    break;
}
}
    if (!positionChecked) {
    displayValidationMessage('position', 'Selecione uma posição.');
}
}

    // Função para exibir mensagens de validação
    function displayValidationMessage(inputId, message) {
    var validationMessage = document.getElementById(inputId + 'Validation');
    if (validationMessage) {
    validationMessage.innerText = message;
}
}

    // Função para limpar mensagens de validação
    function clearValidationMessages() {
    var validationMessages = document.getElementsByClassName('validationMessage');
    for (var i = 0; i < validationMessages.length; i++) {
    validationMessages[i].innerText = '';
}
}

    // Evento de envio do formulário
    document.getElementById('sign').addEventListener('submit', function (event) {
    // Previne o envio padrão do formulário
    event.preventDefault();
    // Chama a função de validação
    validateForm();
});

    // Função para redefinir o formulário
    function resetForm() {
    document.getElementById('sign').reset();
    // Limpar mensagens de validação
    clearValidationMessages();
}


