import { useDispatch, useSelector } from 'react-redux';
import { toggleOpen } from '../../../assets/Redux/store';
import Inflogo from '../../../assets/images/icone-info.png';
import './Info.css';

const Info = () => {

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.home.isOpen);

  const handleInfoClick = () => {
    dispatch(toggleOpen());
  };

  return (
    <div className='info-container'>
      <img
        onClick={handleInfoClick}
        src={Inflogo}
        alt='logo-info'
      />
    </div>
  );
};

export default Info;
