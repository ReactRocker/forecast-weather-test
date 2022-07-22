import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { forecastReducer } from "./slices/forecast";
import { settingsReducer } from "./slices/settings";

const rootReducer = combineReducers({
    forecast: forecastReducer,
    settings: settingsReducer
})

const store = configureStore({
    reducer: rootReducer
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>

export default store;