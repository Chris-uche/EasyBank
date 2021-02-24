import React from "react";
import {render} from "react-dom";
import Header from "./Header"
import Hero from "./Hero";


const App = ()=>{
   
   return(
      <div>
         <Header/>
         <Hero/>

      </div>

   )
}

render(<App/>, document.getElementById("root"))

