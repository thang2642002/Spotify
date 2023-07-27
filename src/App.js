import "./App.css";
import { Songs } from "./Context";
import DetailSongs from "./component/DetailSongs";
import ListSongs from "./component/ListSongs";
import Navbar from "./component/Navbar";
import DataSongs from "./Data/songs.json";
import Playing from "./component/Playing";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/*  span1 */}
          <DetailSongs />
          {/*  span2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
