interface IParsedItem {
    value: any,
    opt: {
        exp: number
    }
}

export function getLocalStorageItem(key: string) {
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    const parsedItem: IParsedItem = JSON.parse(item);
    if (Date.now() > parsedItem.opt.exp) {
        localStorage.removeItem(key);
        return undefined;
    } else {
        return parsedItem.value;
    }
}

export function setLocalStorageItem(key: string, value: any, opt?: any) {
    let now = new Date()

    if (opt) {
        const expDate: string | undefined = opt.exp
        if (expDate) {
            if (expDate.indexOf('d') !== -1) {
                const date = expDate.split('d')[0]
                opt.exp = now.setDate(now.getDate() + parseInt(date))
            } else if (expDate.indexOf('h') !== -1) {
                const hour = expDate.split('h')[0]
                opt.exp = now.setHours(now.getHours() + parseInt(hour))
            } else if (expDate.indexOf('m') !== -1) {
                const minute = expDate.split('m')[0];
                opt.exp = now.setMinutes(now.getMinutes() + parseInt(minute))
            } else if (expDate.indexOf('s') !== -1) {
                const second = expDate.split('s')[0];
                opt.exp = now.setSeconds(now.getSeconds() + parseInt(second))
            }
        }
    }
    
    localStorage.setItem(key, JSON.stringify({ value, opt }));
}