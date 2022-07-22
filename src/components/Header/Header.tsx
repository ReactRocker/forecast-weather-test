import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchForecastData } from '../../redux/slices/forecast';
import { toggleShowModal } from '../../redux/slices/settings';
import { AppDispatch } from '../../redux/store';
import Clock from '../Clock/Clock';

const HeaderWrapper = styled.header`
    padding-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const SettingsButton = styled.button`
    width: 80px;
    height: 30px;
`

const SearchInput = styled.input`
    width: 130px;
    height: 30px;
    font-size: 16px;
    background-color: #000;
    color: #fff;
    border: 1px solid #0A84FF;
    margin-right:30px;
    border-radius: 10px;
    padding: 0 5px;
`

const Header: FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const [inputValue, setInputValue] = useState<string>("")
    const openSettigs = () => {
        dispatch(toggleShowModal(true))
    }

    const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(e)
        //@ts-ignore
        dispatch(fetchForecastData(inputValue))
    }



    return (
        <HeaderWrapper>
            <Clock />
            <div>
                {/* @ts-ignore */}
                <form onSubmit={(e) => onSubmit(e)} style={{ display: "inline" }}>
                    <SearchInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </form>
                <SettingsButton onClick={openSettigs}>setting</SettingsButton>
            </div>
        </HeaderWrapper>
    )
}

export default Header