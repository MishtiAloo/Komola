import React, { useState } from "react";

function MarkDoneMatchModal ({onClose}) {

    const [updateClicked, setUpdateClicked] = useState(false);
    const [msg, setMsg] = useState('Update match info');

    function handleUpdate () {
        setUpdateClicked(true);
        setMsg('Match Updated');
        setTimeout(() => {onClose();}, 1000);
    }

    function handleCancel () {
        onClose();
    }

    return <div className="modal">
    <div className="modal-overlay"></div>
    <div className="modal-content">
        <h2>{msg}</h2>

        {!updateClicked && (
            <>
            <input type="number" style={{height: '20px', width: '110px'}} placeholder="KBU Score"/>
            <input type="number" style={{height: '20px', width: '110px'}} placeholder="Opponent Score"/>
    
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                <input type="checkbox" name="" id=""/> Tie Breaker?
            </div>
    
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancel}>Cancel</button>    
            </div>
            </>
        )}
    </div>
</div>
}
        
export default MarkDoneMatchModal;