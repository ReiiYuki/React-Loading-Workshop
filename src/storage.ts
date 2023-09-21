// https://github.com/rayriffy/datastore

const storage = {
    mapper: {} as Record<string, any>,
    setItem: <Item>(key: string , item: Item) => {
        storage.mapper[key] = item
        try {
            // indexeddb logic
            // localstroge logic
        } catch {

        }
    },
    getItem: <Item>(key: string) => {
        if (storage.mapper[key]) {
            return storage.mapper[key]
        }
        try {

        } catch {

        }
    },
    removeItem: (key: string) {
        try {

        } catch {

        }
    }
}

export default storage
