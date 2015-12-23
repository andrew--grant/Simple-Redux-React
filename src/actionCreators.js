export function doIncrement(position, value) {
    return {type: 'INCREMENT', value: value, position: position};
}

export function doDecrement(position, value) {
    return {type: 'DECREMENT', value: value, position: position};
}

export function doEditSteps(position, value) {
    return {type: 'EDIT_STEPS', value: value, position: position};
}

export function doReset(position) {
    return {type: 'RESET', position: position};
}

export function doAddCounter(position) {
    return {type: 'ADD_COUNTER', position: position};
}