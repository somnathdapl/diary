export const authReducer = (prevState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            console.log("action data", action.data);
            return { loggedIn: true };
        default:
            return { loggedIn: false };
    }
}