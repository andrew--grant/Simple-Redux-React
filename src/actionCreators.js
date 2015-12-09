export function doIncrement(value) {
    return {type: 'INCREMENT', value: value};
}

export function doDecrement(value) {
    return {type: 'DECREMENT', value: value};
}