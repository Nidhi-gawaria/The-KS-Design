import React from "react";
import Mobileview from "../Navbarcomponets/Mobileview";
import { useState } from "react";
import Mobilebutton from "../Navbarcomponets/Mobilebutton";
import Mobiledrawer from "../Navbarcomponets/Mobiledrawer";
import Desktopview from "../Navbarcomponets/Desktopview";

const Navbar = () => { 
  const [isdraweropen, setisdraweropen] = useState(false);
  const handeldrawertoggle =() =>{
    setisdraweropen(!isdraweropen);
  }
  return (
    <>
    <div className="bg-black text-white h-28 sm:hidden sm:h-32">
    <Mobileview />
    <Mobilebutton onClick={handeldrawertoggle}/>
    <Mobiledrawer isOpen={isdraweropen} onClose={handeldrawertoggle}/>
    </div>
   <div className="bg-black text-white h-28 sm:flex items-center hidden">
    <Mobileview/>
    <Desktopview/>
   </div>
    </>
  );
};

export default Navbar;
