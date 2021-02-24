import React from "react";
import "../css/style.scss/";
import NavBar from "./Nav";
import Toggle from "./Toggle";


const Header=()=>{
    
    return(
        <div className="header">
            <div className="overlay"></div>
            <NavBar/>
            <Toggle/>
    
        </div>
    )


}


export default Header