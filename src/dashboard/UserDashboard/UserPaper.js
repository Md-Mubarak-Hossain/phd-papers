import React from 'react';

const UserPaper = ({ info }) => {
    const { name } = info;
    console.log(name);
    return (
        <div>
            {name}
        </div>
    );
};

export default UserPaper;