import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

import SliderBarevent from './Components/SliderBarevent/SliderBarevent';
import ListSliderBar from './Components/ListSliderBar/ListSliderBar';
import ListTicket  from './Components/Home/ListTicket/ListTicket';
import Ticketpeople  from './Components/Homepeople/Ticketpeople/Ticketpeople';
import ChangeTicket  from './Components/Home/ChangeTicket/ChangeTicket'
import Setting  from './Components/Home/Setting/Setting';
import {Routes , Route , } from 'react-router-dom'
import SliderBarpeople from './Components/ListSliderBarpeople/SliderBarpeople'
import Homepeople from './Components/Homepeople/Homepeople';

import ChangeTicketPeople from './Components/Homepeople/ChangeTicketPeople/ChangeTicketPeople';
import SettingPeople from './Components/Homepeople/Settingpeople/Settingpeople';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='' element={<><ListSliderBar/></>}></Route> 
        <Route path='/event' element={<><SliderBarevent/><Home/></>}></Route> 
        <Route path='/event/List__ticket' element={<><SliderBarevent/><ListTicket/></>}></Route> 
        <Route path='/event/Change__ticket' element={<><SliderBarevent/><ChangeTicket/></>}></Route> 
        <Route path='/event/Setting' element={<><SliderBarevent/><Setting/></>}></Route> 
        <Route path='/Homepeople' element={<><SliderBarpeople/><Homepeople/></>}></Route> 
        <Route path='/List__ticket_people' element={<><SliderBarpeople/><Ticketpeople/></>}></Route> 
        <Route path='/Change__ticket_people' element={<><SliderBarpeople/><ChangeTicketPeople/></>}></Route> 
        <Route path='/Setting__people' element={<><SliderBarpeople/><SettingPeople/></>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
