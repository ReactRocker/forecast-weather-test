import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { RootState } from '../../redux/store';

const ClockWrap = styled.p`
    color: #fff;
`

const Clock: FC = () => {


    const { formatTime } = useSelector((state: RootState) => state.settings)



    const currentTime12 = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: formatTime === "12hr" })
    const [currentTime, setCurrentTime] = useState<object>({})

    console.log('render')

    const interval = setInterval(() => {
        setCurrentTime({})
    }, 1000)

    useEffect(() => {
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <ClockWrap>
            It is {currentTime12}.
            {/* <button onClick={() => setTimeFormat(prev => prev === "12hr" ? "24hr" : "12hr")}>change format</button> */}
        </ClockWrap>
    );
};

export default Clock