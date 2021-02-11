import React, {Component} from 'react';

class Twitter extends Component {

    componentDidMount(){
        const {posts} = this.props
        console.log('componentDidMount', posts);
    }

    render(){
        const {posts} = this.props;
        console.log('render', posts)
        return(
            <div>
                {posts.map(post => (
                  <li key={post.title}>  
                 <span>{post.title} </span>
                 </li>
                ))}
            </div>
        )
    }
}

export default Twitter