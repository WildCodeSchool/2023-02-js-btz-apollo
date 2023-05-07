import { useSelector, useDispatch } from 'react-redux';
import { toggleOpenCard } from '../../assets/Redux/store';
import './Card.css';

const Card = ( { scenePlanet } ) => {

    const isOpenCard = useSelector((state) => state.card.isOpen);
    const dispatchCard = useDispatch();
  
    const handleCardClick = () => {
        dispatchCard(toggleOpenCard());
    };
    
const moons = scenePlanet.moons;

    return (

        <>
        {isOpenCard ? (
        <div className='card-container'>
        <div className="cards">
            <div className="container-title">
                <span onClick={handleCardClick}>X</span>
                <h1 className="title">
                    {scenePlanet.englishName}
                </h1>
                <h2 className="description">{scenePlanet.bodyType}</h2>
            </div>
            <div className="planet-image">
                <img src={scenePlanet.image} alt={scenePlanet.englishName} />
            </div>
            <div className="bot-card">
                <h5>{scenePlanet.englishName} - Présentation</h5>
                <p className="presentation">{scenePlanet.englishDescription}</p>
                <div className="moon-container">
                    <div className="moons">
                        <div className="moon-title">
                            {moons ? <h2>Moons</h2> : null}
                        </div>
                        {moons &&
                            <ul>
                            {
                            moons.map((moon) => 
                            (
                                <li key={moon.moon}>{moon.moon}</li>
                            )
                            )}
                        </ul>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        ) : null }
    </>
    );
};

export default Card;
