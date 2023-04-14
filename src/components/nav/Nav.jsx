import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import style from '../nav/nav.module.css'
import { Link } from 'react-router-dom'

function Nav({onSearch, setAccess}) {

  const handleLogOut=()=>{
    setAccess(false);
  }




  return (
    <div className={style.nav}>
      <SearchBar
         onSearch={onSearch}
      />


      <button className={style.boton1}> 
        <Link to='/about' className={style.letra}> About</Link>
      </button>

      <button className={style.boton}>
        <Link to='/home' className={style.letra} >Home</Link>
      </button>
      \
      <button className={style.boton1}>
        <Link to='/favorites' className={style.letra} >Fav</Link>
      </button>
      <button onClick={handleLogOut} className={style.boton}>
        <Link className={style.letra}>LOG OUT</Link>
      </button>




      
    </div>
  )
}

export default Nav