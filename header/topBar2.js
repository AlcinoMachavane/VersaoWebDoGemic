// const button = document.getElementById('movableButton');
//
// let isDragging = false;
// let offset = { x: 0, y: 0 };
//
// button.addEventListener('mousedown', startDrag);
// document.addEventListener('mousemove', drag);
// document.addEventListener('mouseup', stopDrag);
//
// function startDrag(event) {
//     isDragging = true;
//     offset.x = event.clientX - button.getBoundingClientRect().left;
//     offset.y = event.clientY - button.getBoundingClientRect().top;
// }
//
// function drag(event) {
//     if (!isDragging) return;
//
//     const newX = event.clientX - offset.x;
//     const newY = event.clientY - offset.y;
//
//     button.style.left = newX + 'px';
//     button.style.top = newY + 'px';
// }
//
// function stopDrag() {
//     isDragging = false;
// }


document.addEventListener("DOMContentLoaded", function() {
    var popupForm = document.getElementById("popupForm");
    var showButton = document.getElementById("showPopup");
    var cancelButton = document.getElementById("cancelButton");

    showButton.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });

    cancelButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    // document.addEventListener("click", function(event) {
    //     if (event.target !== popupForm && event.target !== showButton) {
    //         popupForm.style.display = "none";
    //     }
    // });
});
