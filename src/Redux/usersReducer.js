const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setPageAC = (currentPage) => ({type: SET_PAGE, currentPage})

export default usersReducer;