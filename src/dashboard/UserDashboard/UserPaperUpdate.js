
import React from 'react';

const UserPaperUpdate = () => {
    const userPaperUpdate = [
        { id: 1, name: "studentName", string: "Enter student name", type: "text" },
        { id: 2, name: "studentID", string: "Enter student ID", type: "text" },
        { id: 3, name: "studentCertificateNo", string: "Certificate Serial No" },
        { id: 4, name: "studentUniversityName", string: "University name", type: "text" },
        { id: 5, name: "universityCountry", string: "Country of University", type: "text" },
        { id: 6, name: "phdTitle", string: "Phd Title", type: "text" },
        { id: 7, name: "studentSession", string: "Session", type: "text" },
        { id: 8, name: "firstAuthor", string: "First Author", type: "text" },
        { id: 9, name: "secondAuthor", string: "Second Author", type: "text" },
        { id: 10, name: "uploadCertificate", string: "Upload certificate", type: "file" },

    ];
    return (
        <div className='flex flex-col justify-center items-center w-full mx-auto'>
            <div className='h-20'></div>
            <caption className='bg-secondary h-12 w-full text-center  text-2xl text-white'>Enter the PhD Holder Information</caption>
            <form className='form grid grid-cols-2 gap-x-3 mx-auto min-h-screen w-11/12 bg-base-100'>
                {
                    userPaperUpdate.map(input => <li key={input.id}
                        className='menu'>
                        <label className='label'>
                           <span className='labe-text italic'>{input.id+"."} {input.string}</span>
                        </label>
                        <input
                            type={input.type}
                            name={input.name}
                            className='input input-bordered'
                        />
                    </li>
                    )
                }
            </form>
            <button className='btn btn-primary w-11/12 mx-auto p-2 my-4 btn-outline text-lg'>Submit</button>
        </div>
    );
};

export default UserPaperUpdate;