import React, { useState } from 'react';
import BarChart from './graph';

function UserData() {
    const [data] = useState([
        { id: '1', courses: 5 },
        { id: '2', courses: 3 },
        { id: '3', courses: 8 },
        { id: '4', courses: 2 },
    ]);

    return (
        <div>
            <BarChart data={data} />
        </div>
    );
};    

export default UserData;



