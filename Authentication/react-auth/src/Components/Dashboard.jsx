import React,{useState} from 'react';
import Login from '../Login/Login';

const Dashboard = () => {
    const [token, setToken] = useState();
    if(!token) {
        {return <Login setToken={setToken}/>};
    }
    return (
        <div>
            <h1 className='text-white font-bold text-2xl'>DashBoard</h1>
        </div>
    )
}

export default Dashboard;