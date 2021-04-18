import React, { useState } from 'react';
import './App.css';

const App = () => {

    let time = new Date().toLocaleTimeString();

    const [cTime, setcTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setcTime(time);
    }

    setInterval(UpdateTime, 1000);

    return(
        <h1> {cTime} </h1>
    );
}

export default App;