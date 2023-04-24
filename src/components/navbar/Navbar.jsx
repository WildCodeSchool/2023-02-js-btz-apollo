import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarItem from './NavbarItem';
import './Navbar.css';

const Navbar = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://apollo-api.martinnoel.fr/solar-system/solar-system')
      .then((res) => setObjects(res.data.bodies));
  }, []);

  return (
    <div className="navbar">
      {objects &&
        objects
          .filter((object) => object.bodyType === 'Star' || object.bodyType === 'Planet')
          .map((object) => <NavbarItem key={object.id} object={object} />)}
    </div>
  );
};

export default Navbar;
