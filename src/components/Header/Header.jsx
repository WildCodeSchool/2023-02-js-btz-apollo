import Info from './Info';
import Clock from './Clock';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <Logo />
      <Clock />
      <Info />
    </div>
  );
};

export default Header;
