import Logo from './Logo/Logo';
import Clock from './Clock';
import Info from './Info/Info'
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
