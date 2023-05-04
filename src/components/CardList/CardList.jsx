import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import './CardList.css';

const CardList = ( {indexObject,handleSetObject} ) => {
  const [scenePlanet, setScenePlanet] = useState([]);

  useEffect(() => {
    axios
      .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
      .then((res) => setScenePlanet(res.data.bodies));
  }, []);

  return (
    <div className="card-list">
      {scenePlanet &&
        scenePlanet
          .filter((object) => object.bodyType === 'Planet')
          .map((planet) => {
            <Card key={planet.id} 
                  scenePlanet={planet} 
                  />
          })}
    </div>
  );
};

export default CardList;
