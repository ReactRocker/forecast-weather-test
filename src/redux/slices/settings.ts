import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


interface IState {
    showModal: boolean;
    formatTime: string;
    formatUnits: string;
};


const initialState: IState = {
    showModal: true,
    formatTime: "24hr",
    formatUnits: "standard"
};


const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleShowModal: (state: IState, action) => {
            state.showModal = action.payload
        },
        updateSettingsState: (state: IState, action) => {
            debugger
            //@ts-ignore
            state.formatTime = action.payload.formatTime
            //@ts-ignore
            state.formatUnits = action.payload.formatUnits

        },
    }
});

export const settingsReducer = settingsSlice.reducer
export const { toggleShowModal, updateSettingsState } = settingsSlice.actions