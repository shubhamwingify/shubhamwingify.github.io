if (!originalEventListener) {
    var originalEventListener = EventTarget.prototype.addEventListener;
}

EventTarget.prototype.addEventListener = function (type, fn, capture) {
    this.originalEventListener = originalEventListener;
    this.originalEventListener(type, fn, capture);
    console.log('Shubham Event Listener', this, type, this.onclick, this instanceof Element);
};