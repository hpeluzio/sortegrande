import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import Reactotron from '~/config/reactotron';

import { Reducers } from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, Reducers);

export const store = createStore(
  pReducer,
  applyMiddleware(/*Reactotron.createEnhancer()*/),
);
export const persistor = persistStore(store);
