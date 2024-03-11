import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig.js";
import { seedArtists } from "../Utils/SeedArtist";
import { useParams } from "react-router-dom";
import { ArtistDetailContainer } from "../ArtistDetailContainer/ArtistDetailContainer.jsx";


export const Artist = () => {
    const { category } = useParams();
    const [artists, setArtists] = useState([]);
    const [tablaArtists, setTablaArtists] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const getArtistDB = ( category ) =>{
      const myArtists = category 
      ? query( collection ( db, "artists"), where("category", "==", category)) 
      : query( collection ( db, "artists")); //FILTRA POR TIPO
      //const myArtistas = query( collection ( db, "artistas")); MUESTRA TODOS
        getDocs( myArtists )
            .then( (resp)=>{
                const artistsList = resp.docs.map((doc) =>({ id: doc.id, ...doc.data()}));
                setArtists(artistsList);
                setTablaArtists(artistsList);
            })
            .catch( error => console.log(error));
    };

    const handleChange =( e )=>{
      setBusqueda(e.target.value);
      filtrar(e.target.value);
    };

    const filtrar =(terminoBusqueda) =>{
      var resultado = tablaArtists.filter((artist)=>{
        if(artist.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return artist;
        }
      });
      setArtists(resultado);
    };

    useEffect( ()=>{ 
      getArtistDB(category)

      //seedArtists();
    },[category]);


  return (
    <>
    <div className="w-2/5 flex flex-row justify-evenly mt-4 mx-auto">  
    <button className="font-black text-xl">Buscar por nombre</button>
    <input className="w-60 rounded-md text-gray-700 px-2"
    value={busqueda}
    onChange={handleChange}
    />
    </div>
    {artists.map( artist=>(
      <ArtistDetailContainer key={artist.id} {...artist} />
    ))}
    </>
  );
};

