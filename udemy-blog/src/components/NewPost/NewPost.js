import React, {Component} from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: ''
    }

    authorChangeHandler = (event) => {
        this.setState({
            author: event.target.value
        });
    }

    postDataHandler = () => {
        let data = {...this.state};
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log('Done!')
            });
    }

    render() {
        return (
            <div className="new-post">
                <h1>Add new post</h1>
                <label>Title</label>
                <input 
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.setState({
                        title: event.target.value
                    })}/> 
                <label>Content</label>
                <textarea onChange={(event) => this.setState({
                        body: event.target.value
                    })}/>
                <label>Author</label>
                <select value={this.state.author} onChange={this.authorChangeHandler}>
                    <option>Siva</option>
                    <option>John cena</option>
                </select>
                <button onClick={this.postDataHandler}>Submit</button>
            </div>
        );
    }
}
export default NewPost;