import { useContext, useState } from "react"
import { PlayerContext } from "../context/PlayerContext";

const AddPlayer = () => {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const { addPlayer } = useContext(PlayerContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPlayer = {
            name,
            avatar
        };
        addPlayer(newPlayer);
        console.log(newPlayer);
        setName('');
        setAvatar('');
    };

    return (
        <div className="form-container">
            <h2>Add a new player</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Player name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Avatar URL"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />

                <button type="submit">Add Player</button>
            </form>
        </div>
    );
};

export default AddPlayer;