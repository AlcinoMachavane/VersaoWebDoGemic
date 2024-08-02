<<<<<<< HEAD:views/adminst/userProfile/graphic/graphic.js
document.addEventListener("DOMContentLoaded", function() {
    var salesData = ['18', '22', '11', '5', '1', '12', '27', '20', '25', '9', '17', '4', '19', '30', '14', '3', '7', '28', '2', '24', '26', '16', '6', '8', '13', '21', '15', '23', '29', '10'];
    var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
=======
document.addEventListener("DOMContentLoaded", function () {
    var salesData = ['18', '22', '11', '5', '1', '12', '27', '20', '25', '9', '17', '4', '19', '30', '14', '3', '7', '28', '2', '24', '26', '16', '6', '8', '13', '21', '15', '23', '29', '10'];
    var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
>>>>>>> 7045193a6e827fac820c14beffea285c748072a8:src/views/admin/userProfile/graphic/graphic.js

    var ctx = document.getElementById('salesChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Empréstimos feitos ao longo do mês',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
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

<<<<<<< HEAD:views/adminst/userProfile/graphic/graphic.js
document.addEventListener("DOMContentLoaded", function() {
=======
document.addEventListener("DOMContentLoaded", function () {
>>>>>>> 7045193a6e827fac820c14beffea285c748072a8:src/views/admin/userProfile/graphic/graphic.js
    var salesData = ['18', '22', '11', '5', '1', '12', '27', '20', '25', '9', '17', '4', '19', '30', '14', '3', '7', '28', '2', '24', '26', '16', '6', '8', '13', '21', '15', '23', '29', '10'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var ctx = document.getElementById('salesChart1').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Empréstimos feitos ao longo de 12 meses',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
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

<<<<<<< HEAD:views/adminst/userProfile/graphic/graphic.js
document.addEventListener("DOMContentLoaded", function() {
    var salesData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
=======
document.addEventListener("DOMContentLoaded", function () {
    var salesData = ['10', '29', '23', '15', '21', '13', '8', '6', '16', '26', '24', '2', '28', '7', '3', '14', '30', '19', '4', '17', '9', '25', '20', '27', '12', '1', '5', '11', '22', '18'];
    var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
>>>>>>> 7045193a6e827fac820c14beffea285c748072a8:src/views/admin/userProfile/graphic/graphic.js

    var ctx = document.getElementById('salesChart2').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Análise das tendências de empréstimos por mês',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
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
    var salesData = [1000, 1200, 1500, 1300, 1400, 1600, 1800, 1700, 1900, 2000, 2200, 2500];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var ctx = document.getElementById('salesChart3').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Análise das tendências de empréstimos por ano',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
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

// /////////////////////////////////////////////////////////////////

function changeChart(index) {
    const charts = document.querySelectorAll('.chart-conteiner canvas');
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





