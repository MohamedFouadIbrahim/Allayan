
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import AppReducers from './index';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'locale',
        'localize',
        'network',
        'inspector',
        'navigation',
    ],
}


const persistedReducer = persistReducer(persistConfig, AppReducers)

export default () => {
	// let store = createStore(persistedReducer)
	let store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
  )
	let persistor = persistStore(store)
	return { store, persistor }
}