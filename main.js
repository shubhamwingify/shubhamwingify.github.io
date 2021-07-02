document.addEventListener('DOMContentLoaded', function () {
    const elem = document.getElementById('shubham-btn');
    elem.addEventListener('shubham-btn', function () {
        console.log('On shubham-btn click', elem);
    });
});