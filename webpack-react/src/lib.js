export default filter = (data, predicate) => {
    let result = [];
    data.forEach(elem => {
        if(predicate(elem)) {
            result.push(elem);
        }
    });

    return result;
}