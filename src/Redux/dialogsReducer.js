const addMessage = 'ADD-MESSAGE';
const changeMessageArea = 'CHANGE-MESSAGE-AREA';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi', incoming: false},
        {id: 2, message: 'How are you?', incoming: true},
        {id: 3, message: 'Hi2', incoming: false},
        {id: 4, message: 'Hi2', incoming: false},

    ],
    textArea: 'Default'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {id: 5, message: state.textArea, incoming: false}
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