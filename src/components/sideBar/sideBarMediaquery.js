const mediaQuery = window.matchMedia('(max-width: 670px)');

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("sidebar-hidden"); // Alternar a classe para mostrar ou ocultar o menu
}

function closeOpen() {
    var menu = document.getElementById("menu");
    if (!menu.classList.contains("sidebar-hidden")) {
        toggleMenu(); // Se o menu estiver aberto, feche-o
    }
}

var menuItems = document.querySelectorAll("#menu li");
menuItems.forEach(function(item) {
    item.addEventListener("click", closeOpen); // Adicionar evento de clique a cada item do menu para fechar o menu
});

// Adicionar evento de clique na tag menu
document.getElementById("menu").addEventListener("click", function(event) {
    if (event.target === this) { // Verificar se o elemento clicado é exatamente a tag menu
        this.classList.add("sidebar-hidden"); // Adicionar a classe sidebar-hidden
    }
});

// Adicionar evento de mudança de tamanho de janela
mediaQuery.addEventListener('change', function() {
    var menu = document.getElementById("menu");
    if (mediaQuery.matches) { // Se a largura da janela for menor ou igual a 670px
        menu.classList.add("sidebar-hidden"); // Ocultar o menu por padrão em telas menores
    } else {
        menu.classList.remove("sidebar-hidden"); // Mostrar o menu por padrão em telas maiores
    }
});