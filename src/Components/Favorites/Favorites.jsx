import { useEffect, useState } from "react";
import { ShowsDetailContainer } from "../ShowsDetailContainer/ShowsDetailContainer";
import { ShowsDetailContainerFree } from "../ShowsDetailContainerFree/ShowsDetailContainerFree";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig.js";


export const FavoritesPage = () => {
    const [favoriteShows, setFavoriteShows] = useState([]);

    useEffect(() => {
        const fetchFavoriteShows = async () => {
            try {
                const artistRef = collection(db, "artists");
                const querySnapshot = await getDocs(artistRef);
                const favoriteShowsData = [];
                querySnapshot.forEach((doc) => {
                    const artistData = doc.data();
                    if (localStorage.getItem(`favorite_${doc.id}`) === "true") {
                        favoriteShowsData.push({ id: doc.id, ...artistData });
                    }
                });
                setFavoriteShows(favoriteShowsData);
            } catch (error) {
                console.error("Error fetching favorite shows: ", error);
            }
        };

        fetchFavoriteShows();
    }, []);

    return (
        <>
            <h3 className="flex justify-center font-black text-3xl my-4 border-b-2 border-[#FAF2F2]">SHOWS FAVORITOS</h3>
            <div className="grid gap-2 grid-cols-2 grid-rows-1">
                {favoriteShows.map(show => (
                    <ShowsDetailContainerFree key={show.id} {...show} />
                ))}
            
                {favoriteShows.map(show => (
                    <ShowsDetailContainer key={show.id} {...show} />
                ))}
            </div>
        </>
    );
};
