
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import AppReducers from './index';

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
    {}, // initial state
  )
	let persistor = persistStore(store)
	return { store, persistor }
}