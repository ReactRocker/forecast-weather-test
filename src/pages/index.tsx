import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
import { fetchForecastData } from '../redux/slices/forecast'
import { AppDispatch, RootState } from '../redux/store'
import { ForecastDispay, ForecastButtons, Header, SettingsModal } from '../components'

import cities from '../static-data/cities.json'
import getRandomInt from '../utils/getRandomInt'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const Home: FC = () => {

    const { showModal } = useSelector((state: RootState) => state.settings)

    // get random 8 cities
    const randomNumber: number = getRandomInt(0, 984)
    const randomCities = cities.slice(randomNumber, randomNumber + 18)

    return (
        <HomeWrapper>
            <Header />
            <ForecastDispay />
            {showModal && <SettingsModal />}
            <ForecastButtons items={randomCities} />
        </HomeWrapper>
    )
}

export default Home