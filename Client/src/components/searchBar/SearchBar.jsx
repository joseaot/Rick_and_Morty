import { useState } from 'react';
import style from '../searchBar/searchbar.module.css'


export default function SearchBar({onSearch}) {

   const [id, setId]= useState('');

   const handleChange=(event)=>{
      setId(event.target.value)
   }




   return (
      <div>
         <input type='search' className={style.input} onChange={handleChange} value={id} placeholder='Ingrese un ID' />
         <button onClick={()=>onSearch(id)} className={style.boton}>A g r e g a r</button>
      </div>
   );
}
