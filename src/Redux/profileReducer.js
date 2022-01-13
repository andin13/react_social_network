const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const DELETE_POSTS = 'DELETE-POSTS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likeCount: 5},
        {id: 2, message: 'second post', likeCount: 8}
    ],
    textArea: 'Default'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.textArea,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.textArea = '';
            return state;
        case CHANGE_TEXT_AREA:
            state.textArea = action.text;
            return state;
        case DELETE_POSTS:
            state.posts = [];
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextAreaActionCreator = (text) => ({type: CHANGE_TEXT_AREA, text: text})
export const deletePostsActionCreator = () => ({type: DELETE_POSTS})

export default profileReducer;