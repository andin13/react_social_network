const addMessage = 'ADD-MESSAGE';
const changeMessageArea = 'CHANGE-MESSAGE-AREA';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {id: 5, message: state.textArea, incoming: false}
            debugger
            state.messages.push(newMessage);
            state.textArea = '';
            return state;
        case changeMessageArea:
            state.textArea = action.text;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: addMessage});
export const changeMessageAreaActionCreator = (text) => ({type: changeMessageArea, text: text});

export default dialogsReducer;