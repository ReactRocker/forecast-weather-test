import React, { useEffect, useState } from 'react';
import './App.scss';
import { Canvas } from 'react-three-fiber';
import Home from './pages';
import styled from 'styled-components'
// import cities from './static-data/cities.json'
import axios, { AxiosResponse } from 'axios';
import { Routes, Route } from 'react-router-dom';

const AppWrapper = styled.div`
  background-color: #000;
  max-width: 1299px;
  min-height: 100vh;
  margin: 0 auto;
`





function App() {
  const [searchValue, setSearchValue] = useState<string>('')


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>, city: string) => {
    e.preventDefault()

    if (city.trim() === "") {
      return;
    }

    const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=21e13618250493beedbd534cc08dd1e2`).then(res => res)

    //@ts-ignore
    if (res.data.length === 0) {
      console.log("there no such city !")
    } else {
      //@ts-ignore
      console.log('here it is! ' + res.data[0].name)
    }
  }


  useEffect(() => {
    // console.log({ cities })
  }, [])


  return (

    <AppWrapper>
      {/* <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e, searchValue)}>
        <input value={searchValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} type="text" />
        <button type="submit"></button>
      </form> */}
      <Routes>
        <Route path="/:info" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
};


export default App;
