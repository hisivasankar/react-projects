import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate(nextProps) {
        if(this.props.articleId) {
            if(!this.state.loadedPost || (this.state.loadedPost.id !== this.props.articleId)) {
                let url = 'https://jsonplaceholder.typicode.com/posts/' + this.props.articleId
                axios.get(url)
                    .then(response => {
                        console.log(response);
                        this.setState({
                            loadedPost: response.data
                        });
                    })
            }
        }
    }
    
    deletePost = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts/' + this.props.articleId;
        axios.delete(url)
            .then(response => {
                console.log("Deleted!");
            });
    }
    render() {
        let content = (<p style={{backgroundColor: "lightgray"}}>Please select an article</p>);
        if(this.props.articleId) {
            content = (<p style={{backgroundColor: "lightgray"}}>Loading</p>);
        }
        if (this.state.loadedPost) {
            content = (
                <div className="full-post">
                        <h1>{this.state.loadedPost.title}</h1>
                        <p className="full-post-content">
                            {this.state.loadedPost.body}
                        </p>
                        <div className="edit">
                            <button onClick={this.deletePost}>Delete</button>    
                        </div>
                </div>);
        }
        return content;
    }
}
export default FullPost;