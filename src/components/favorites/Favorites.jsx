import Card from "../card/Card"
import { connect } from "react-redux"
import style from '../favorites/favorites.module.css'

function Favorites({myFavorites}) {
  return (
    <div className={style.contenedor}>
        {
            myFavorites?.map(fav=>{
                return(
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        origin={fav.origin}
                        image={fav.image}
                        onClose={fav.onClose}

                    />
                )
            })
        }

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