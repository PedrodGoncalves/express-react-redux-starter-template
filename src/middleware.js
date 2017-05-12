export const promiseHandler = store => next => async action => {
    let response
    switch (action.type) {
        default: 
            next(action)
            break
    }
}
