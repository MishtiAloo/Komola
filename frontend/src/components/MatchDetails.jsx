import React, { useState, useEffect } from "react";

import './basicStyle.css';
import CancelMatchModal from "./modals/matchModals/cancelMatchModal";
import MarkDoneMatchModal from "./modals/matchModals/MarkDoneMatchModal";
import { useLocation } from "react-router-dom";

function MatchDetails () {
    const location = useLocation();
    const match = location.state?.passedMatchItem;

    const [cancelModalActive, setCancelModalActive] = useState(false);
    const [markDoneModalActive, setMarkDoneModalActive] = useState(false);

    const [currentParticipants, setCurrentParticipants] = useState(match.participants);
    const [participantsData, setParticipantsData] = useState([]);
    const [goals, setGoals] = useState (match.matchResult.resGoals)
    const [scorers, setScorers] = useState ([]);
    const [assists, setAssists] = useState ([]);

    
    

    function handleCancel () { setCancelModalActive(true) }
    function handleUpdate () {}
    function handleIn () {}
    function handleOut () {}
    function handleMarkAsDone () {setMarkDoneModalActive(true)}

    function closeCancelModal () { setCancelModalActive(false) }
    function closeMarkDoneModal () { setMarkDoneModalActive(false) }

    async function generateParticipants() {
        try {
          const fetched = await Promise.all(
            currentParticipants.map(async (id) => {
              const res = await fetch(`http://localhost:5000/api/users/${id}`);
              const data = await res.json();
              return data.data;
            })
          );
          setParticipantsData(fetched);
        } catch (err) {
          console.error("Error fetching participants:", err);
        }
    }

    async function generateGoals() {
        const scorers = [];
        const assists = [];
    
        for (let i in goals) {
            scorers[i] = goals[i].scorer;
            assists[i] = goals[i].assist;
        }
    
        try {
            const fetchedScorers = await Promise.all(
              scorers.map(async (id) => {
                const res = await fetch(`http://localhost:5000/api/users/${id}`);
                const data = await res.json();
                return data.data;
              })
            );
            setScorers(fetchedScorers);

            const fetchedAssists = await Promise.all(
                assists.map(async (id) => {
                  const res = await fetch(`http://localhost:5000/api/users/${id}`);
                  const data = await res.json();
                  return data.data;
                })
              );
              setAssists(fetchedAssists);
          } catch (err) {
            console.error("Error fetching participants:", err);
          }
    }

    useEffect(() => {
        generateParticipants();
        generateGoals();
    }, []);
      

    return <div className="basic-container">
        <div className="label-container" style={{height: 'fit-content'}}>
            <p>KBU {match.done? match.matchResult.resScore.kbu + '-' + match.matchResult.resScore.opponent : "VS"} {match.vs}</p>
            {match.tieBreaker && <p style={{marginTop: '-19px', fontSize: '15px', color: 'orange'}}>Tie Breaker</p>}
        </div>

        <div style={{height: 'fit-content', display: "flex", flexDirection: 'row', padding: '20px'}}>

            <div style={{flex: '1', paddingLeft: '10px'}}>
                <div className="image-container">
                    <img src= {match.coverImg} alt="fff" />
                </div>
            </div>

            <div style={{flex: '1', fontSize: '25px', fontWeight: '600', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '30px', justifyContent: 'center', lineHeight: '0.5',borderLeft: "6px solid orange"}}>
                <p>Cup: {match.cup}</p>
                <p>Date: {match.date}</p>
                <p>Time: {match.time}</p>
                <p>Venue: {match.venue}</p>
            </div>
        </div>

        <br /><br /><br />
        
        <div>
            <div className="label-container">
                <p>Participants</p>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                <div style={{flex: '1'}}>
                    <div className="label-container" style={{color: 'orange'}}>KBU</div>
                    {participantsData.map((user) => (
                        <p key={user._id} style={{ fontSize: '20px', fontWeight: '600' }}>{user.userName}</p>
                    ))}
                </div>
                <div style={{flex: '1'}}>
                    <div className="label-container" style={{color: 'orange'}}>Shit</div>
                    <p style={{fontSize: '20px', fontWeight: '600'}}>jawad</p>
                    <p style={{fontSize: '20px', fontWeight: '600'}}>shejan</p>
                    <p style={{fontSize: '20px', fontWeight: '600'}}>murgi</p>
                </div>
            </div>
        </div>

        <br /><br /><br />

        <div>
            <div className="label-container">
                Match Result
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                <div style={{flex: '1'}}>
                    <div className="label-container" style={{color: 'orange'}}>Scorers</div>
                    {scorers.map((user) => (
                        <p key={user._id} style={{ fontSize: '20px', fontWeight: '600' }}>{user.userName}</p>
                    ))}
                </div>
                <div style={{flex: '1'}}>
                    <div className="label-container" style={{color: 'orange'}}>Assists</div>
                    {assists.map((user) => (
                        <p key={user._id} style={{ fontSize: '20px', fontWeight: '600' }}>{user.userName}</p>
                    ))}
                </div>
            </div>
        </div>

        <br /><br /><br />
        
        <div className="label-container">MOTM: Jawad</div>

        <br /><br /><br />

        <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
            <button onClick={handleUpdate}>Update info</button>
            <button style={{backgroundColor: 'green'}} onClick={handleIn}>In</button>
            <button style={{backgroundColor: 'red'}} onClick={handleOut}>Out</button>
            <button style={{backgroundColor: 'red'}} onClick={handleCancel}>Cancel Match</button>
            <button style={{backgroundColor: 'green'}} onClick={handleMarkAsDone}>Mark as done</button>
        </div>

        <br /><br /><br />

        {cancelModalActive && <CancelMatchModal onClose={closeCancelModal}/>}
        {markDoneModalActive && <MarkDoneMatchModal onClose={closeMarkDoneModal}/>}

    </div>
}

export default MatchDetails;