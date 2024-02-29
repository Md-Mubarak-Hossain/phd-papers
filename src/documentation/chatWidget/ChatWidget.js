import React from 'react';
import Chat from './Chat';
import './ChatWidget.css';
const ChatWidget = () => {
    return (
        <>
            {/* ......................
            Open the modal using document.getElementById('ID').showModal() method 
            ...........................*/}
            <button className="btn btn-primary shadow-lg btn-sm" onClick={() => document.getElementById('my_modal_1').showModal()}> Chat Us!</button>
            <dialog id="my_modal_1" className="modal rounded-sm h-auto xl:h550  top-10  bottom-auto w-96 bg-white text-black ms-auto border-0 border-cyan-200">

                <div id='displayScroll'>
                    <div className='h-5 bg-primary w-96 shadow-lg'> &nbsp;</div>
                    {/*................
                     Chat section start
                     ..................*/}
                    <Chat />
                    {/*.................
                     Chat section end 
                     ...................*/}
                </div>
                <div className='ms-auto my-auto w-96'>
                    <div className='m-5'>
                        <input type='text' className='input input-ghost input-xs input-bordered rounded-e-none md:w-56' placeholder='Type here' />
                        <button className='btn btn-xs btn-primary rounded-l-none'>send</button>
                    </div>
                </div>
                <div className="modal-action ms-auto mt-auto">
                    <form method="dialog">
                        {/*......................
                             if there is a button in form, it will close the modal 
                             .........................*/}
                        <button className="btn btn-sm btn-warning">Exit</button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default ChatWidget;