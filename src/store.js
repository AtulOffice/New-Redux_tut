import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Redux/NumSlice";
import stringReducer from "./Redux/InputStrSlice";
import userReducer from "./Redux/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// export const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//       string: stringReducer,
//     },
//   });

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  Stringput: stringReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);