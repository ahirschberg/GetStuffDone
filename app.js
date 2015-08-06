// clone task card
/*window.onload = function () {
    console.log('onload called');
    console.log(document.readyState);
    var a = document.querySelector('.task-card');
    for (var i = 0; i < 5; i++) {
        document.querySelector('.content').appendChild(a.cloneNode());
    }
}*/


function toggleOverlay() {
    var element = document.querySelector('.task-overlay');
    if (element.style.display === 'none') {
        element.style = '';
    } else {
        element.style = 'display: none';
    }
} 