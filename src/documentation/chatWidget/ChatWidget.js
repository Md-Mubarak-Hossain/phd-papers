import React from 'react';
import Chat from './Chat';
const ChatWidget = () => {
    return (
        <>
            {/* ......................
            Open the modal using document.getElementById('ID').showModal() method 
            ...........................*/}
            <button className="btn btn-primary shadow-lg p-2 w-28" onClick={() => document.getElementById('my_modal_1').showModal()}>Live Chat Us!</button>
            <dialog id="my_modal_1" className="modal rounded-sm h-auto top-16  bottom-auto w-96 bg-white text-black ms-auto">

                <div>
                    <div className='h-5 bg-primary w-96'> &nbsp;</div>
                    {/*................
                     Chat section start
                     ..................*/}
                    <Chat />
                    {/*.................
                     Chat section end 
                     ...................*/}
                </div>
                <div className='my-auto w-full '>
                    <div className='ms-5'>
                        <input type='text' className='input input-ghost input-xs input-bordered rounded-e-none w-56' />
                        <button className='btn btn-xs btn-primary rounded-l-none'>send</button>
                    </div>
                </div>
                <div className="modal-action ms-auto mt-auto">
                    <form method="dialog">
                        {/*......................
                             if there is a button in form, it will close the modal 
                             .........................*/}
                        <button className="btn btn-sm btn-primary">Close chats</button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default ChatWidget;