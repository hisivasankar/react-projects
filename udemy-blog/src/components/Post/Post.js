import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <article className="post" onClick={props.clicked}>
            <h3 className="title">{props.title}</h3>
            <div className="info">
                <em>- {props.author}</em>
                <div className="content">{props.content}</div>
            </div>
        </article>
    );
}
export default Post;