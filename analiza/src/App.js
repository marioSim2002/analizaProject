// App.js
import React, { useState } from 'react';
import UserData from './components/usreInfo';



const App = () => {
    return (
        <div>
            <h1>נתוני קורסים</h1>
            <UserData />
        </div>
    );
};

export default App;

