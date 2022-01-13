import React from "react";
import {addMessageActionCreator, changeMessageAreaActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();

                let textArea = state.dialogsPage.textArea;

                let ButtonPush = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let changeMessageArea = (text) => {
                    store.dispatch(changeMessageAreaActionCreator(text));
                }

                return <Dialogs textArea={textArea}
                                ButtonPush={ButtonPush}
                                changeMessageArea={changeMessageArea}
                                state={state}
                />

            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;