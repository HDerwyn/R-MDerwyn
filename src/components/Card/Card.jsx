import data from "../../data";
import styles from './Card.module.css'


export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <button className={styles.buttonS} onClick={() =>props.onClose(props.id)}> <span className={styles.spanS}>X</span></button>
         <h2 className={styles.h2s}>{props.name}</h2>
         <h2 className={styles.h2s}>{props.status}</h2>
         <h2 className={styles.h2s}>{props.species}</h2>
         <h2 className={styles.h2s}>{props.gender}</h2>
         <h2 className={styles.h2s}>{props.origin}</h2>
         <img className={styles.imgS} src={props.image} alt='Esta imagen pertenese a' /> 
      </div>
   );
}
