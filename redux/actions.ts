import { actions as FavotiteActions } from './FavotiteRedux';
import { actions as CartActions } from './CartRedux';

const allActions = {
    ...FavotiteActions,
    ...CartActions
}

export default allActions