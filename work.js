function wrapper(executeTrigger) {
    const originalExecuteTrigger = executeTrigger;
    let count = 0;
    let totalCount = 3 // Count of callbacks;

    executeTrigger = function onSuccessCallback() {
        count++;
        if (count === totalCount) {
            const conditions = ['||', '&&']
            console.info('Condition is ', `1 ${conditions.join(' 1 ')} 1`);
            const final = eval(`1 ${conditions.join(' 1 ')} 1`);
            if (final) {
                originalExecuteTrigger();
            }
        }
    };

    (function callbackA() {
        for (let i = 0; i < 10000000; i++) {
            // Takes some time
        }
        console.info('CallbackA completed');
        executeTrigger();
    })();

    (function callbackB() {
        Promise.resolve().then(() => {
            console.info('CallbackB completed');
            executeTrigger();
        });
    })();

    (function callbackC() {
        setTimeout(() => {
            console.info('CallbackC completed');
            executeTrigger();
        }, 5000);
    })();
}

function executeTrigger() {
    console.log('Start campaign');
}

wrapper(executeTrigger);