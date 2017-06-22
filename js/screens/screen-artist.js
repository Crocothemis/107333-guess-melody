import ArtistView from '../views/artist-view';
import showScreen from "../show-screen";
import showScreenGenre from "./screen-genre";
import genres from '../data/genres';

export default (data, currentState) => {
  const view = new ArtistView(data);

  view.onClick = () => {
    let genre = genres[currentState.genreCount];
    showScreenGenre(genre, currentState);
  };

  showScreen(view.element);
  currentState.artistCount = currentState.artistCount + 1;

};
