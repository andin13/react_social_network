import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.state;

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.dialogsPage.messages.map(m => <Message incoming={m.incoming} message={m.message}/>)

    let textArea = props.textArea;

    let ButtonPush = () => {
        if (textArea) {
            props.ButtonPush();
        }
    }

    let changeMessageArea = (e) => {
        let text = e.target.value;
        props.changeMessageArea(text);
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
        <textarea value={textArea}
                  onChange={changeMessageArea}
                  placeholder='Enter your message'
        />
        <button onClick={ButtonPush}>push</button>
    </div>
}

export default Dialogs;