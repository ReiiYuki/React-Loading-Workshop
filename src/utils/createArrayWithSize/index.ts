export default function createArrayWithSize(size: number) {
    const array = []

    for (let i = 0; i<size; i++) {
        array.push(i)
    }

    return array
}
