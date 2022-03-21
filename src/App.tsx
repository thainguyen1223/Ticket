import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import SliderBar from './Components/SliderBar/SliderBar';
import ListSliderBar from './Components/ListSliderBar/ListSliderBar';
import ListTicket  from './Components/ListTicket/ListTicket';
import ChangeTicket  from './Components/Home/ChangeTicket/ChangeTicket'
import Setting  from './Components/Home/Setting/Setting';
import {Routes , Route , } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<ListSliderBar/>}></Route>
        <Route path='/home' element={<><SliderBar/><Home/></>}></Route>
        <Route path='/List__ticket' element={<><SliderBar/><ListTicket/></>}></Route>
        <Route path='/Change__ticket' element={<><SliderBar/><ChangeTicket/></>}></Route>
        <Route path='/Setting' element={<><SliderBar/><Setting/></>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
