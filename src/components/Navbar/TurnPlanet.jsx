import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';

import { toggleOpenCard } from '../../assets/Redux/store';

const TurnPlanet = ({ model, index, handleSetObject, handleClicked }) => {
    const modelRef = useRef();
    const [hover, setHover] = useState(false);

    const dispatchCard = useDispatch();
    const isOpenCard = useSelector((state) => state.card.isOpen);
  const isOpen = useSelector(state => state.home.isOpen);

    useFrame(() => {
        {hover ? modelRef.current.rotation.y += 0.02 : null;
        }
    });


      
    const handleCardClick = () => {
        dispatchCard(toggleOpenCard());
    };
  
  return (
    <>
            <primitive
                ref={modelRef} object={model.scene} scale={0.0015}
                onDoubleClick={()=>{
                    handleSetObject(index)
                    handleClicked()
                    isOpenCard ? '' : handleCardClick() 
                    
                }}
                onPointerOver={() => {
                    setHover(true);
                 }}
    
                onPointerOut={() => {
                    setHover(false);
                }}

            />
    </>
  );
};

export default TurnPlanet;
