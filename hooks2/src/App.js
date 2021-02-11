import React, {useState, useEffect} from 'react';

export default function App(){
  const [repositories, setRepositories] = useState(['']);

  //hook useEffect will receive two paramters
  // "old componentDidMount"
  useEffect(async()=> {
    const response = await fetch('https://api.github.com/users/felipeleonardo98/repos');
    const data = await response.json();
    setRepositories(data);
  },[]);

  // "old componentDidUpdate"
  useEffect(()=> {
    const countFavorite = repositories.filter(repo => repo.favorite);
    document.title = `You've ${countFavorite.length} favorites`;
  }, [repositories]);


  function handleFavorite(id){
    const favRepository = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo;
    })

    setRepositories(favRepository);
  }

  return (
    // <> mean "invisible div" or somenthing like that
    <>
    <ul>
      {
        repositories.map(({id, name, language, ssh_url, favorite}) => (
        
          <li key={id}> Name: {name}
            {favorite && <span> 😎</span>}

            <ul>
              <li>Language:  {language}</li>
              <li>URL: {ssh_url}</li>
            
              <button onClick={() => handleFavorite(id)}>Add to Favorites</button>
            </ul>
            
            <hr />
           </li>
           
        ))
      }
    </ul>

    </>
  )
}