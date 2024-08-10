document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close');
    const invitationLinks = document.querySelectorAll('.invitationLink');

    openButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            modals[index].style.display = "block";
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            modals[index].style.display = "none";
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });

    invitationLinks.forEach((link) => {
        link.addEventListener('click', function() {
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = link.textContent;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Link copiado para a área de transferência!');
        });
    });
});
