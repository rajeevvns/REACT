function sampleTask(callback:unknown) {
    // force typechecking
    if(typeof callback === 'function') {
        callback();
    } else if(typeof callback === 'string') {
        console.log(callback.toUpperCase());
    }
}

sampleTask("Hello"); //TypeError: callback is not a function