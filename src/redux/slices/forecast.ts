import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchForecastData = createAsyncThunk("forecast/fetchItems", async (city: string) => {
    const cityData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=21e13618250493beedbd534cc08dd1e2`).then(res => res.data)
    console.log(cityData[0].lat)
    const weatherData = await axios.get(`https://openweathermap.org/data/2.5/onecall?lat=${cityData[0].lat}&lon=${cityData[0].lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`).then(res => res.data)
    console.log({ cityData, weatherData });
    return { cityData: cityData[0], weatherData };
})

interface IState {
    name: string;
    lat: string | null;
    lon: string | null;
    showDays: boolean;
    dailyWeather: any[];
    isLoading: boolean;
    feels_like: number | null | string;
    temp: number | null | string;
    humidity: number | null | string;
    sunset: number | null | string;
    sunrise: number | null | string;
};

const initialState: IState = {
    name: '',
    lat: null,
    lon: null,
    showDays: false,
    dailyWeather: [],
    feels_like: null,
    temp: null,
    humidity: null,
    sunset: null,
    sunrise: null,
    isLoading: false
}


const forecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {
        toggleShowDays: (state: IState, action) => {
            state.showDays = action.payload
        }
    },

    extraReducers: {

        [fetchForecastData.pending.toString()]: (state: IState) => {
            state.isLoading = true
        },
        [fetchForecastData.fulfilled.toString()]: (state: IState, { payload }: PayloadAction<any>) => {
            state.lat = payload.cityData.lat
            state.lon = payload.cityData.lon
            state.showDays = payload.showDays
            state.feels_like = payload.weatherData.current.feels_like
            state.temp = payload.weatherData.current.temp
            state.humidity = payload.weatherData.current.humidity
            state.sunrise = payload.weatherData.current.sunrise
            state.sunset = payload.weatherData.current.sunset
            state.dailyWeather = payload.weatherData.daily
            state.name = payload.cityData.name
            state.isLoading = false
        },
    }
});

export const forecastReducer = forecastSlice.reducer
export const { toggleShowDays } = forecastSlice.actions