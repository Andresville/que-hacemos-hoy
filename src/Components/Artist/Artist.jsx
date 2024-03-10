import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig";


export const Artist = () => {

    const [artistas, setArtistas] = useState([]);

    const getArtistasDB = ( tipo ) =>{
      const myArtistas = tipo ? query( collection ( db, "artistas"), where("tipo", "==", tipo)) : query( collection ( db, "artistas")); //FILTRA POR TIPO
      //const myArtistas = query( collection ( db, "artistas")); MUESTRA TODOS
        getDocs( myArtistas )
            .then( (resp)=>{
                const artistasList = resp.docs.map(doc =>{
                  const artista ={
                    id: doc.id,
                    ...doc.data()
                  };
                  return artista;
                })
                console.log(artistasList);
                setArtistas(artistasList);
            })
            .catch( error => console.log(error));
    };

    useEffect( ()=>{ 
      getArtistasDB("payaso")
    },[]);


  return (
    <>  
    <h2>Artistas</h2>
    {artistas.map((artista)=>(
      <div key={artista.id}>      
      <p>Nombre: {artista.name}</p>
      <p>Tipo: {artista.tipo}</p>
      <p>Ubicacion: {artista.ubicacion}</p>
      </div>
    ))};
    </>
  );
};

