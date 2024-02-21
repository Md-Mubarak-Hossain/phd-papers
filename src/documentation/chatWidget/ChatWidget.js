import React from 'react';
import Chat from './Chat';
const ChatWidget = () => {
    return (
        <>
            {/* ......................
            Open the modal using document.getElementById('ID').showModal() method 
            ...........................*/}
            <button className="btn btn-primary shadow-lg p-2 w-24" onClick={() => document.getElementById('my_modal_1').showModal()}>Chat Us!</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-slate-50 text-black">
                    {/*................
                     Chat section start
                     ..................*/}
                    <Chat />
                    {/*.................
                     Chat section end 
                     ...................*/}
                    <div className="modal-action">
                        <form method="dialog">
                            {/*......................
                             if there is a button in form, it will close the modal 
                             .........................*/}
                            <button className="btn">Exit</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ChatWidget;