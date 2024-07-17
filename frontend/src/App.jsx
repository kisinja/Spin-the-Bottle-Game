import AddPlayer from "./components/AddPlayer"
import PlayerList from "./components/PlayerList"
import SpinBottle from "./components/SpinBottle"
import { PlayerProvider } from "./context/PlayerContext"

const App = () => {
  return (
    <PlayerProvider>
      <div className="App">
        <h1>Spin the Bottle Game</h1>
        <SpinBottle />
        <AddPlayer />
        <div className="player-list-container">
          <h2>Players</h2>
          <PlayerList />
        </div>
      </div>
    </PlayerProvider>
  );
};

export default App;