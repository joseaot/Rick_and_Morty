import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from '../detail/detail.module.css'


const URL_BASE= 'https://be-a-rym.up.railway.app/api/character'
const API_KEY= 'c2734c76f55c.8473b1acb2d58697f157' 

function Detail() {

  const {id}= useParams();
  const [character, setCharacter]= useState({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(Response=>Response.data)
    .then(( data ) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div className={style.contenedor} >
      <div className={style.div}>
      <h2 className={style.nombre}>{character?.name}</h2>
      <h2 className={style.letras}>{character?.status}</h2>
      <h2 className={style.letras}>{character?.species}</h2>
      <h2 className={style.letras}>{character?.gender}</h2>
      <h2 className={style.letras}>{character?.origin?.name}</h2>
      </div>
      <img src={character?.image} alt={character?.name} className={style.img}/>
    </div>
  )
}

export default Detail