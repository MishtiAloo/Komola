import React from "react";

function MatchCard ({opponent, matchImage, cup, date, time, venue}) {
    return <div 
        style={{
            backgroundColor: '#1A1A1A',
            width: '250px',
            maxHeight: '400px',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 auto',
            paddingBottom: '10px',
            padding: '5px',
            margin: '8px',
            scrollSnapAlign: 'start',
            color: 'white',
            boxShadow: 'rgba(255, 255, 255, 0.6) 0px 4px 5px'
        }}
    >
        <div style={{backgroundColor: '#3B3B3B', borderRadius: '13px', margin: '5px 5px 0px 5px'}}>
            <p style={{fontWeight: '700'}}>VS {opponent}</p>
        </div>

        <div style={{backgroundColor: 'orange', height: '180px', margin: '5px 5px 0px 5px', borderRadius: '13px', position: 'relative'}}>
            <div style={{backgroundColor: 'aqua', position: 'absolute', width: '70%', height: '100%', borderRadius: '13px', boxShadow: 'rgba(0, 0, 0, 0.19) 10px 0px 20px, rgba(0, 0, 0, 0.23) 6px 0px 6px'}}>
                <img src={matchImage} alt="" />
            </div>

            <div style={{backgroundColor: 'yellow', marginLeft: '70%', height: '100%', borderRadius: '13px', display: 'flex', justifyContent: 'center', alignItems: 'center', objectFit: 'contain'}}>
                <img src= {cup} alt="" />
            </div>
        </div>

        <div style={{backgroundColor: '#3B3B3B', borderRadius: '13px', margin: '5px 5px 5px 5px', lineHeight: '0.5', padding: '5px'}}>
            <p style={{fontWeight: '600'}}>Date: {date}</p>
            <p style={{fontWeight: '600'}}>Time: {time}</p>
            <p style={{fontWeight: '600', lineHeight: '1.0'}}>Venue: {venue}</p>

            <button style={{borderRadius: '30px', height: '30px', padding: '0 20px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', marginBottom: '5px'}}>Details</button>
        </div>
    </div>
}

export default MatchCard;