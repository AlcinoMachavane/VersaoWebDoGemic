function changeContent(section) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Limpa o conteúdo atual


    switch (section) {
        case 'Dashboard':
            import('../views/dashboard/dashboard.js').then((module) => {
                contentContainer.innerHTML = module.default;
            });
            break;
        case 'adminst':
            import('../views/adminst/adminst.js').then((module) => {
                contentContainer.innerHTML = module.default;
            });
            break;
        case 'clients':
            import('../views/clients/clients.js').then((module) => {
                contentContainer.innerHTML = module.default;
            });
            break;
        case 'Loans':
            import('../views/loans/loans.js').then((module) => {
                contentContainer.innerHTML = module.default;
            });
            break;
        case 'cashFlow':
            import('../views/cashFlow/cashFlow.js').then((module) => {
                contentContainer.innerHTML = module.default;
            });
            break;
        case 'reports':
            import('../views/reports/reports.js').then((module) => {
                contentContainer.innerHTML = module.default;
            });
            break;
        case 'configs':
            import('../views/configs/configs.js').then((module) => {
                contentContainer.innerHTML = module.default;
            });
            break;
        default:
            contentContainer.innerHTML = '<h2>Página não encontrada</h2>';
    }
}