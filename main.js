const elem = document.getElementById('shubham-btn');
elem.addEventListener('click', function (event) {
    console.log('addEventListener Click', this);
});


const jqElem = $('#shubham-btn');
jqElem.click(function () {
    console.log('Jquery Click', this);
});


setTimeout(()=> {
    let event = new Event("click");
    const copiedElement = document.getElementById('shubham-btn-new');
    elem.dispatchEvent.call(copiedElement, event);
}, 5000);