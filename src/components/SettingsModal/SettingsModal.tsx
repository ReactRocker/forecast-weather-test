import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleShowModal, updateSettingsState } from '../../redux/slices/settings';
import { AppDispatch, RootState } from '../../redux/store';

const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background: transparent;
    backdrop-filter: blur(15px);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;

    .content {
        width: 600px;
        height: 400px;
        border: 1px solid #0A84FF;
        border-radius: 15px;
        padding: 20px;
    }

    .buttons {

    }

    .btn {
        width: 100px;
        height: 30px;
        font-size: 18px;
        
    }

    .buttons {
        width: 400px;
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        padding-top: 10px;
    }

    .text {
        text-align: center;
        font-size: 22px;
    }

    .ult-font {
        font-size: 30px;

    }
`

const SettingsModal: FC = () => {

    const { formatTime, formatUnits } = useSelector((state: RootState) => state.settings)
    const dispatch = useDispatch<AppDispatch>()


    const onCloseModal = () => {
        dispatch(toggleShowModal(false))
    }

    const onChooseFormatTime = (format: string) => {
        dispatch(updateSettingsState({ formatUnits, formatTime: format }))
    }

    const onChooseFormatUnit = (format: string) => {
        dispatch(updateSettingsState({ formatUnits: format, formatTime }))

    }


    return (
        <ModalWrapper>
            <div className='content'>
                <p className="text ult-font">Settings</p>
                <div style={{ marginTop: "30px" }}>
                    <p className='text'>Units</p>
                    <div className="buttons">
                        <button className={`btn ${formatUnits === "imperial" ? "active" : ""}`} onClick={() => onChooseFormatUnit("imperial")} >Imperial</button>
                        <button className={`btn ${formatUnits === "standard" ? "active" : ""}`} onClick={() => onChooseFormatUnit("standard")} >Standard</button>
                    </div>
                </div>
                <div style={{ marginTop: "30px" }}>
                    <p className='text'>Time</p>
                    <div className="buttons">
                        <button className={`btn ${formatTime === "12hr" ? "active" : ""}`} onClick={() => onChooseFormatTime("12hr")} >AM/PM</button>
                        <button className={`btn ${formatTime === "24hr" ? "active" : ""}`} onClick={() => onChooseFormatTime("24hr")} >24 hours</button>
                    </div>
                </div>

                <div className="buttons" style={{ marginTop: "50px" }} >
                    <button className='btn' onClick={onCloseModal}>close</button>
                    {/* <button className='btn' onClick={saveSettings}>save</button> */}
                </div>
            </div>
        </ModalWrapper>
    )
}

export default SettingsModal