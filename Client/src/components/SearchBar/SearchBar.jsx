import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
  const { onSearch } = props;

  const [ID,setID] = useState({
    iD: ""
  })

  function handleRandomClick() {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  }

  const handleChange = (event) => {
    setID({ iD: event.target.value });
  }

  return (
    <div className={styles.SearchBarS}>
      <input className={styles.inputS} type='search' value={ID.iD} onChange={handleChange} />
      <button className={styles.buttonIpt} onClick={() => onSearch(ID.iD)}>Agregar</button>
      <button className={styles.buttonIpt} onClick={handleRandomClick}>Random</button>
    </div>
  );
}
