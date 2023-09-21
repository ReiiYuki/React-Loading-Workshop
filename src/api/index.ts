export function slowApi() {
    return new Promise(resolve => {
        setTimeout(resolve, 5000)
    })
}

export function possibleErrorApi() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error()), 5000)
    })
}
