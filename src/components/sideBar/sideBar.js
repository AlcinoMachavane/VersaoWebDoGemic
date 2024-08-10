// Função para alternar a classe 'expanded' no menu
document.getElementById('bars').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuList = document.querySelector('.menuBar > ul');
    menu.classList.toggle('expanded');
    menuList.classList.toggle('expanded');

    // Altera o ícone de 'bars' para 'xmark'
    toggleIcon();
});

document.getElementById('xmark').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuList = document.querySelector('.menuBar > ul');
    menu.classList.remove('expanded');
    menuList.classList.remove('expanded');

    // Altera o ícone de 'xmark' para 'bars'
    toggleIcon();
});

// Alterna a classe 'expanded' no menu ao clicar em um botão fora do menu
document.getElementById('buttonForBarMobile').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuList = document.querySelector('.menuBar > ul');
    var isExpanded = menuList.classList.toggle('expanded');
    menu.classList.toggle('expanded', isExpanded);

    // Altera o ícone com base no estado do menu
    toggleIcon();
});

// Altera o ícone com base no estado do menu
function toggleIcon() {
    var barsIcon = document.getElementById('bars');
    var xmarkIcon = document.getElementById('xmark');
    var menu = document.getElementById('menu');

    if (menu.classList.contains('expanded')) {
        barsIcon.style.display = 'none';
        xmarkIcon.style.display = 'block';
    } else {
        barsIcon.style.display = 'block';
        xmarkIcon.style.display = 'none';
    }
}

// Adiciona evento de clique no documento para fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    var menuList = document.querySelector('.menuBar > ul');
    var barsIcon = document.getElementById('bars');
    var xmarkIcon = document.getElementById('xmark');

    // Verifica se o clique foi fora do menu e fora dos ícones de menu
    if (!event.target.closest('.menuBar > ul') && !event.target.closest('#bars') && !event.target.closest('#xmark')) {
        menuList.classList.remove('expanded');
        menuList.parentElement.classList.remove('expanded');
        
        // Altera o ícone de volta para 'bars' se o menu for fechado
        toggleIcon();
    }
});
