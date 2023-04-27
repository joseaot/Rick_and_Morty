import style from '../card/card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action'
import { connect } from 'react-redux'
import { useState, useEffect} from 'react';


function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav]= useState(false);


   const handleFavorite =() =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose});
      }

   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.container}>
         <div className={style.botones2}>
            <button onClick={(()=>onClose(id))} className={style.closeBoton}>✖️</button>
            <button onClick={handleFavorite} className={style.Fav}>{isFav ? '❤️' : '🤍'}</button> 
         </div>
         <Link to={`/detail/${id}`} >
         <h3 className={style.cardname}>{name}</h3>
         </Link>
         <img src={image} alt='' className={style.imagen} />
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}

const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: (character)=> { dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);