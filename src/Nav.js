import React,{useState} from "react"
import logo from "../images/logo.svg/"


const NavBar = ()=>{
    const [status, setStatus] = useState('close')
    //const [scrol, setScroll] = useState('noscroll')

    return(
        <nav className="container flex flex-jc-sb flex-ai-c">
            <a href="" className="header__logo">
        
                <img src={logo} alt="header-Img"/>
            </a>

            < div className="header__toggle hide-for-desktop " 
            role="button" 
            onClick={()=>setStatus(status === "open" ? "close": "open")}>
                <span className={status}></span>
                <span className={status}></span>
                <span className={status}></span>
            </div>
            <div className="header__links hide-for-mobile">
                <a href="">Home</a><a href="">About</a><a href="">Contact</a><a href="">Blog</a><a href="">Career</a>
                
            </div>
            <a href="" className="button header__cta hide-for-mobile" type="button" >Request Invite</a>
                    
        </nav>
        
    )
}

export default NavBar