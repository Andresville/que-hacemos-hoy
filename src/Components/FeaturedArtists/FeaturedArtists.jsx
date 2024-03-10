import Pepetito from "../../assets/Imagen/Pepetito.svg"
import RuedanClowns from "../../assets/Imagen/RuedanClowns.svg"

export const FeaturedArtists = () => {
  return (
    <div className="mt-8">
        <h2 className="flex justify-center font-black text-3xl">Artistas Destacados</h2>
        <div className="flex flex-row justify-around">
        <div className="flex flex-row items-center">
            <img className="w-64 h-52" src={Pepetito} alt="..." />
            <div className="ml-8">
                <h3 className="font-black text-xl">Pepetito</h3>
                <h4>Puntuación</h4>
                <h4>Show de malabarismo</h4>
            </div>
        </div>
        <div className="flex flex-row items-center">
            <img className="w-64 h-52" src={RuedanClowns} alt="..." />
            <div className="ml-8">
                <h3 className="font-black text-xl">Ruedan Clowns</h3>
                <h4>Puntuación</h4>
                <h4>Show de clowns</h4>
            </div>
        </div>
        </div>
    </div>
  )
}

