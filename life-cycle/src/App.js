import React, {Component} from 'react';
import Twitter from './Twitter';

class App extends Component{

  render(){

    const posts =[{title: 'xpto', description: 'foo'}, {title: 'xpto', description: 'foo'}]
    return(
       <Twitter posts={posts} /> 
      
    )
  }

}

export default App;