import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

const artists = [
    {
        name: "Risas y Locuras",
        urlPoints: "../../assets/Imagen/4 estrellas.svg",
        description: "El espectáculo de payasos 'Risas y Locuras' es una explosión de alegría y diversión que encanta a todas las edades. Con un elenco talentoso y colorido, el show combina habilidades de comedia física, malabares y travesuras cómicas para crear un ambiente festivo. Desde interacciones animadas con el público hasta un escenario vibrante, 'Risas y Locuras' ofrece una experiencia teatral llena de risas y recuerdos felices para toda la familia",
        price: "$4.500,00",
        location: "San Isidro",
        days: "Sab-Dom",
        time: "18 hs y 19:30 hs",
        urlArtist:"../../assets/Imagen/Risas y Locuras.svg",
        category: "Payasos"
    },
    {
        name: "Aventuras Comicas",
        urlPoints: "../../assets/Imagen/3 estrellas.svg",
        description: "El fascinante espectáculo de payasos 'Aventuras Cómicas' es un festín visual que cautiva a todas las edades. Con un elenco vibrante y divertido, el espectáculo fusiona magistralmente la comedia física, malabares y travesuras cómicas para crear un ambiente alegre. Desde interacciones juguetonas con el público hasta un escenario colorido, 'Aventuras Cómicas' brinda una experiencia teatral repleta de risas y momentos inolvidables para toda la familia.",
        price: "Gratuita",
        location: "Quilmes",
        days: "Vie-Sab-Dom",
        time: "17 hs y 19 hs",
        urlArtist: "../../assets/Imagen/Aventuras Comicas.svg",
        category: "Payasos"
    },
    {
        name: "Risas Festivas",
        urlPoints: "../../assets/Imagen/3 estrellas.svg",
        description: "El show de payasos 'Risas Festivas' es una experiencia encantadora que deleita a todas las edades. Con un elenco alegre y lleno de energía, el espectáculo combina hábilmente la comedia física, malabares y travesuras cómicas para crear un ambiente festivo. Desde interacciones animadas con el público hasta un escenario vibrante, 'Risas Festivas' ofrece una experiencia teatral llena de risas y momentos memorables para disfrutar en familia.",
        price: "Gratuita",
        location: "CABA", 
        days: "Vie-Sab-Dom",
        time: "17 hs y 19 hs",
        urlArtist: "../../assets/Imagen/Risas Festivas.svg",
        category: "Payasos"
    },
    {
        name: "Alegria Circense",
        urlPoints: "../../assets/Imagen/4 estrellas.svg",
        description: "El espectáculo de clowns, 'Alegría Circense', es una explosión de diversión y risas. Con malabares expertos y travesuras encantadoras, los clowns cautivan a la audiencia, creando un ambiente festivo y lleno de energía. 'Alegría Circense' ofrece una experiencia teatral encantadora y llena de humor que deja a todos con sonrisas contagiosas. ",
        price: "$6.500,00",
        location: "CABA",
        days: "Sab",
        time: "18 hs y 19:30 hs",
        urlArtist: "../../assets/Imagen/Alegria Circense.svg",
        category: "Clowns"
    },
    {
        name: "Ruedan Clowns",
        urlPoints: "../../assets/Imagen/5 estrellas.svg",
        description: "El show 'Ruedan clowns: Risas en Movimiento' ofrece una experiencia única de comedia y entretenimiento. Con un elenco dinámico, el espectáculo fusiona malabares habilidosos y travesuras encantadoras en un torbellino de risas contagiosas. Este festín visual garantiza momentos inolvidables, convirtiendo a “Ruedan Clowns” en un espectáculo imperdible para toda la familia.",
        price: "Gratuita",
        location: "Hurlingham",
        days: "Vie-Sab-Dom",
        time: "17 hs, 18:30 hs y 20 hs",
        urlArtist: "../../assets/Imagen/Ruedan Clowns.svg",
        category: "Clowns"
    },
    {
        name: "Carcajadas Clowns",
        urlPoints: "../../assets/Imagen/3 estrellas.svg",
        description: "El show 'Carcajadas Clowns' es una experiencia única de comedia presentada por un elenco dinámico de clowns. Entre malabares expertos y travesuras encantadoras, el espectáculo crea un ambiente festivo y lleno de energía. 'Carcajadas en Ruedas' garantiza risas contagiosas y momentos inolvidables para el deleite de toda la familia.",
        price: "Gratuita",
        location: "La Matanza",
        days: "Dom",
        time: "17 hs y 19 hs",
        urlArtist: "../../assets/Imagen/Carcajadas Clowns.svg",
        category: "Clowns"
    },
    {
        name: "Ilusiones Magicas",
        urlPoints: "../../assets/Imagen/4 estrellas.svg",
        description: "El espectáculo 'Ilusiones Mágicas' deslumbra con un elenco de magos expertos que cautivan a la audiencia con trucos sorprendentes y actos cautivadores. Entre ilusiones asombrosas y misterios deslumbrantes, el show crea un ambiente fascinante lleno de emoción. 'Ilusiones Mágicas' garantiza momentos de asombro y entretenimiento mágico para toda la familia.",
        price: "Gratuita",
        location: "Tigre",
        days: "Sab-Dom",
        time: "18 hs",
        urlArtist: "../../assets/Imagen/Ilusiones Magicas.svg",
        category: "Magia"
    },
    {
        name: "Magia en Escena",
        urlPoints: "../../assets/Imagen/4 estrellas.svg",
        description: "El show 'Magia en Escena' ofrece una experiencia extraordinaria con un elenco de magos talentosos que deslumbran con trucos cautivadores y efectos sorprendentes. Entre ilusiones hábiles y actos envolventes, el espectáculo crea un ambiente mágico lleno de asombro. 'Magia en Escena' promete un viaje encantador lleno de momentos misteriosos y deleite para toda la audiencia.",
        price: "Gratuita",
        location: "Bernal",
        days: "Sab-Dom",
        time: "18:30 hs",
        urlArtist: "../../assets/Imagen/Magia en Escena.svg",
        category: "Magia"
    },
    {
        name: "Encanto de la Bestia",
        urlPoints: "../../assets/Imagen/4 estrellas.svg",
        description: "El espectáculo infantil 'Encanto de la Bestia' lleva a los pequeños a un viaje mágico con la clásica historia de La Bella y la Bestia. Con un elenco encantador y escenografía cautivadora, el show combina música, baile y diálogos animados para crear una experiencia teatral fascinante. 'Encanto de la Bestia' garantiza risas, emociones y lecciones atemporales para los niños, convirtiéndose en un evento inolvidable para toda la familia.",
        price: "$13.000,00",
        location: "CABA",
        days: "Sab-Dom",
        time: "18 hs",
        urlArtist: "../../assets/Imagen/Encanto de la Bestia.svg",
        category: "Teatral"
    },
    {
        name: "Alicia Encantada",
        urlPoints: "../../assets/Imagen/4 estrellas.svg",
        description: "En 'Alicia Encantada', los pequeños exploran un mundo mágico lleno de maravillas. Con un elenco vibrante y escenografía cautivadora, el show combina música, baile y personajes peculiares para ofrecer una experiencia teatral única. 'Alicia Encantada' promete diversión, asombro y lecciones llenas de imaginación, convirtiéndose en un espectáculo encantador para toda la familia.",
        price: "$9.000,00",
        location: "CABA",
        days: "Sab-Dom",
        time: "18 hs",
        urlArtist:"../../assets/Imagen/Alicia Encantada.svg",
        category: "Teatral"
    },
];

export const seedArtists = () => {
    artists.forEach((artist) => {
        addDoc(collection( db, "artists"), artist);
    });
};

