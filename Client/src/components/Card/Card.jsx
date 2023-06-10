import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image, onClose })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         console.log(myFavorites);
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         <button onClick={handleFavorite}> {isFav ? '❤️' : '🤍'}</button>
         <div className={styles.individual}>
            <div className={styles.front}>
               <img className={styles.img} src={image} alt='' />
            </div>
            <div className={styles.back}>
               <button onClick={() => onClose(id)}>X</button>
               <NavLink to={`/detail/${id}`}>
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
