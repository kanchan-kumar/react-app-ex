import {combineReducers} from "redux";

const songsReducer = () => {
  return [
      {title: 'No Scrubs', duration: '4:05'},
      {title: 'Macarena', duration: '5:05'},
      {title: 'No Ways', duration: '3:15'},
      {title: 'All I Need', duration: '4:45'},
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});


