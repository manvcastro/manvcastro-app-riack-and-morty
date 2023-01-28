import './App.css'
//import Card from './components/Card/Card'
import Cards from './components/Cards/Cards'
//import SearchBar from './components/SearchBar/SearchBar'
import React, {useState} from 'react'
import Nav from './components/NavBar/Nav'

function App () {
  const [characters, setCharacters] = useState([])

//   const example = {
//     name: 'Morty Smith',
//     species: 'Human',
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };

  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}

  function onClose(charId){
    setCharacters(characters.filter(character=> character.id !== charId))
    
  }
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        {/* <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        /> */}
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <hr />
    </div>
  )
}

export default App
