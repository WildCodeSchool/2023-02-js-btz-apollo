import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ExitButton from './ExitButton';
import './Cards.css';

const Cards = ({ planets }) => {
  const [planet, setPlanet] = useState({});
  const [onload, setOnload] = useState([]);

  const moons = planets.moons;

  console.log(planets);

  const params = useParams();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://apollo-api.martinnoel.fr/solar-system/solar-system/${params.id}`
  //     )
  //     .then((res) => setPlanet(res.data));
  // }, [params.id]);

  if (!moons) {
    return null;
  }

  return (
    <div className="cards">
      <div className="container-title">
        <h1 className="title">
          {planets.englishName}
          <Link to="/">
            <ExitButton />
          </Link>
        </h1>
        <h2 className="description">{planets.bodyType}</h2>
      </div>

      <div className="planet-image">
        <img src={planets.image} alt={planets.englishName} />
      </div>
      <div className="bot-card">
        <p className="presentation">{planets.englishDescription}</p>
        <h5>{planets.englishName} - Présentation</h5>
        <div className="moon-container">
          <div className="moons">
            <div className="moon-title">
              <h2>Moons</h2>
            </div>
            <ul>
              {moons.map((moon) => (
                <li key={moon.moon}>{moon.moon}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
