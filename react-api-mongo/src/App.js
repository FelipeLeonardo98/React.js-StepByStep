import React, { Component } from 'react';
import api from './api';


class App extends Component {
  // Definindo o estado
  state = {
    artigos: [],
  }

  async componentDidMount() {
    // definindo a var que conterá o retorno da API
    const response = await api.get('');

    this.setState({ artigos: response.data });
    console.log(response.data);
  }

  render() {
    return
    (
      <div>
        <strong> <h1>API React.js|MongoDB </h1></strong>
      </div>
    )
  }

}

export default App;
