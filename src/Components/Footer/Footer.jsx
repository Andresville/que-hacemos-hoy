import Instagram from "../../assets/Imagen/Instagram.svg";
import Facebook from "../../assets/Imagen/Facebook.svg";
import TikTok from "../../assets/Imagen/TikTok.svg";
import Logo from "../../assets/Imagen/Logo.jpg";

export const Footer = () => {
    return (
        <footer className="min-h-full">
        <div className="bg-contain bg-[#F23535] mt-8 w-full h-14 flex flex-row justify-betweenv">
            <div className="h-14 flex items-center ml-5">
                <img className="w-10 h-10" src={Logo} alt="Logo" />
            </div>
            <div className="w-2/5 h-14 flex items-center">
                <h1 className="font-black text-4xl">¿Que hacemos hoy? Seguinos en:</h1>
            </div>
            <div className="w-1/2 h-14 flex flex-row justify-start">
                <div className="w-40 h-12 flex flex-col items-center">
                    <img className="w-6 mt-2" src={Instagram} alt="Instagram" />
                    <button className="text-sm">Instagram</button>
                </div>
                <div className="w-40 h-12 flex flex-col items-center ">
                    <img className="w-6 mt-2" src={Facebook} alt="Facebook" />
                    <button className="text-sm">Facebook</button>
                </div>
                <div className="w-40 h-12 flex flex-col items-center">
                    <img className="w-6 mt-2" src={TikTok} alt="TikTok" />
                    <button className="text-sm">Tik Tok</button>
                </div>
            </div>
        </div>
        </footer>
    )
}

