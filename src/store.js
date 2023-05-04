import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import Adduser from "./reducers/UserDetails";

const persistConfig = {
  key: "root",
  storage,
};

const persistReducerForData = persistReducer(persistConfig, Adduser);

export const store = configureStore({
  reducer: persistReducerForData,
});

export const persistStoreForData = persistStore(store);
