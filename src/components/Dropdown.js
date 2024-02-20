import React, { useState } from "react"
import '../styles/Dropdown.css'
import arrow_back from '../assets/arrow_back.png'

function Dropdown({ title, children }) {
    let [open, setOpen] = useState(true);

    return (
        <div className={open === true ? "dropdown dropdown--open" : "dropdown"}>
            <p className="dropdown-title" onClick={() => setOpen(!open)} role="button"><span>{title}</span>
                <img src={arrow_back} alt="" className="dropdown-image" /></p>
            <p className="dropdown-content">{children}</p>
        </div>
    )
}


export default Dropdown;