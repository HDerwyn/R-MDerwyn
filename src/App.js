import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [Characters, setCharacters] = useState({
    characters: []
  });

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => ({ characters: [...oldChars.characters, data] }));
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }

  function onClose(id) {
   const newCharacters = Characters.characters.filter(
     (character) => character.id !== parseInt(id)
   );
   setCharacters({ characters: newCharacters });
 }
 

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Cards characters={Characters.characters} onClose={onClose} />
    </div>
  );
}

export default App;
