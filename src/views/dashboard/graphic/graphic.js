document.addEventListener("DOMContentLoaded", function () {
    var salesData = ['10', '2', '30', '8', '23'];
    var months = ['Agricultura', 'Pecuária', 'Comércio', 'Consumo', 'outros'];

    var ctx = document.getElementById('salesChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Nº de empréstimos em função da finalidade',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }]
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
    var salesData = [25000, 18000, 3200, 40000, 20000, 3800, 15000, 2700, 450, 3000, 10000, 22000];
    var totalEsperado = [30000, 25000, 3500, 45000, 25000, 4000, 20000, 3000, 500, 3500, 15000, 25000];
    var totalRecebido = [23000, 17000, 3000, 39000, 19000, 3700, 14000, 2500, 400, 2800, 9000, 21000];
    var totalPendente = [2000, 1000, 200, 1000, 1000, 100, 1000, 200, 50, 200, 1000, 1000];
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    var ctx = document.getElementById('default').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Valor concedido ao longo do ano',
                data: salesData,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',  // Laranja claro
                borderColor: 'rgba(255, 159, 64, 1)',       // Laranja
                borderWidth: 1,
            },
            {
                label: 'Total esperado',
                data: totalEsperado,
                backgroundColor: 'rgba(128, 0, 128, 0.2)',  // Vinho claro
                borderColor: 'rgba(128, 0, 128, 1)',        // Vinho
                borderWidth: 1,
            },
            {
                label: 'Total recebido',
                data: totalRecebido,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Azul claro
                borderColor: 'rgba(54, 162, 235, 1)',       // Azul
                borderWidth: 1,
            },
            {
                label: 'Total pendente',
                data: totalPendente,
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Vermelho claro
                borderColor: 'rgba(255, 99, 132, 1)',       // Vermelho
                borderWidth: 1,
            }]
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
    var capitalRecebido = [23000, 17000, 3000, 39000, 19000, 3700, 14000, 2500, 400, 2800, 9000, 21000];
    var capitalEsperado = [30000, 25000, 3500, 45000, 25000, 4000, 20000, 3000, 500, 3500, 15000, 25000];
    var capitalPendente = [2000, 1000, 200, 1000, 1000, 100, 1000, 200, 50, 200, 1000, 1000];
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    var ctx = document.getElementById('capitalChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Capital Recebido',
                data: capitalRecebido,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Azul claro
                borderColor: 'rgba(54, 162, 235, 1)',       // Azul
                borderWidth: 1,
            },
            {
                label: 'Capital Esperado',
                data: capitalEsperado,
                backgroundColor: 'rgba(128, 0, 128, 0.2)',  // Vinho claro
                borderColor: 'rgba(128, 0, 128, 1)',        // Vinho
                borderWidth: 1,
            },
            {
                label: 'Capital Pendente',
                data: capitalPendente,
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Vermelho claro
                borderColor: 'rgba(255, 99, 132, 1)',       // Vermelho
                borderWidth: 1,
            }]
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
    var lucroRecebido = [24000, 16000, 2900, 38000, 18000, 3600, 13000, 2400, 390, 2700, 9500, 20500];
    var lucroEsperado = [31000, 26000, 3400, 46000, 26000, 4100, 21000, 3100, 510, 3600, 16000, 26000];
    var lucroPendente = [1000, 2000, 300, 2000, 2000, 200, 2000, 300, 60, 300, 1500, 1500];
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    var ctx = document.getElementById('lucroChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Lucro Recebido',
                data: lucroRecebido,
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Azul claro
                borderColor: 'rgba(54, 162, 235, 1)',       // Azul
                borderWidth: 1,
            },
            {
                label: 'Lucro Esperado',
                data: lucroEsperado,
                backgroundColor: 'rgba(128, 0, 128, 0.2)',  // Vinho claro
                borderColor: 'rgba(128, 0, 128, 1)',        // Vinho
                borderWidth: 1,
            },
            {
                label: 'Lucro Pendente',
                data: lucroPendente,
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Vermelho claro
                borderColor: 'rgba(255, 99, 132, 1)',       // Vermelho
                borderWidth: 1,
            }]
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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('loanPieChart').getContext('2d');

    // Dados para o gráfico de pizza
    var pieData = {
        labels: ['Valor Recebido (MZN)', 'Valor Esperado (MZN)'],
        datasets: [{
            data: [300000, 200000], // Exemplo de dados: 300,000 MZN recebido vs 500,000 MZN esperado
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)', // Cor para Valor Recebido (Azul)
                'rgba(255, 159, 64, 0.6)'  // Cor para Valor Esperado (Laranja)
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Criação do gráfico de pizza
    var loanPieChart = new Chart(ctx, {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Valor de Empréstimos Recebido vs Esperado (MZN)'
                }
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('loanPieChart2').getContext('2d');

    // Dados para o gráfico de pizza
    var pieData = {
        labels: ['Valor Concedido (MZN)', 'Valor Recebido (MZN)'],
        datasets: [{
            data: [300000, 50000], // Exemplo de dados: 300,000 MZN recebido vs 500,000 MZN esperado
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)', // Cor para Valor Recebido (Azul)
                'rgba(255, 159, 64, 0.6)'  // Cor para Valor Esperado (Laranja)
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Criação do gráfico de pizza
    var loanPieChart = new Chart(ctx, {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Valor Concedido de Empréstimos vs Recebido Esperado (MZN)'
                }
            }
        }
    });
});