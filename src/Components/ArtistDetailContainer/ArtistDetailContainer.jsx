

export const ArtistDetailContainer = ({ id, urlArtist, name, description, urlPoints }) => {
    return (
        <>
            <div className="flex flex-row justify-center mx-24 my-8">
                <div className="flex flex-row">
                    <img className="w-80 h-52" src={urlArtist} alt="" />
                    <div className="flex flex-col justify-start mx-8">
                        <div className="flex flex-row justify-between py-4">
                        <h3 className="font-black text-3xl">{name}</h3>
                        <div className="w-1/3 flex flex-row justify-around">
                        <p className="self-center">Puntuación</p>
                        <img className="h-5 self-center"  src={urlPoints} alt="" />
                        </div>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

