import React, { useState } from "react";

import './basicStyle.css';

function MatchDetails ({matchItem}) {
    const [done, setdone] = useState(true);
    const [score, setScore] = useState('4-2');

    return <div className="basic-container">
        <div style={{backgroundColor: 'aqua', height: 'fit-content'}}>
            <p>KBU {done? score : "VS"} Shit</p>
            {done && <p style={{marginTop: '-19px'}}>Tie Breaker</p>}
        </div>

        <div style={{backgroundColor: 'yellow', height: 'fit-content', display: "flex", flexDirection: 'row', padding: '20px'}}>
            <div style={{backgroundColor: 'red', flex: '1'}}>
                <img src="https://images.unsplash.com/photo-1585245793787-ba3b6539f98d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRydW1wfGVufDB8fDB8fHww" alt="" style={{width: '400px', height: '400px'}} />
            </div>
            <div style={{backgroundColor: 'green', flex: '1'}}>
                <p>Cup: </p>
                <p>Date: </p>
                <p>Time: </p>
                <p>Venue: </p>
            </div>
        </div>

        <div style={{backgroundColor: 'blue'}}>
            Participants
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '1'}}>
                    KBU
                    <p>swap</p>
                    <p>maru</p>
                    <p>hodoi</p>
                </div>
                <div style={{flex: '1'}}>
                    Shit
                    <p>jawad</p>
                    <p>shejan</p>
                    <p>murgi</p>
                </div>
            </div>
        </div>

        <div style={{backgroundColor: 'violet'}}>
            Match Result
            
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '1'}}>
                    KBU scorers
                    <p>swap</p>
                    <p>maru</p>
                    <p>hodoi</p>
                </div>
                <div style={{flex: '1'}}>
                    Shit scorers
                    <p>jawad</p>
                    <p>shejan</p>
                    <p>murgi</p>
                </div>
            </div>

            <p>MOTM: Goru</p>
        </div>
    </div>
}

export default MatchDetails;