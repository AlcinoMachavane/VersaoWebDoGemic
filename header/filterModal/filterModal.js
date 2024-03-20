

document.addEventListener("DOMContentLoaded", function() {
    var popupForm = document.getElementById("popupForm");
    var showButton = document.getElementById("showPopup");
    var cancelButton = document.getElementById("cancelButton");

    showButton.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });


    document.addEventListener("click", function(event) {
        var popupForm = document.getElementById("popupForm");
        var cancelButton = document.getElementById("cancelButton");

        if (event.target !== popupForm && !popupForm.contains(event.target) && event.target !== showButton && event.target !== cancelButton) {
            popupForm.style.display = "none";
        }
    });
});
