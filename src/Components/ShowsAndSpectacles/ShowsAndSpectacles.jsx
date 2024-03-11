import Payasos from "../../assets/Imagen/Payasos.svg"
import Malabaristas from "../../assets/Imagen/Malabaristas.svg"
import Magia from "../../assets/Imagen/Magia.svg"
import Teatrales from "../../assets/Imagen/Teatrales.svg"
import { NavLink } from "react-router-dom"

export const ShowsAndSpectacles = () => {
    return (
        <div className="mt-8">
            <h2 className="flex justify-start ml-10 font-black text-2xl">Shows y Espectáculos</h2>
            <div className="flex flex-row justify-around mt-4">
                <div className="w-56 h-48 bg-contain bg-[#73026B] rounded-2xl shadow shadow-[#FAF2F2]">
                    <img className="rounded-t-2xl" src={Payasos} alt="Payasos"/>
                    <NavLink to={`/category/Payasos`}>
                    <button className="flex justify-center w-56 h-10 items-center">Payasos</button>
                    </NavLink>
                </div>
                <div className="w-56 h-48 bg-contain bg-[#73026B] rounded-2xl shadow shadow-[#FAF2F2]">
                    <img className="rounded-t-2xl" src={Malabaristas} alt="Malabaristas"/>
                    <NavLink to={`/category/Clowns`}>
                    <button className="flex justify-center w-56 h-10 items-center">Clowns</button>
                    </NavLink>
                </div>
                <div className="w-56 h-48 bg-contain bg-[#73026B] rounded-2xl shadow shadow-[#FAF2F2]">
                    <img className="rounded-t-2xl" src={Magia} alt="Magia"/>
                    <NavLink to={`/category/Magia`}>
                    <button className="flex justify-center w-56 h-10 items-center">Magia</button>
                    </NavLink>
                </div>
                <div className="w-56 h-48 bg-contain bg-[#73026B] rounded-2xl shadow shadow-[#FAF2F2]">
                    <img className="rounded-t-2xl" src={Teatrales} alt="Teatrales"/>
                    <NavLink to={`/category/Teatral`}>
                    <button className="flex justify-center w-56 h-10 items-center">Teatrales</button>
                    </NavLink>
                </div>
            </div>
            
        </div>
    )
}

