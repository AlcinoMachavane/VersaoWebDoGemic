

///////////////////////////////////////////////////////////////////////////////////////////////////
  // Função para alternar a classe 'expanded' no menu
        document.getElementById('bars').addEventListener('click', function() {
            var menu = document.getElementById('menu');
            menu.classList.toggle('expanded');
        });

        document.getElementById('xmark').addEventListener('click', function() {
            var menu = document.getElementById('menu');
            menu.classList.remove('expanded');
        });

         document.getElementById('bars').addEventListener('click', function() {
            // Obtém o <ul> dentro da .menuBar
            var menuList = document.querySelector('.menuBar > ul');
            // Alterna a classe 'expanded' no <ul>
            menuList.classList.toggle('expanded');
        });

        document.getElementById('xmark').addEventListener('click', function() {
            // Obtém o <ul> dentro da .menuBar
            var menuList = document.querySelector('.menuBar > ul');
            // Remove a classe 'expanded' no <ul>
            menuList.classList.remove('expanded');
        });

        // Alternativamente, se desejar que o botão fora do menu também possa alternar o menu
        document.getElementById('buttonForBarMobile').addEventListener('click', function() {
            var menuList = document.querySelector('.menuBar > ul');
            menuList.classList.toggle('expanded');
        });