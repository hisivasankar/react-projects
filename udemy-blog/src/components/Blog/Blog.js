import React, { Component } from 'react';
import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';

import axios from 'axios';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedArticleId: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let posts = response.data.splice(0, 4).map(post => {
                    return {
                        ...post,
                        author: "Siva"
                    };
                });
                this.setState({
                    posts: posts
                });
            });
    }

    articleSelectionHandler = (id) => {
        console.log("Selected");
        this.setState({
            selectedArticleId: id
        });
    }

    render() {
        let posts = this.state.posts.map(post => {
            return <Post 
                key={post.id}
                title={post.title}
                content={post.body}
                author={post.author}
                clicked={() => this.articleSelectionHandler(post.id)}/>;
        });
        return (
            <div>
                <section className="posts">
                    {posts}
                </section>
                
                <section>
                    <FullPost articleId={this.state.selectedArticleId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}
export default Blog;