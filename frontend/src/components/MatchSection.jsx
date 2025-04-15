import React from "react";
import MatchCard from "./MatchCard";

function MatchSection () {
    return <div
    style={{
        padding: '13px',
        width: '90vw',
        margin: '0 auto',
        height: 'fit-content',
        borderRadius: '20px',
        lineHeight: '0.1'
    }}>
        <div
        style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
        }}>
            <h3>Matches</h3>
            <h4 style={{color: 'orange'}}>See all matches</h4>
        </div>

        <div
        style={{
            display: 'flex', flexDirection: 'row', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth'
        }}>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>    
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
        </div>

        <div style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '13px', gap: '13px'
        }}>
            <button style={{backgroundColor: 'red', color: 'black'}}>Challenge</button>
            <button>Propose a match</button>
            <button>Finalize a match</button>
        </div>
    </div>
}

export default MatchSection;