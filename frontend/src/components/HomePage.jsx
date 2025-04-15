import React from "react";
import { Link, useLocation } from "react-router-dom";

function HomePage () {
    const location = useLocation();
    const {data} = location.state;

    return <div>
        <h1>hello {data}</h1>
        <button><Link to = '/login'>Go to Login</Link></button>
    </div>  
}

export {HomePage}