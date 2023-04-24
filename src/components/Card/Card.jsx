import './Card.css';

const Card = ( {scenePlanet} ) => {
    
const moons = scenePlanet.moons;

    return (
        <div className="cards">
            <div className="container-title">
                <h1 className="title">
                    {scenePlanet.englishName}
                </h1>
                <h2 className="description">{scenePlanet.bodyType}</h2>
            </div>
            <div className="planet-image">
                <img src={scenePlanet.image} alt={scenePlanet.englishName} />
            </div>
            <div className="bot-card">
                <p className="presentation">{scenePlanet.englishDescription}</p>
                <h5>{scenePlanet.englishName} - Présentation</h5>
                <div className="moon-container">
                    <div className="moons">
                        <div className="moon-title">
                            <h2>Moons</h2>
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
    );
};

export default Card;
