import Card from '../card/Card';
import style from '../cards/cards.module.css'

export default function Cards({characters, onClose}) {
   return (

      <div className={style.contenedor}>
          {
            characters.map(({name, id, status, species, gender, origin, image}) =>{
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}
                  />
               )
            })

          }
      </div>
   )
}
