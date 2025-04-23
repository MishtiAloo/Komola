import React, { useState } from "react";

function CancelMatchModal ({onClose}) {

    const [msg, setMsg] = useState('Wanna delete the match frfr??');
    const [deleteClicked, setDeleteClicked] = useState(false);

    function handleDelete () {
        setDeleteClicked(true);
        setMsg('Match deleted');
        setTimeout(() => {onClose();}, 1000);
    }

    function handleCancel () {
        onClose();
    }

    return <div className="modal">
    <div className="modal-overlay"></div>
    <div className="modal-content">
        <h2>{msg}</h2>
        <div style={{display: "flex", justifyContent: 'flex-end', gap: '10px'}}>
            {!deleteClicked && <button style={{backgroundColor: 'red'}} onClick={handleDelete}>Yo</button>}
            {!deleteClicked && <button style={{backgroundColor: 'green'}} onClick={handleCancel}>No</button>}
        </div>
    </div>
</div>
}
        
export default CancelMatchModal;