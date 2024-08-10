document.addEventListener("DOMContentLoaded", function() {
    // Função para alternar a classe 'expanded' no menu
    function toggleMenu() {
        var menu = document.getElementById('menu');
        var menuList = document.querySelector('.menuBar > ul');
        var barsIcon = document.getElementById('bars');
        var xmarkIcon = document.getElementById('xmark');
        
        if (menu.classList.contains('expanded')) {
            menu.classList.remove('expanded');
            menuList.classList.remove('expanded');
            barsIcon.style.display = 'block';
            xmarkIcon.style.display = 'none';
        } else {
            menu.classList.add('expanded');
            menuList.classList.add('expanded');
            barsIcon.style.display = 'none';
            xmarkIcon.style.display = 'block';
        }
    }

    // Evento de clique para o ícone 'bars'
    document.getElementById('bars').addEventListener('click', function() {
        toggleMenu();
    });

    // Evento de clique para o ícone 'xmark'
    document.getElementById('xmark').addEventListener('click', function() {
        toggleMenu();
    });

    // Evento de clique no botão para dispositivos móveis
    document.getElementById('buttonForBarMobile').addEventListener('click', function() {
        toggleMenu();
    });

    // Evento de clique no documento para fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        var menuList = document.querySelector('.menuBar > ul');
        var barsIcon = document.getElementById('bars');
        var xmarkIcon = document.getElementById('xmark');

        // Verifica se o clique foi fora do menu e dos ícones
        if (!event.target.closest('.menuBar') && !event.target.closest('#bars') && !event.target.closest('#xmark')) {
            if (menuList.classList.contains('expanded')) {
                toggleMenu();
            }
        }
    });
});
