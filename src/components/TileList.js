import React from "react";
import Tile from "./Tile";

function TileList({hogs}) {
    const tileList = hogs.map(hog => {
        return <Tile key={hog.name} 
                     name={hog.name} 
                     image={hog.image}
                     specialty={hog.specialty}
                     weight={hog.weight} 
                     greased={hog.greased}
                     highestMedal={hog["highest medal achieved"]}
                />
    })

    return (
        <div>
            {tileList}
        </div>
    )
}

export default TileList;