import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'
export default function Starting() {
    const [active, setactive] = useState("intro")
    const activechanger=(value)=>{
        setactive(value);
    }
    return (
        <>
            <div className="navcontainer">
                <ul className="nav nav-tabs ">
                
                    <li className="nav-item">
                        <Link className={`nav-link ${active==="intro"?'active':''}` } onClick={()=>activechanger("intro")} id="one"  to="/">Portfolio📒</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${active==="proj"?'active':''}` } onClick={()=>activechanger("proj")} to="/proj">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${active==="blog"?'active':''}` } onClick={()=>activechanger("blog")}to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${active==="game"?'active':''}` } onClick={()=>activechanger("game")}to="/game">Game</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${active==="report"?'active':''}` } onClick={()=>activechanger("report")}to="/report">Report</Link>
                    </li>
                </ul>
            </div>

        </>
    )
}
