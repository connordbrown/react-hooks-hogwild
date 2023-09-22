import React from 'react';

function Sorter({onSort}) {
    return (
        <div>
            <label>Sort by: </label>
            <select onChange={onSort}>
                <option value="name">name</option>
                <option value="weight">weight</option>
            </select>
        </div>
    )
}

export default Sorter;