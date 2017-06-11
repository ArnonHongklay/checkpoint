/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

// import Drawer from './modules/_global/Drawer';
// import Movies from './modules/movies/Movies';
// import MoviesList from './modules/movies/MoviesList';
// import Movie from './modules/movies/Movie';
// import Search from './modules/movies/Search';

import MapScreen from './screens/MapScreen';
import Screen1 from './screens/Screen1';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

export function registerScreens() {
  // Navigation.registerComponent('movieapp.Movie', () => Movie, store, Provider);
  // Navigation.registerComponent('movieapp.Movies', () => Movies, store, Provider);
  // Navigation.registerComponent('movieapp.MoviesList', () => MoviesList, store, Provider);
  // Navigation.registerComponent('movieapp.Search', () => Search, store, Provider);
  // Navigation.registerComponent('movieapp.Drawer', () => Drawer);
  Navigation.registerComponent('MapScreen', () => MapScreen);
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);
}
