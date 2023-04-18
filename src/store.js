import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import Adduser from './reducers/UserDetails'

//use combine reducers if you have more than one reducers.
const persistConfig = {
    key:"root",
    storage
}

const persReducer = persistReducer(persistConfig,Adduser);

export const store = configureStore({
    reducer:persReducer
})

export const persiStore = persistStore(store);