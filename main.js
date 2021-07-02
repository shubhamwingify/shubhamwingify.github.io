setTimeout(()=>{
    document.addEventListener('DOMContentLoaded', function () {
        const elem = document.getElementById('shubham-btn');
        elem.addEventListener('click', function () {
            console.log('On shubham-btn click', elem);
        });
    });
},2000);