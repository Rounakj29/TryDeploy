import {useState} from 'react';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar'; 
import './App.css';

function App() {
 const [date, setDate] = useState(new Date())



return (
 <div className="app">
   <h1 className="header">React Calendar</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )

}

export default App;