import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { Beer, getBeer } from "../components/Beer";
import BeerList  from "../components/Beer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../styles/Beer.css";

const Øl = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {
      const beers = await getBeer();
      setBeers(beers);
    };
  
    fetchBeers();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Øl</h1>
      <div className="search-container">
      {!isFocused && searchTerm === '' && <FontAwesomeIcon icon={faSearch} className="beer-search-icon"/>}
        <input type="text" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} 
        onChange={e => setSearchTerm(e.target.value)} />
      </div>

      <div className="beers-container">
        {beers.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <BeerList beers={beers.filter(beer => 
            beer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            beer.company.toLowerCase().includes(searchTerm.toLowerCase()))} />
        )}
      </div>
    </div>
  );
};

export default Øl;