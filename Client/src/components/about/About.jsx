import React from 'react'
import style from '../about/about.module.css'
import foto from '../about/img/foto.jpg'
import css from '../about/img/css.png'
import html from '../about/img/html.png'
import js from '../about/img/js.png'
import node from '../about/img/node.png'
import react from '../about/img/react.png'
import redux from '../about/img/redux.png'
import face from '../about/img/face.webp'
import ig from '../about/img/ig.png'
import linkedin from '../about/img/linke.png'
import githud from '../about/img/githud.png'
import whatsapp from '../about/img/whatsapp.png'
import gmail from '../about/img/gmail.png'



function About() {
  return (
    <div className={style.container}>
         <h3 className={style.cardname}>Jose Orellana</h3>
         <img src={foto} alt='' className={style.imagen} />
         <h2 className={style.cardname}>Programas que Domino</h2>
         <div className={style.contenedorLogo}>
            <img src={css} alt="" className={style.css}/>
            <img src={html} alt="" className={style.html}/>
            <img src={js} alt="" className={style.js}/>
            <img src={node} alt="" className={style.node}/>
            <img src={react} alt="" className={style.react}/>
            <img src={redux} alt="" className={style.redux}/> 
         </div>
         <h2 className={style.cardname}>Redes</h2>
         <div className={style.containerRedes}>
          <a target="_blank" href='https://www.facebook.com/josealberto.orellana.5'> <img src={face} className={style.face}/> </a>
          <a target="_blank" href='https://www.instagram.com/joseaot/'>  <img src={ig} className={style.ig}/> </a>
          <a target="_blank" href='https://www.linkedin.com/in/joseorellanaot/'> <img src={linkedin} className={style.linke}/> </a>
          <a target="_blank" href='https://github.com/joseaot'> <img src={githud} className={style.githud}/> </a>
          <a target="_blank" href='https://wa.me/qr/XQUOQIIULUI3E1'> <img src={whatsapp} className={style.whatsapp}/> </a>
          <a target="_blank" href='mailto:josealbertoaot@gmail.com'> <img src={gmail} className={style.gmail}/> </a>
          
          
         </div>

    </div>
  )
}

export default About