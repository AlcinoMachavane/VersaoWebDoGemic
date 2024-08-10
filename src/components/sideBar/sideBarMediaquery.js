const mediaQuery = window.matchMedia('(max-width: 670px)');

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("sidebar-hidden"); // Alternar a classe para mostrar ou ocultar o menu
    toggleIcon(); // Alterna o ícone com base no estado do menu
}

function closeOpen() {
    var menu = document.getElementById("menu");
    if (!menu.classList.contains("sidebar-hidden")) {
        toggleMenu(); // Se o menu estiver aberto, feche-o
    }
}

// Adiciona evento de clique a cada item do menu para fechar o menu
var menuItems = document.querySelectorAll("#menu li");
menuItems.forEach(function(item) {
    item.addEventListener("click", closeOpen);
});

// Adiciona evento de clique na tag menu
document.getElementById("menu").addEventListener("click", function(event) {
    if (event.target === this) { // Verifica se o elemento clicado é exatamente a tag menu
        this.classList.add("sidebar-hidden"); // Adicionar a classe sidebar-hidden
        toggleIcon(); // Altera o ícone de volta ao estado inicial
    }
});

// Adiciona evento de mudança de tamanho de janela
mediaQuery.addEventListener('change', function() {
    var menu = document.getElementById("menu");
    if (mediaQuery.matches) { // Se a largura da janela for menor ou igual a 670px
        menu.classList.add("sidebar-hidden"); // Ocultar o menu por padrão em telas menores
        toggleIcon(); // Altera o ícone para o estado escondido
    } else {
        menu.classList.remove("sidebar-hidden"); // Mostrar o menu por padrão em telas maiores
        toggleIcon(); // Altera o ícone para o estado mostrado
    }
});

// Função para alternar o ícone com base no estado do menu
function toggleIcon() {
    var barsIcon = document.getElementById('bars');
    var xmarkIcon = document.getElementById('xmark');
    var menu = document.getElementById('menu');

    if (menu.classList.contains('sidebar-hidden')) {
        barsIcon.style.display = 'block';
        xmarkIcon.style.display = 'none';
    } else {
        barsIcon.style.display = 'none';
        xmarkIcon.style.display = 'block';
    }
}

// Inicializa o ícone corretamente baseado no estado atual do menu
document.addEventListener("DOMContentLoaded", function() {
    toggleIcon();
});
