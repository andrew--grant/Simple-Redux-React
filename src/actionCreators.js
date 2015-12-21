export function doIncrement(position, value) {
    return {type: 'INCREMENT', value: value, position: position};
}

export function doDecrement(position, value) {
    return {type: 'DECREMENT', value: value, position: position};
}

export function doEditSteps(position, value) {
    return {type: 'EDIT_STEPS', value: value, position: position};
}