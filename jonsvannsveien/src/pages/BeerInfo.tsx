import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Beer, getEmoji} from '../components/Beer';
import { firestore } from "../App";
import { doc, getDoc, collection, setDoc, getDocs } from "firebase/firestore";
import 'firebase/firestore';
import Navbar from '../components/Navbar';
import "../styles/BeerInfo.css";
import loadingGif from '../assets/loading.gif';

const BeerInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [rating, setRating] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseFloat(event.target.value));
  };

  const handleRatingClick = async () => {
    if (!beer) {
      console.log("No beer selected!");
      return;
    }
  
    const ratingsCollection = collection(firestore, "beer", beer.id, "ratings");
    await setDoc(doc(ratingsCollection), { rating });
  };

  useEffect(() => {
    const fetchBeer = async () => {
      if (!id) {
        console.log("No ID provided!");
        return;
      }
    
      const beerDoc = doc(firestore, "beer", id);
      const beerSnapshot = await getDoc(beerDoc);
      if (beerSnapshot.exists()) {
        const beerData = beerSnapshot.data() as Beer;
  
        const ratingsCollection = collection(firestore, "beer", id, "ratings");
        const ratingsSnapshot = await getDocs(ratingsCollection);
        const ratings = ratingsSnapshot.docs.map(doc => doc.data().rating);
        const averageRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : "0.0";  
        setBeer({ ...beerData, rating: averageRating });
      } else {
        console.log("No such document!");
      }
    };
    fetchBeer();
  }, [id]);

  if (!beer) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="beer-info-wrapper">
        <div className='beer-info-title-wrapper'>
          <h1 className='beer-info-title'>{beer.title}</h1>
        </div>
        <img className="beer-info-image" src={beer.Image_url} alt={beer.title} />
        <div className="beer-info-rating-wrapper">
          <p className='beer-info-rating'>{beer.rating}</p>
          <p>{getEmoji(parseFloat(beer.rating))}</p>
        </div>
        <div className='beer-info-info'>
          <p className='beer-info-company'>{beer.company}</p>
          <p className='beer-info-type'>{beer.type}</p>
          <p className='beer-info-city'>{beer.city}</p>
        </div>
        <div className='give-rating-container'>
          <input
            className='give-rating-input'
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={rating}
            onChange={handleInputChange}
          />          
          <button className='give-rating-button' onClick={handleRatingClick}>Gi rating</button>
        </div>
      </div>
    </div>
  );
}

export default BeerInfo;