import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig.js";
import { seedArtists } from "../Utils/SeedArtist";
import { useParams } from "react-router-dom";


export const Artist = () => {
    const { category } = useParams();
    const [artists, setArtists] = useState([]); 

    const getArtistDB = ( category ) =>{
      const myArtists = category 
      ? query( collection ( db, "artists"), where("category", "==", category)) 
      : query( collection ( db, "artists")); //FILTRA POR TIPO
      //const myArtistas = query( collection ( db, "artistas")); MUESTRA TODOS
        getDocs( myArtists )
            .then( (resp)=>{
                const artistsList = resp.docs.map((doc) =>({ id: doc.id, ...doc.data()}));
                setArtists(artistsList);
            })
            .catch( error => console.log(error));
    };

    useEffect( ()=>{ 
      getArtistDB(category)

      //seedArtists();
    },[category]);


  return (
    <>  
    <h2>Artistas</h2>
    {artists.map((artist)=>(
      <div key={artist.id}>   
      <img src={artist.urlArtist} />   
      <p>Nombre: {artist.name}</p>
      <p>Descripcion: {artist.description}</p>
      <p>Precio: {artist.price}</p>
      <p>Ubicacion: {artist.location}</p>
      <p>Dias: {artist.days}</p>
      <p>Horario: {artist.time}</p>
      </div>
    ))}
    </>
  );
};

