const elem = document.getElementById('shubham-btn');
elem.addEventListener('click', function (event) {
    console.log('addEventListener Click', this);
});


const jqElem = $('#shubham-btn');
jqElem.click(function () {
    console.log('Jquery Click', this);
    debugger;
});


setTimeout(()=> {
    const elementA = document.getElementById('shubham-btn');
    const event = new Event("click");
    const elementB = document.getElementById('shubham-btn-new');
    // Events attached using overridden addEventListeners
    const handlers = elementA.__vwo_events;
    for(const handler of handlers){
        handler.handler.call(elementB, event);
    }

    // const elementA = document.getElementById('shubham-btn');
    // const event = new Event("click");
    // const elementB = document.getElementById('shubham-btn-new');
    // elementA.dispatchEvent.call(elementB, event);
}, 4000);
