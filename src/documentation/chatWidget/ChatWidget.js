import React from 'react';
import Chat from './Chat';
const ChatWidget = () => {
    return (
        <>
            {/* ......................
            Open the modal using document.getElementById('ID').showModal() method 
            ...........................*/}
            <button className="btn btn-primary shadow-lg p-2 w-28" onClick={() => document.getElementById('my_modal_1').showModal()}>Live Chat Us!</button>
            <dialog id="my_modal_1" className="modal rounded-none  min-h-screen  bottom-auto w-96 bg-white text-black border-4 border-red-400 ms-auto">
                
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