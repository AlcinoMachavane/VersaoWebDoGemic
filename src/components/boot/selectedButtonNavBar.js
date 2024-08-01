
function changeChart(index) {

    const charts = document.querySelectorAll('.chart-conteiner canvas');
    const buttons = document.querySelectorAll('.switchButton');

    // Exibe a canvas correspondente ao índice recebido e adiciona a classe "active" ao botão correspondente
    charts[index].style.display = 'block';
    buttons[index].classList.add('active');
}