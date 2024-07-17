import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
        setPlayers(storedPlayers);
    }, []);

    const addPlayer = (newPlayer) => {
        const updatedPlayers = [...players, newPlayer];
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    const removePlayer = (playerId) => {
        const updatedPlayers = players.filter(player => player.id !== playerId);
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedPlayers));
    };

    return (
        <PlayerContext.Provider value={{ players, addPlayer, removePlayer }}>
            {children}
        </PlayerContext.Provider>
    );
};

PlayerProvider.propTypes = {
    children: PropTypes.node.isRequired
};