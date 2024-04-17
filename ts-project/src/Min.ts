export default function Min(limit:number) { //18 ---> factory
    // return a decorator
    return function(target: any, propertyKey:string) {
        let x:number;
        // p.age = 12
        const setterFn = function(newVal:number) {
            if(newVal < limit) {
                Object.defineProperty(target, "error", {
                    "value": propertyKey + " should be minimum of " + limit + ", you entered " + newVal
                })
            } else {
                x = newVal;
            }
        }

        const getterFn = function() {
            return x;
        }

        // propertyKey is age
        Object.defineProperty(target, propertyKey, {
            set: setterFn,
            get: getterFn
        })

    }
}

// @Min(18)
// we have added set and get for age