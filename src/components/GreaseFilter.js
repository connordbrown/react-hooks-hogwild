import React from 'react';

function GreaseFilter({onGreased, isGreased}) {
    return (
        <div>
            <label>Filter greased pigs: </label>
            <button onClick={onGreased}>{isGreased ? 'on' : 'off'}</button>
        </div>

    )
}

export default GreaseFilter;