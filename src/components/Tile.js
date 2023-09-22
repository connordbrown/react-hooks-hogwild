import React, { useState } from 'react';

function Tile({name, image, specialty, weight, greased, highestMedal}) {

    const [isVisible, setIsVisible] = useState(true);

	function handleVisibilityChange(tileVisibility) {
		setIsVisible(tileVisibility => !tileVisibility);
	} 

    return (
        <div className="pigTile" onClick={() => handleVisibilityChange(isVisible)}>
            <h3>{name}</h3>
            <img src={image} alt="A cute piggy" className="minPigTile"/>
            <div className={isVisible ? 'hidden' : 'normalText'}>
                <ul>
                    <li>Specialty: {specialty}</li>
                    <li>Weight: {weight}</li>
                    <li>Grease status: {greased ? "greased" : "not greased"}</li>
                    <li>Highest medal achieved: <span className='achievementText'>{highestMedal}</span></li>
                </ul>
            </div>

        </div>
    )
}

export default Tile;