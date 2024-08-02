
    document.addEventListener("DOMContentLoaded", function() {
        // Inicializar todos os campos de entrada pesquisáveis
        initializeSearchableInputs();

        function initializeSearchableInputs() {
            const inputs = document.querySelectorAll('.searchable-input');

            inputs.forEach(input => {
                const dropdown = input.nextElementSibling;
                const options = Array.from(dropdown.getElementsByTagName("li"));

                input.addEventListener("input", function() {
                    const searchTerm = input.value.toLowerCase().trim();

                    // Filtrar as opções com base no termo de busca
                    const filteredOptions = options.filter(option => {
                        return option.textContent.toLowerCase().includes(searchTerm);
                    });

                    // Limpar o dropdown
                    dropdown.innerHTML = "";

                    // Mostrar apenas as opções que correspondem à busca
                    filteredOptions.forEach(option => {
                        dropdown.appendChild(option);
                    });

                    // Se houver opções correspondentes, mostrá-las
                    if (filteredOptions.length > 0) {
                        dropdown.classList.remove("hidden");
                    } else {
                        dropdown.classList.add("hidden");
                    }
                });

                // Mostrar o dropdown ao clicar no campo de entrada
                input.addEventListener("click", function() {
                    dropdown.classList.remove("hidden");
                });

                // Adiciona um evento de clique a cada opção
                options.forEach(option => {
                    option.addEventListener("click", function() {
                        input.value = option.textContent;
                        dropdown.classList.add("hidden");
                    });
                });

                // Esconde o dropdown se clicar fora dele
                document.addEventListener("click", function(event) {
                    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
                        dropdown.classList.add("hidden");
                    }
                });
            });
        }
    });

