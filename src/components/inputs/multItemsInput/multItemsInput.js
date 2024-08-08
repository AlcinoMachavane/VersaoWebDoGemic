// Seleção de elementos do DOM
const contactInput = document.getElementById('contactInput');
const addContactButton = document.getElementById('addContactButton');
const contactsUl = document.getElementById('contactsUl');

// Função para adicionar contato à lista
function addContact() {
    const contactValue = contactInput.value.trim();

    // Verifica se o campo de entrada não está vazio
    if (contactValue) {
        const li = document.createElement('li');
        li.textContent = contactValue;

        // Adiciona o novo contato à lista
        contactsUl.appendChild(li);

        // Limpa o campo de entrada após adicionar o contato
        contactInput.value = '';
    } else {
        alert('Por favor, insira um número de contato válido.');
    }
}

// Adiciona evento de clique ao botão "Adicionar"
addContactButton.addEventListener('click', addContact);

// Adiciona evento de pressionar "Enter" no campo de entrada
contactInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addContact();
    }
});
