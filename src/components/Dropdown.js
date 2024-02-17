import React, { useState } from "react"
import '../styles/Dropdown.css'
import arrow_back from '../assets/arrow_back.png'

function Dropdown({ title, children }) {
    let [dropdownClass, setDropdownClass] = useState("dropdown dropdown--open")
    let [open, setOpen] = useState(true);

    function toggle() {
        setDropdownClass(!open ? "dropdown dropdown--open" : "dropdown")
        setOpen(!open)
    }

    return (
        <div className={dropdownClass}>
            <p className="dropdown-title" onClick={toggle} role="button"><span>{title}</span>
                <img src={arrow_back} alt="" className="dropdown-image" /></p>
            <p className="dropdown-content">{children}</p>
        </div>
    )
}


export default Dropdown;