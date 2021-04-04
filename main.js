document.addEventListener('DOMContentLoaded', function (){

    const observer = new MutationObserver((mutationRecordList) => {
        for (const mutationRecord of mutationRecordList) {
            console.log(mutationRecord.attributeName, ':',mutationRecord.oldValue,'->>' ,mutationRecord.target.getAttribute(mutationRecord.attributeName));
        }
    });


    Object.defineProperties('vwo_document_real_url', {
        set: function (value) {
            debugger;
            this.vwo_document_real_url = value;
        }
    });

    // observer.observe(document.body, {
    //     subtree: true,
    //     attributes: true,
    //     attributeOldValue: true,
    // });

    // setInterval(()=>{
    //     const elem = document.getElementById('content-div-3-p');
    //     elem.setAttribute('class', 'shubham');
    // }, 1000);
});