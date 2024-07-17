import { PlayerContext } from '../context/PlayerContext';
import '../SpinBottle.css';
import { useContext, useState } from 'react';
import bottleImg from '../assets/bottle.png';

// Audio imports
import spinSound from '../audio/spinnig-bottle.wav';
import winnerSound from '../audio/winner.wav';

const SpinBottle = () => {

    const { players } = useContext(PlayerContext);
    const [winner, setWinner] = useState(null);
    const [spinning, setSpinning] = useState(false);

    // Audio setup
    const spinAudio = new Audio(spinSound);
    const winnerAudio = new Audio(winnerSound);

    const spinBottle = () => {
        if (spinning) return;

        if (players.length === 0) {
            alert('Add some players first!');
            return;
        }

        setSpinning(true);
        setWinner(null);
        const randomAngle = Math.floor(Math.random() * 3600) + 360;
        const bottleElement = document.getElementById('bottle');

        // Play spin sound
        spinAudio.play();

        bottleElement.style.transform = `rotate(${randomAngle}deg)`;

        setTimeout(() => {
            const selectedPlayerIndex = Math.floor(Math.random() * players.length);
            setWinner(players[selectedPlayerIndex]);
            setSpinning(false);

            // Play winner sound
            winnerAudio.play();
        }, 3000);
    }

    return (
        <div className='spin-bottle-container'>
            <div className="bottle-wrapper" onClick={spinBottle}>
                <img
                    src={bottleImg}
                    alt="Spin the bottle"
                    className='bottle-image'
                    id='bottle'
                />
            </div>

            {winner && (
                <div className='winner'>
                    <h2>{winner.name} is up! <br /> 🎉🎉🥳</h2>
                    <img src={winner.avatar} alt={winner.name} />
                </div>
            )}
        </div>
    );
};

export default SpinBottle;