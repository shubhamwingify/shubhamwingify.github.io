const originalAddEventListener = window.addEventListener;
window.addEventListener = function () {
    console.log('Overridden add event listener');
    originalAddEventListener.apply(window, arguments);
}
