import { combineReducers } from 'redux';
import { reducer as FavotiteRedux } from './FavotiteRedux';

const AppReducers = combineReducers({
    Favotites: FavotiteRedux
});

export default AppReducers;