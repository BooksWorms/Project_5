const initState = {
    books: [],
};

const main = (state = initState, { type, payload }) => {
    switch (type) {
        case "SET_BOOKS":
            return {books: [... payload]};
        default:
            return initState;
    }
};

export default main;

export const setBooks = (books) => {
    return {
        type: "SET_BOOKS",
        payload: books,
    }
}