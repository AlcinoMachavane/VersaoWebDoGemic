document.addEventListener("DOMContentLoaded", function () {
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    // Dados realistas em Meticais (MZN) para os diferentes conjuntos de dados
    var salesData = [300000, 250000, 280000, 350000, 400000, 450000, 500000, 550000, 480000, 470000, 520000, 600000]; // Valor concedido
    var profitData = [120000, 150000, 140000, 200000, 250000, 230000, 270000, 300000, 250000, 240000, 280000, 330000]; // Lucro
    var expenseData = [180000, 100000, 140000, 150000, 150000, 220000, 230000, 250000, 230000, 230000, 240000, 270000]; // Despesas
    var receivedData = [200000, 220000, 250000, 300000, 350000, 380000, 420000, 460000, 400000, 430000, 490000, 530000]; // Valor recebido até a data atual

    var ctx = document.getElementById('default').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Valor concedido (MZN)',
                    data: salesData,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)', // Cor de fundo laranja
                    borderColor: 'rgba(255, 159, 64, 1)', // Cor da linha laranja
                    borderWidth: 1,
                },
                {
                    label: 'Lucro (MZN)',
                    data: profitData,
                    backgroundColor: 'rgba(75, 192, 75, 0.2)', // Cor de fundo verde
                    borderColor: 'rgba(75, 192, 75, 1)', // Cor da linha verde
                    borderWidth: 1,
                },
                {
                    label: 'Despesas (MZN)',
                    data: expenseData,
                    backgroundColor: 'rgba(192, 75, 75, 0.2)', // Cor de fundo vermelha
                    borderColor: 'rgba(192, 75, 75, 1)', // Cor da linha vermelha
                    borderWidth: 1,
                },
                {
                    label: 'Valor Recebido (MZN)',
                    data: receivedData,
                    backgroundColor: 'rgba(75, 75, 192, 0.2)', // Cor de fundo azul
                    borderColor: 'rgba(75, 75, 192, 1)', // Cor da linha azul
                    borderWidth: 1,
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valor em Meticais (MZN)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Meses do Ano'
                    }
                }
            }
        }
    });
});