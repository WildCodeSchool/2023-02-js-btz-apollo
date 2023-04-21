import { useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';
import './Navbar.css';
import axios from 'axios';

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
          .filter((obj) => obj.bodyType === 'Star' || obj.bodyType === 'Planet')
          .map((obj) => <NavbarItem key={obj.id} object={obj} />)}
    </div>
  );
};

export default Navbar;
