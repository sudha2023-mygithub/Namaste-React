import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

  const [btnNameReact, setBtnNameReact] = useState("login");

  const OnlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between m-2 bg-pink-100 shadow-lg">
      <div className="w-48">
        <img className="w-24" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            Online status:{OnlineStatus ? "Online" : "Offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to ="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to ="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="mr-4"
          onClick={()=>{
            btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login");
            ;
            }}>
            {btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
};

export default Header;