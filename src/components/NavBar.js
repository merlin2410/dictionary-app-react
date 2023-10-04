import React from "react";
import {Link} from "react-router-dom"

const NavBar = ()=>{


    return(
        <div className="NavBar">
            <h3>Dictionary App</h3>
            <div className="right-nav">
                <Link to="/">Home</Link>
                <Link to="/history">History</Link>
            </div>
        </div>
    )
}

export default NavBar;