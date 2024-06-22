export const initialState = {
    users: [
        {id: 1, name: 'Noyon'},
        {id: 2, name: 'Purna'}
    ]
};

export const reducer = (state, action)=>{
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case 'DELETE':
            const filterUser = state.users.filter(user=> user.id !== action.payload);
            return {
                users: filterUser
            }
        default:
            return state;
    }
}