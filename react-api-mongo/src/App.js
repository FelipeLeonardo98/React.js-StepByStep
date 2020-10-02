// Import de arquivos necessários
import React, { Component } from 'react';
import api from './services/api';
import './App.css';

// Criação da Class App que será exportada
class App extends Component {

  state = {
    artigos: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({ artigos: response.data });
    //testando retorno da API console.log(response.data);
  }
  render() {
    //Adquirindo os dados da API no state para o array artigos
    const { artigos } = this.state;
    console.log(artigos);

    return (
      <div>
        <p id="header"> Lista de Artigos | API: http://localhost:8080/api </p>
        {artigos.map(artigo => (

          <li key={artigo._id}>
            Título: <span class="title"> {artigo.titulo} </span>
            <p class="content"> Conteúdo:  {artigo.conteudo} </p>

          </li>
        ))}
      </div>
    )
  }


}

export default App;