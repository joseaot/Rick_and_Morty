import Card from "../card/Card"
import { connect, useDispatch } from "react-redux"
import style from '../favorites/favorites.module.css'
import { filterCards, orderCards } from "../../redux/action"
import { useState } from "react"

function Favorites({myFavorites}) {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(true);
    }
    
    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

  return (
    <div className={style.contenedor}>
        <div className={style.barra}>
            <select onChange={handleOrder} className={style.botones2}>
                <option value="-">--Selecciona--</option>
                <option value="A" >Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter} className={style.botones1}>
                <option value="-">--Genero--</option>
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
        </div>
        <div className={style.cartas}>
            {
                myFavorites?.map(fav=>{
                    return(
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}

                        />
                    )
                })
            }

        </div>

    </div>
  )
}

const mapStateToProps= (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);