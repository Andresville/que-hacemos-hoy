import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Carrusel1 from "../../assets/Imagen/Carrusel1.svg";
import Carrusel2 from "../../assets/Imagen/Carrusel2.svg";
import Carrusel3 from "../../assets/Imagen/Carrusel3.svg";
import Carrusel4 from "../../assets/Imagen/Carrusel4.svg";

export const Carrusel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [Carrusel1, Carrusel2, Carrusel3, Carrusel4];
    const intervalRef = useRef(null);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    useEffect(() => {
        // Iniciar el carrusel automático
        intervalRef.current = setInterval(() => {
            nextImage();
        }, 3000); // Cambiar imagen cada 3 segundos

        // Limpiar el intervalo cuando el componente se desmonta
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [currentImage]); // Se ejecuta cuando currentImage cambia

    return (
        <div className="mt-8 relative w-full overflow-hidden ">
            <div className="flex justify-between items-center">
                {/* Imagen izquierda */}
                <div className="absolute left-10 ">
                    <img src={images[(currentImage - 1 + images.length) % images.length]} alt="Carousel Image" className="w-120 h-64 object-cover opacity-50" />
                </div>
                {/* Imagen central */}
                <div className="relative z-10">
                    <img src={images[currentImage]} alt="Carousel Image" className="w-120 h-72 object-cover" style={{ position: "relative", left: "105%", transform: "translateX(-50%)" }} />
                </div>
                {/* Imagen derecha */}
                <div className="absolute right-10 ">
                    <img src={images[(currentImage + 1) % images.length]} alt="Carousel Image" className="w-120 h-64 object-cover opacity-50" />
                </div>
            </div>
        </div>
    );
};
