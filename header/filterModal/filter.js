

document.addEventListener("DOMContentLoaded", function() {
    let popupForm = document.getElementById("popupForm");
    let showButton = document.getElementById("showPopup");
    let cancelButton = document.getElementById("cancelButton");

    showButton.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });


    document.addEventListener("click", function(event) {
        let popupForm = document.getElementById("popupForm");
        let cancelButton = document.getElementById("cancelButton");

        if (event.target !== popupForm && !popupForm.contains(event.target) && event.target !== showButton && event.target !== cancelButton) {
            popupForm.style.display = "none";
        }
    });
});
