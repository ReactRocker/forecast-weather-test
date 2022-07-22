import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchForecastData } from '../../redux/slices/forecast';
import { AppDispatch } from '../../redux/store';


interface ForecastItemsProps {
    // fix!
    items: any[]
}

const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;

    * {
        margin: 10px;
    }

    .btn {
        font-size: 21px;
        width: 180px;
        height: 70px;
        font-weight: 500;
    }
`



const ForecastButtons: FC<ForecastItemsProps> = ({ items }) => {

    const [activeButton, setActiveButton] = useState<number>(-1)

    const dispatch = useDispatch<AppDispatch>()

    const onChooseCity = async (city: string, ind: number) => {
        setActiveButton(ind)
        const res = await dispatch(fetchForecastData(city))
        console.log({ loadedCity: res })
    }


    return (
        <ButtonsWrapper>
            {
                items.map((el: any, ind: number) => {
                    return <button key={el.city + ind} onClick={() => onChooseCity(el.city, ind)} className={`btn ${activeButton === ind ? "active" : ""}`}>{el.city}</button>
                })
            }
        </ButtonsWrapper>
    )
}

export default ForecastButtons