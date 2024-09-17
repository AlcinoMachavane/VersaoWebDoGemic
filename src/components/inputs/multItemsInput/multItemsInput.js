// Seleção de elementos do DOM
const contactInput = document.getElementById('contactInput');
const addContactButton = document.getElementById('addContactButton');
const contactsUl = document.getElementById('contactsUl');

// Função para adicionar contato à lista
function addContact(event) {
    if (event) {
        event.preventDefault();
    }

    const contactValue = contactInput.value.trim();

    // Verifica se o campo de entrada não está vazio
    if (contactValue) {
        // Cria o elemento <li> para o contato
        const li = document.createElement('li');

        // Adiciona o valor do contato dentro de um <span>
        const span = document.createElement('span');
        span.textContent = contactValue;
        li.appendChild(span);

        // Cria o botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'; // Usa innerHTML para adicionar o ícone corretamente
        deleteButton.classList.add('remove-button');
        deleteButton.classList.add('iconButton');
        li.appendChild(deleteButton);

        // Adiciona o evento de clique para remover o contato
        deleteButton.addEventListener('click', function () {
            contactsUl.removeChild(li);
        });

        // Adiciona o novo contato à lista
        contactsUl.appendChild(li);

        // Limpa o campo de entrada
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
