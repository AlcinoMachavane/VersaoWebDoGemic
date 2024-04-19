//
//     document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('sign');
//     const tableBody = document.querySelector('.tableConteiner tbody');
//
//     form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Impede o envio padrão do formulário
//
//     // Captura os valores do formulário
//     const fullName = document.getElementById('fullName').value;
//     const residence = document.getElementById('residence').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const isAdmin = document.getElementById('manager').checked;
//     const isHR = document.getElementById('HR').checked;
//     const isFinancialManager = document.getElementById('financialManagers').checked;
//     const isLoanManager = document.getElementById('loanOfficers').checked;
//
//     // Cria uma nova linha na tabela com os valores do formulário
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//                 <td>${tableBody.children.length + 1}</td>
//                 <td>${fullName}</td>
//                 <td>${isAdmin ? 'Administrador' : (isHR ? 'Gestor RH' : (isFinancialManager ? 'Gestor financeiro' : (isLoanManager ? 'Gestor de crédito' : 'Não especificado')))}</td>
//                 <td>${getCurrentDate()}</td>
//                 <td>${getCurrentDate()}</td>
//                 <td>Ativo</td>
//                 <td class="action" title="Visualizar o perfil"><a href="userProfile/profile.html"> <i class="fa-solid fa-eye"></i></a></td>
//             `;
//
//     // Adiciona a nova linha à tabela
//     tableBody.appendChild(newRow);
//
//     // Limpa o formulário
//     resetForm();
// });
//
//     // Função para limpar o formulário
//     function resetForm() {
//     form.reset();
// }
//
//     // Função para obter a data atual no formato "DD-MM-AAAA"
//     function getCurrentDate() {
//     const currentDate = new Date();
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // +1 porque os meses começam em 0
//     const year = currentDate.getFullYear();
//     return `${day}-${month}-${year}`;
// }
// });
//
//     document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('sign');
//     const tableBody = document.querySelector('.tableConteiner tbody');
//     const form = document.getElementById('myform');
//
//     form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Impede o envio padrão do formulário
//
//     // Restante do seu código...
//
//     // Fecha o form ao enviar o formulário
//     closeform();
// });
//
//     // Função para fechar o form
//     function closeform() {
//     form.style.display = 'none';
// }
//
//     // Função para limpar o formulário
//     function resetForm() {
//     form.reset();
// }
//
//     // Função para obter a data atual no formato "DD-MM-AAAA"
//     function getCurrentDate() {
//     const currentDate = new Date();
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // +1 porque os meses começam em 0
//     const year = currentDate.getFullYear();
//     return `${day}-${month}-${year}`;
// }
// });