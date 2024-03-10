import { Carrusel } from "../Carrusel/Carrusel"
import { FeaturedArtists } from "../FeaturedArtists/FeaturedArtists";
import { NavBar } from "../NavBar/NavBar"
import { ShowsAndSpectacles } from "../ShowsAndSpectacles/ShowsAndSpectacles";


export const Home = () => {
  return (
    <>
    <Carrusel />
    <FeaturedArtists />
    <ShowsAndSpectacles />
    </>
  );
};

