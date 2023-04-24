import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card/Card';
import './Scene.css';

const Scene = () => {
  const [scenePlanet, setScenePlanet] = useState([]);

  useEffect(() => {
    axios
      .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
      .then((res) => setScenePlanet(res.data.bodies));
  }, []);

  return (
    <div className="scene">
      {scenePlanet &&
        scenePlanet
          .filter((object) => object.bodyType === 'Planet')
          .map((planet) => <Card key={planet.id} scenePlanet={planet} />)}
    </div>
  );
};

export default Scene;
