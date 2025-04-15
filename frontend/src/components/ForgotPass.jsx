import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPass () {
    const navigate = useNavigate();
    function returnToLogin () {
        navigate('/login');
    }

    return <div className="form-div1">
        <p>Brain of a goldfish</p>
        <button onClick={returnToLogin}>Retun to Login Page</button>
    </div>
}

export {ForgotPass}