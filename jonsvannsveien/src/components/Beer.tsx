import { Link } from 'react-router-dom';
import "../styles/Beer.css";
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../App';

const emojis = {
    'star-smiley': "🤩",
    'heart-smiley': "😍",
    "smiley": "😁",
    "neutral": "😐",
    "puke": "🤢",
    "death": "💀",
  };

export const getEmoji = (rating: number) => {
  return rating < 2 ? emojis["death"] :
  rating < 4 && rating >= 2 ? emojis["puke"] :
  rating < 6 && rating >= 4 ? emojis["neutral"] :
  rating < 8.5 && rating >= 6 ? emojis["smiley"] :
  rating < 9.5 && rating >= 8.5 ? emojis["heart-smiley"] :
  rating >= 9.5 ? emojis["star-smiley"] :
  ""
}

export interface Beer {
    title: string;
    company: string;
    Image_url: string;
    rating: string;
    rank: number;
    id: string;
    type: string;
    city: string;
}

interface BeerListProps {
  beers: Beer[];
}

export const getBeer = async () => {
  const beerCollectionRef = collection(firestore, "beer");
  const data = await getDocs(beerCollectionRef);

  const beers = await Promise.all(data.docs.map(async (doc) => {
    const beerData = doc.data();
    const ratingsCollection = collection(firestore, "beer", beerData.id, "ratings");
    const ratingsSnapshot = await getDocs(ratingsCollection);
    const ratings = ratingsSnapshot.docs.map(doc => doc.data().rating);
    const averageRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1); 
    return {
      title: beerData.title,
      company: beerData.company,
      rating: averageRating,
      Image_url: beerData.Image_url,
      rank: 0,
      id: beerData.id,
      type: beerData.type,
      city: beerData.city, 
    };
  }));

  // Sort the beers and assign ranks
  beers.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  for (let i = 0; i < beers.length; i++) {
    beers[i].rank = i + 1;
  }

  return beers;
};

const BeerList: React.FC<BeerListProps> = ({ beers }) => {

  return (
    <>
      {beers.map((beer, i) => (
        <Link to={`/beer/${beer.id}`} key={i} style={{ textDecoration: 'none' }}>
          <div className="single-beer">
            <p className="beer-rank" > #{beer.rank} </p>
            <img className="beer-image" src={beer.Image_url} alt={beer.title} />
            <h3 className="beer-title">{beer.title}</h3>
            <p className="beer-company">{beer.company}</p>
            <div className="beer-rating-wrapper">
              <p className="beer-rating">{beer.rating}</p>
              <p className="beer-emoji">{getEmoji(parseFloat(beer.rating))}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BeerList;