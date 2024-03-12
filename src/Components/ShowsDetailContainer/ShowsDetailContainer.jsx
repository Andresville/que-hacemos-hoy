import { useState } from "react";
import Favorite from "../../assets/Imagen/Favorite.svg";
import FavoriteDefault from "../../assets/Imagen/FavoriteDefault.svg";


export const ShowsDetailContainer = ({ id, urlArtist, name, urlPoints, price, location, days, time }) => {

    const [isFavorite, setIsFavorite] = useState(localStorage.getItem(`favorite_${id}`) === "true");

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        localStorage.setItem(`favorite_${id}`, !isFavorite);
        console.log(isFavorite)
    };

    return (
        <>  
            {price !== "Gratuita" ?
                <div className="flex flex-row mx-10 mb-8">
                    <div className="flex flex-row items-center">
                        <img className="w-64 h-46" src={urlArtist} alt="" />
                        <div className="flex flex-col justify-start mx-8">
                            <h3 className="font-black text-2xl">{name}</h3>
                            <img className="h-5 w-24" src={urlPoints} alt="" />
                            <h4>Valor de la entrada: {price}</h4>
                            <h4>Ubicación: {location}</h4>
                            <h4>Funciones: {days}</h4>
                            <h4>Horario: {time}</h4>
                            <button onClick={handleFavoriteClick}>
                                {isFavorite ? <img className="w-5 h-5" src={FavoriteDefault} alt="Favorite" /> 
                                : <img className="w-5 h-5" src={Favorite} alt="Unfavorite" />}
                            </button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    )
};