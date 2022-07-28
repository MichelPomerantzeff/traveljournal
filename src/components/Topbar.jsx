import React from 'react';
import { Link } from "react-router-dom"

function Topbar(props) {
    return (
        <div className='topbar'>
            <Link className="topbarLinks" to="/traveljournal">
                Add Trip
            </Link>

            <Link className="topbarLinks" to="/traveljournal/journal">
                Journal
            </Link>
        </div>
    );
}

export default Topbar;