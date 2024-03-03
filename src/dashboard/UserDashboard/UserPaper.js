import React from 'react';

const UserPaper = ({ user }) => {
    const { name } = user;
    console.log(name);
    return (
        <div>
            {name}
        </div>
    );
};

export default UserPaper;