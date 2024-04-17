export default function Memo(target: any, methodName: string, descriptor: PropertyDescriptor) {
    let fn: Function = descriptor.value; // actual method code --> fibanocci

    let cache: Map<String, any> = new Map(); // key / value pair

    // proxy
    descriptor.value = function (...args: number[]) {
        let key = args.join("-"); // 2-3 for add(2,3);
        if (cache.has(key)) {
            console.log("Cache hit ", key);
        } else {
            const result = fn.apply(this, args);
            cache.set(key, result);
        }
        return cache.get(key);
    }
}

// object.method()
// method.call(object, args); --> Reflection API