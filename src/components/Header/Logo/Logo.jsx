import { forwardRef, useRef, useState } from 'react';
import Aplogo from '../../../assets/images/logo-apollo-blc.png';
import './Logo.css';




const Logo = () => {

    const [isReset, setIsReset] = useState(true)

    return (
        <div className='logo-container' >
            <img
                src={Aplogo}
                alt='logo-apollo'
                onClick={() => {
						setIsReset(false);
					}}
            />
        </div>
    );
};

export default Logo;
