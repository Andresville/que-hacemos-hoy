import Pepetito from "../../assets/Imagen/Pepetito.svg";
import RuedanClowns from "../../assets/Imagen/RuedanClowns.svg";
import Estrellas5 from "../../assets/Imagen/Estrellas5.svg";
import Estrellas4 from "../../assets/Imagen/Estrellas4.svg";

export const FeaturedArtists = () => {
    return (
        <div className="mt-8">
            <h2 className="flex justify-center font-black text-3xl">Artistas Destacados</h2>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row items-center">
                    <img className="w-64 h-52" src={Pepetito} alt="..." />
                    <div className="ml-8 py-4">
                        <h3 className="font-black text-xl">Pepetito</h3>
                        <p className="self-center">Puntuación</p>
                        <img className="h-3 self-center" src={Estrellas4} alt="" />
                        <h4>Show de malabarismo</h4>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <img className="w-64 h-52" src={RuedanClowns} alt="..." />
                    <div className="ml-8 py-4">
                        <h3 className="font-black text-xl">Ruedan Clowns</h3>
                        <p className="self-center">Puntuación</p>
                        <img className="h-4 self-center" src={Estrellas5} alt="" />
                        <h4>Show de clowns</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

