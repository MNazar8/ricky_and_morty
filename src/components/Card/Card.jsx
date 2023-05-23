import styles from './Card.module.css'
import { NavLink } from 'react-router-dom'


export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={styles.container}>
         <div className={styles.individual}>
            <div className={styles.front}>
               <img className={styles.img} src={image} alt='' />
            </div>
            <div className={styles.back}>
               <button onClick={() => onClose(id)}>X</button>
               <NavLink to= {`/detail/${id}`}>
               <h2>{name}</h2>
               </NavLink>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{origin}</h2>
            </div>
         </div>
      </div>
   );
}
