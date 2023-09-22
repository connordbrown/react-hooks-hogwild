import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import GreaseFilter from "./GreaseFilter";
import Sorter from "./Sorter";

import hogs from "../porkers_data";

function App() {
	
	const [isGreased, setIsGreased] = useState(false);
	const [selectedSort, setSelectedSort] = useState('name')

	function handleGreaseFilter() {
		setIsGreased(isGreased => !isGreased);
	}

	function handleSortChange(event) {
		setSelectedSort(event.target.value);
	}

	const hogsToDisplay = hogs.filter(hog => {
		if (isGreased === true) {
			return hog.greased === isGreased;
		} else {
			return true;
		}
	}).sort((a, b) => {
		if (selectedSort === 'weight') {
			return a.weight - b.weight;
		} else {
			return a.name.localeCompare(b.name);
		}
	})

	return (
		<div className="App">
			<Nav />
			<div className="filter-container">
				<GreaseFilter onGreased={handleGreaseFilter} isGreased={isGreased}/>
				<Sorter onSort={handleSortChange}/>
			</div>
			<TileList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
