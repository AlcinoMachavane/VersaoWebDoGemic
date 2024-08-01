$(document).ready(function() {
    $('tr[data-toggle="collapse"]').click(function() {
        let target = $($(this).data('target'));
        target.toggleClass('hiddenRow expandedRow'); // Alternando entre as classes hiddenRow e expandedRow
    });
});
