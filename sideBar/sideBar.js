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
