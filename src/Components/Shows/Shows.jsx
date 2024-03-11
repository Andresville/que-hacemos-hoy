import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig.js";
import { useParams } from "react-router-dom";
import { ShowsDetailContainer } from "../ShowsDetailContainer/ShowsDetailContainer.jsx";
import Serch from "../../assets/Imagen/Serch.svg";

export const Shows = () => {
    const { location } = useParams();
    const [artists, setArtists] = useState([]);
    const [tablaArtists, setTablaArtists] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const getArtistDB = ( location ) =>{
      const myArtists = location 
      ? query( collection ( db, "artists"), where("location", "==", location)) 
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
        if(artist.location.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return artist;
        }
      });
      setArtists(resultado);
    };

    useEffect( ()=>{ 
      getArtistDB(location)

    },[location]);


  return (
    <>
    <div className="w-2/5 flex flex-row justify-evenly my-4 mx-auto">  
    <button className="font-black text-xl">Buscar por ubicación</button>
    <input className="w-60 rounded-md text-gray-700 relative pl-8"
    value={busqueda}
    onChange={handleChange}
    />
    <img className="w-5 h-5 absolute ml-2 mt-1" src={Serch} alt="" />
    </div>
    <div className="grid gap-2 grid-cols-2 grid-rows-2">
    {artists.map( artist=>(
      <ShowsDetailContainer key={artist.id} {...artist} />
    ))}
    </div>
    </>
  );
};

