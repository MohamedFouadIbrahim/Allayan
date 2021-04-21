import { combineReducers } from 'redux';
import { reducer as FavotiteRedux } from './FavotiteRedux';
import { reducer as CartRedux } from './CartRedux';

const AppReducers = combineReducers({
    Favotites: FavotiteRedux,
    Cart: CartRedux 
});

export default AppReducers;