const actions = {
    INCREMENT_ASYNC: "INCREMENT_ASYNC",
    DECREMENT_ASYNC: "DECREMENT_ASYNC",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",

    increment: () => ({
        type: actions.INCREMENT
    }),

    decrement: () => ({
        type: actions.DECREMENT
    }),

    incrementAsync: () => ({
        type: actions.INCREMENT_ASYNC
    }),

    decrementAsync: () => ({
        type: actions.DECREMENT_ASYNC
    })
}

export default actions