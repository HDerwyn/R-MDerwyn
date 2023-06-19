import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.divCard}>
      {character.id && <h2>ID: {character.id}</h2>}
      {character.name && <h2>Nombre: {character.name}</h2>}
      {character.status && <p>Estado: {character.status}</p>}
      {character.species && <p>Especie: {character.species}</p>}
      {character.gender && <p>Género: {character.gender}</p>}
      {character.origin && character.origin.name && (
        <p>Origen: {character.origin.name}</p>
      )}
      {character.image && <img src={character.image} alt={character.name} />}
    </div>
  );
}
