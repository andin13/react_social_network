import React from "react";
import {
    addPostActionCreator,
    changeTextAreaActionCreator,
    deletePostsActionCreator
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();

                let textArea = state.profilePage.textArea;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let changeTextArea = (text) => {
                    store.dispatch(changeTextAreaActionCreator(text));
                }

                let deletePosts = () => {
                    store.dispatch(deletePostsActionCreator());
                }
                return <MyPosts textArea={textArea}
                                addPost={addPost}
                                changeTextArea={changeTextArea}
                                deletePosts={deletePosts}
                                posts={state.profilePage.posts}/>
            }
        }
    </StoreContext.Consumer>


}

export default MyPostsContainer;