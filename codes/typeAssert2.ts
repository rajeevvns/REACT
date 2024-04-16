interface Book {
    getTitle(): string
}

interface ErrorMsg {
    getMsg(): string;
}

// type predicate functions [is]
function isBook(data: Book | ErrorMsg): data is Book {
    return typeof (data as Book).getTitle === 'function'; // true and typecast argument
}

// not a type predicate function
function isErrorMsg(data: Book | ErrorMsg): boolean {
    return typeof (data as ErrorMsg).getMsg === 'function'; // true but not typescasting
}

function printCleanData(data: Book | ErrorMsg) {
    if (isBook(data)) { // argument is typescasted and returned by ts
        data.getTitle(); // not need to typecast once again
    }
    if (isErrorMsg(data)) {
        (data as ErrorMsg).getMsg(); // typecast once again
    }
}