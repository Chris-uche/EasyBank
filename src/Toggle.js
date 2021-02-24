import React, { useState } from "react";
import "../css/style.scss/";
const Toggle=()=>{


    return(
        
        <ul className={'header__menu hide-for-mobile'}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li> <a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
            

        </ul>

    )
}

export default Toggle