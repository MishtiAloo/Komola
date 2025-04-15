import React from "react";
import "./Nav.css";

function Nav () {
    return <>
        <div id="nav-bar">
            <div className="navlings" style={{flex: '0.5'}}>
                <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" style={{width: '100px'}}></img>
            </div>


            <div className="navlings" style={{flex: '2', display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center', gap: '5vw'}}>
                <p className="clickable-links">Home</p>
                <p className="clickable-links">About</p>
                <p className="clickable-links">Players</p>
                <p className="clickable-links">Support Us</p>
                <p className="clickable-links">Contact</p>
            </div>


            <div className="navlings" style={{flex: '0.7', display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center', gap: '1vw'}}>
                
                <div style={{backgroundColor: 'yellow', border: '2px solid orange', borderRadius: '50%', width: '30px', height: '30px', margin: '7px', color: 'black'}}>
                    v
                </div>

                <div style={{border: '2px solid orange', borderRadius: '50%', width: '50px', height: '50px', margin: '7px', padding: '5px'}}>
                    <img src="https://pbs.twimg.com/media/CgSEtcXUkAAV54p.jpg:large" style={{objectFit: 'contain', width: '100%', height: '100%'}}></img>
                </div>
            </div>
        </div>
    </>
}

export default Nav;