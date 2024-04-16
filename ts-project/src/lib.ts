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

