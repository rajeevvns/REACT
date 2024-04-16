// HOF with Generics <T>
//predicate: (elem: T) => boolean [ predicate function accepts "T" type and returns boolean]
export function filter<T>(data: T[], predicate: (elem: T) => boolean): T[] {
    let result: T[] = [];
    data.forEach(elem => {
        if (predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
};
// input is of T type and output is of R type
// T and R can be same or different
export function map<T, R>(data: T[], transformFn: (elem: T) => R): R[] {
    let result: R[] = [];
    data.forEach(elem => {
        result.push(transformFn(elem));
    });
    return result;
}

