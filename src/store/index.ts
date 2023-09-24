import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import authReducer from "./slices/auth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import logger from "redux-logger";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["auth"],
  stateReconciler: autoMergeLevel2,
};

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  blacklist: ["isLogging"],
  stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
  key: "user",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  // transactions: transactionsReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { persistor };
export default store;
