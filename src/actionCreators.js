export function doIncrement(position, value) {
    return {type: 'INCREMENT', value: value, position: position};
}

export function doDecrement(position, value) {
    return {type: 'DECREMENT', value: value, position: position};
}