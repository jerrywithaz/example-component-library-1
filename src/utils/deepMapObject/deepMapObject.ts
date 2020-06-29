function deepMapKeys<TResult extends Record<string, any> = {}>(
    obj: Record<string, any> | Array<any>, 
    func: (value: any, key: string) => any
): TResult {
    if (Array.isArray(obj)) {
      return obj.map(val => deepMapKeys(val, func)) as any;  
    }
    else {
        if (typeof obj === 'object') {

            return Object.keys(obj).reduce((acc, key) => {

                const value = obj[key];
                const result = func(value, key);

                acc[key] = typeof value === 'object' ? deepMapKeys(value, func) : result;

                return acc;

            }, {} as Record<string, any>) as any;
        }
        else return obj;
    }
    
}

export default deepMapKeys;