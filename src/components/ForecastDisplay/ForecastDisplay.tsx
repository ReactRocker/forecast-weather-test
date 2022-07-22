import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import weatherData from '../../static-data/weather-date'

import { toggleShowDays } from '../../redux/slices/forecast';
import { AppDispatch, RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import weekdays from '../../static-data/week-days.json'
import middle_sunny from "../../assets/images/middle-sunny.svg"


const ForecastWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ForecastCurrentItem = styled.div`
    font-size: 18px;
    font-weight: 600;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;


    .content {
        display: flex;
        align-items: center;

        &__image {
            display: block;
        width: 200px;
        height: 200px;
        }

        &__info {
            margin-left: 30px;

        }
    }

    .text {
       font-size: 20px;
       font-weight: 600;
       text-align: center;
    }
`

const ForecastToggleButtons = styled.div`
    display: flex;
    width: 220px;
    justify-content: space-between;
    margin-top: 50px;

    button {
        width: 100px;
        height: 30px;
        border-radius: 11px;
    }

`

const ForecastDaysItems = styled.div`
    display: flex;
    justify-content: space-between;

    .item {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        height: 100%;
        margin-left: 10px;

        &__img {
            display: block;
            width: 200px;
            height: 200px;
        }

        &__text {
            text-align: center;
            width: 300px;
            font-size: 20px;
            font-weight: 600;
            padding: 10px 0;
        }
    }
`

const CityName = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    span {
        font-size: 22px;
    }
`



const ForecastDisplay: FC = () => {

    const [showFormat, setShowFormat] = useState<number>(0)
    const { name, temp, feels_like, humidity, sunrise, sunset, dailyWeather, isLoading, showDays } = useSelector((state: RootState) => state.forecast)
    const { formatUnits } = useSelector((state: RootState) => state.settings)
    const dispatch = useDispatch<AppDispatch>()
    const onToggleShowFormat = (format: boolean, showFormat: number) => {
        dispatch(toggleShowDays(format))
        setShowFormat(showFormat)
    }

    const calcValue = () => {
        if (formatUnits === "imperial") {
            return 33.8
        }

        return 1
    }

    // @ts-ignore
    const sunriseDate = new Date(sunrise).toLocaleTimeString()
    //@ts-ignore
    const sunsetDate = new Date(sunset).toLocaleTimeString()
    if (isLoading) {
        return <div style={{ display: "flex", width: "100%", "justifyContent": "center" }}>
            <h2>Loading...</h2>
        </div>
    }

    return (
        <>
            <CityName>
                <span>{name}</span>
            </CityName>

            <ForecastWrapper>
                {
                    showDays ? (
                        <ForecastDaysItems>
                            <>
                                {
                                    dailyWeather.slice(0, 7).map((el: any, ind: number) => {

                                        return (
                                            <div className="item">
                                                <p className="item__text" >{weekdays[ind]}</p>
                                                {/* @ts-ignore */}
                                                <img src={weatherData[el.weather[0].description.toLowerCase()] || middle_sunny} alt="sun" className="item__img" />
                                                <p className="item__text">{el.weather[0].description}</p>
                                                <p className="item__text">H: {Math.trunc(el.temp.max * calcValue())}{calcValue() === 1 ? "°" : "F"} / L: {Math.trunc(el.temp.min * calcValue())}{calcValue() === 1 ? "°" : "F"}</p>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        </ForecastDaysItems>
                    ) : (
                        <ForecastCurrentItem>
                            {
                                name ? (
                                    <>

                                        <div className="content">
                                            <img src={middle_sunny} alt="sun" className='content__image' />
                                            <div className='content__info'>
                                                {/* @ts-ignore */}
                                                <p>Temp: {Math.trunc(+temp * calcValue())}{calcValue() === 1 ? "°" : "F"}</p>
                                                {/* @ts-ignore */}
                                                <p>Feels like: {Math.trunc(+feels_like * calcValue())}{calcValue() === 1 ? "°" : "F"}</p>
                                                <p>Humidity: {humidity}% </p>
                                                <p>Sunrise: {sunriseDate} AM </p>
                                                <p>Sunset: {sunsetDate} PM </p>
                                            </div>
                                        </div>
                                    </>
                                ) : <h2>Please, choose a city</h2>
                            }

                        </ForecastCurrentItem>
                    )
                }
            </ForecastWrapper>
            <div style={{ display: "flex", width: "100%", "justifyContent": "center" }}>
                <ForecastToggleButtons >
                    <Link to={`/${name.toLocaleLowerCase()}`}>
                        <button className={showFormat === 0 ? "active" : ""} onClick={() => onToggleShowFormat(false, 0)}>Current</button>
                    </Link>
                    <Link to={`/${name.toLocaleLowerCase()}_7days`}>
                        <button className={showFormat === 7 ? "active" : ""} onClick={() => onToggleShowFormat(true, 7)}>7 days</button>
                    </Link>
                </ForecastToggleButtons>
            </div>

        </>

    )
}

export default ForecastDisplay