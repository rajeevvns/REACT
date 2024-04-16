interface Book {
    getTitle(): string
}

interface ErrorMsg {
    getMsg(): string;
}

function printData(data: Book | ErrorMsg) {
    // below code fails
    // if(typeof data.getTitle === 'function') {
    //     data.getTitle();
    // }

    if (typeof (data as Book).getTitle === 'function') {
        (data as Book).getTitle(); // typecast once again
    }
    if (typeof (data as ErrorMsg).getMsg === 'function') {
        (data as ErrorMsg).getMsg();
    }
}