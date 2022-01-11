import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, changeTextAreaActionCreator, deletePostsActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {

    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let textArea = props.profilePage.textArea;

    let newPostElement = React.createRef();

    let addPost = () => {
        if (textArea) {
            props.dispatch(addPostActionCreator());
        }
    }

    let changeTextArea = () => {
        let text = newPostElement.current.value;
        props.dispatch(changeTextAreaActionCreator(text));
    }

    let deletePosts = () => {
        props.dispatch(deletePostsActionCreator());
    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={changeTextArea} value={textArea}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button onClick={deletePosts}>Delete all posts</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
        <div>{textArea}</div>
    </div>
}

export default MyPosts;