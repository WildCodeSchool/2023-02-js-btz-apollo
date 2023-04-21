import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import axios from "axios";
import "./Scene.css"

const Scene = () => {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    axios
      .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
      .then((res) => setPlanet(res.data.bodies));
  }, []);

  // On a besoin du nom , image ,description ,les lunes associées , (facts)
  return (
    <div className='scene'>
      {planet &&
        planet
          .filter((element) => element.bodyType === 'Planet')
          .map((planet) => (
            <Cards
              key={planet.id}
              planet={planet}
            />
          ))}
    </div>
  );
};

export default Scene;
