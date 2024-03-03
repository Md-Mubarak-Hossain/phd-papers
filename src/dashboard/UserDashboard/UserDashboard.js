import React, { useEffect, useState } from 'react';
import UserPaper from './UserPaper';
import { useLoaderData } from 'react-router-dom';
// https://jsonplaceholder.typicode.com/users
const UserDashboard = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(result => setData(result))
    // }, [])
    const phdInfo = useLoaderData();
    console.log(phdInfo);

    return (
        <div className='bg-info'>
            <button className='btn btn-primary'>Click See user</button>
            {phdInfo.map(info => <UserPaper
                key={info.id}
                info={info}
            />
            )}
        </div>
    );
};

export default UserDashboard;