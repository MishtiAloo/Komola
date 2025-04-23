import React, { useEffect, useState } from "react";
import MatchCard from "./MatchCard";
import { Link } from "react-router-dom";

import './basicStyle.css'

function MatchSection () {

    const [incompleteMatches, setIncompleteMatches] = useState([]);
    
    useEffect(() => {
        const fetchMatches = async () => {
          try {
            const res = await fetch("http://localhost:5000/api/matches", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            const data = await res.json();
      
            if (res.ok && data.success) {
                const newItems = data.data.filter(match => match.done === false);
                setIncompleteMatches (newItems);  
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
      
        fetchMatches();
      }, []);      

    const generateMatchCards = () => {
        return incompleteMatches.map((matchItem) => (
            <MatchCard key={matchItem._id} CardMatchItem={matchItem} />
        ));
    };
      

    return <div style={{
        padding: '13px',
        width: '90vw',
        margin: '0 auto',
        height: 'fit-content',
        borderRadius: '20px',
        lineHeight: '0.1'
    }}>
        <div style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
        }}>
            <h3>Matches</h3>
            <Link className="navigate-link" to = '/'>See prev matches?</Link>
        </div>

        <div style={{
            display: 'flex', flexDirection: 'row', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth'
        }}>
            {incompleteMatches.length? generateMatchCards() : <p style={{margin: '0 auto', height: '90px', lineHeight: '1.5'}}>No scheduled matches</p>}
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