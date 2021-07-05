import {useState, useEffect} from 'react';
import Player from './components/Player';


function App() {
  const [songs] = useState([
    {
      title: "Butterfly",
      artist: "jass Manak",
      img_src: "./images/manak1.jpg",
      src: "./ankitsongs/abc.mp3",
    },
    {
      title: "girlfriend",
      artist: "jass Manak",
      img_src: "./images/manak2.jpg",
      src: "./ankitsongs/girl.mp3",
    },
    {
      title: "allah",
      artist: "jass Manak",
      img_src: "./images/manak3.jpg",
      src: "./ankitsongs/allah.mp3",
    },
    {
      title: "galsun",
      artist: "jass Manak",
      img_src: "./images/manak4.jpg",
      src: "./ankitsongs/bcd.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(() =>{
      if (currentSongIndex + 1 > songs.length - 1){
        return 0;
      } else{
        return currentSongIndex + 1;
      }
    })
  },[currentSongIndex]);


  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;