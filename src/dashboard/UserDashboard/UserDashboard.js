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
    const data = useLoaderData();
    console.log(data);

    return (
        <div className='bg-info'>
            <button className='btn btn-primary'>Click See user</button>
            {data.map(user => <UserPaper
                key={user.id}
                user={user}
            />
            )}
        </div>
    );
};

export default UserDashboard;