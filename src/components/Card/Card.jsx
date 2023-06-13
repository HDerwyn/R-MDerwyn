import data from "../../data";
import styles from './Card.module.css'
import { Link } from "react-router-dom";


export default function Card(props) {
   return (
     <div className={styles.divCard}>
       <button
         className={styles.buttonS}
         onClick={() => props.onClose(props.id)}
       >
         {" "}
         <span className={styles.spanS}>X</span>
       </button>
       <Link to={`/detail/${props.id}`}>
         {" "}
         <h2 className={styles.h2s}>{props.name}</h2>
       </Link>
       <h2 className={styles.h2s}>{props.status}</h2>
       <h2 className={styles.h2s}>{props.species}</h2>
       <h2 className={styles.h2s}>{props.gender}</h2>
       <h2 className={styles.h2s}>{props.origin}</h2>
       <img
         className={styles.imgS}
         src={props.image}
         alt="Esta imagen pertenece a la Tarjeta"
       />
     </div>
   );
}
