import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const PlayerList = () => {

    const { players, removePlayer } = useContext(PlayerContext);

    return (
        <div className='player-list'>
            {players.map((player, index) => (
                <div key={index} className='player' title={player.name}>
                    <img src={player.avatar} alt={player.name} />
                    <h3>{player.name}</h3>
                    <button onClick={() => removePlayer(player.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default PlayerList;