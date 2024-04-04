document.addEventListener("DOMContentLoaded", function () {
    var salesData = [
        ['14', '18', '10', '7', '3', '15', '20', '17', '22', '8', '13', '6'],
        ['18', '22', '11', '5', '1', '12', '27', '20', '25', '9', '17', '4'],
        ['20', '25', '12', '6', '2', '18', '30', '22', '27', '10', '16', '8']
    ];
    var months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    var ctx = document.getElementById('salesChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Pedro Rafael',
                    data: salesData[0].map(Number), // Converte para números
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Judite Salvador',
                    data: salesData[1].map(Number), // Converte para números
                    backgroundColor: 'rgba(192, 75, 75, 0.2)',
                    borderColor: 'rgba(192, 75, 75, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Júlio Mate',
                    data: salesData[2].map(Number), // Converte para números
                    backgroundColor: 'rgba(75, 75, 192, 0.2)',
                    borderColor: 'rgba(75, 75, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var salesData = [
        ['18', '22', '11', '5', '1', '12', '27', '20', '25', '9', '17', '4'],
        ['14', '18', '10', '7', '3', '15', '20', '17', '22', '8', '13', '6'],
        ['20', '25', '12', '6', '2', '18', '30', '22', '27', '10', '16', '8']
    ];
    var months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    var ctx = document.getElementById('salesChart1').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Pedro Rafael',
                    data: salesData[0].map(Number), // Converte para números
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Judite Salvador',
                    data: salesData[1].map(Number), // Converte para números
                    backgroundColor: 'rgba(192, 75, 75, 0.2)',
                    borderColor: 'rgba(192, 75, 75, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Júlio Mate',
                    data: salesData[2].map(Number), // Converte para números
                    backgroundColor: 'rgba(75, 75, 192, 0.2)',
                    borderColor: 'rgba(75, 75, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var salesData = [
        [1000, 1200, 1500, 1300, 1400, 1600, 1800, 1700, 1900, 2000, 2200, 2500], // Dados da primeira linha
        [800, 1000, 1300, 1100, 1200, 1400, 1600, 1500, 1700, 1800, 2000, 2200],   // Dados da segunda linha
        [1200, 1400, 1700, 1500, 1600, 1800, 2000, 1900, 2100, 2200, 2400, 2700]   // Dados da terceira linha
    ];
    var months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    var ctx = document.getElementById('salesChart2').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Pedro Rafael',
                    data: salesData[0], // Usando dados da primeira linha
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Judite Salvador',
                    data: salesData[1], // Usando dados da segunda linha
                    backgroundColor: 'rgba(192, 75, 75, 0.2)',
                    borderColor: 'rgba(192, 75, 75, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Júlio Mate',
                    data: salesData[2], // Usando dados da terceira linha
                    backgroundColor: 'rgba(75, 75, 192, 0.2)',
                    borderColor: 'rgba(75, 75, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// /////////////////////////////////////////////////////////////////
function changeChart(index) {
    const charts = document.querySelectorAll('.chart-container canvas');
    const buttons = document.querySelectorAll('.switchButton');

    // Oculta todas as canvas e remove a classe "active" de todos os botões
    charts.forEach(chart => chart.style.display = 'none');
    buttons.forEach(button => button.classList.remove('active'));

    // Exibe a canvas correspondente ao índice recebido e adiciona a classe "active" ao botão correspondente
    charts[index].style.display = 'block';
    buttons[index].classList.add('active');
}

window.addEventListener('load', (event) => {
    // Define a função changeChart como padrão ao recarregar a página
    changeChart(0);
});





