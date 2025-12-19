import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -Nav Items
 * 
 * Body
 *  -Search
 *  -RestaurantConatiner
 *    -Restaurant Card
 *      -Img
 *      -Name of Res, Star Rating, Cuisine, delivery time
 * 
 * Footer
 *  -Copyright
 *  -Liks
 *  -Address
 *  -Contact
 * 
 * 
 * 
 */

const Header=()=>{
  return (
    <div className="header">
      <div>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgzqh3tDPjBuOY_esVKm6lbu9VKMvmBoiFQ&s"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const Body=()=>{
  return(
    <div className="body" >
      <div className="search">Search</div>
      <div className="res-container">
        <RestuarantCard
         resName="Meghana Foods" 
         cuisine="Biryani, South Indian, Asian"
        />
        <RestuarantCard
         resName="KFC" 
         cuisine="Burger, Sandwich"
        />
        <RestuarantCard/>
        <RestuarantCard/>
        <RestuarantCard/>
        <RestuarantCard/>
        <RestuarantCard/>
        <RestuarantCard/>
        <RestuarantCard/>
      </div>
    </div>
  );
};

const RestuarantCard=(props)=>{
  const {resName,cuisine} = props;
  return(
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/10/28/5b044717-c90d-4b66-b98d-0481959658c1_725a20ff-024b-4030-88d0-19944a6ac97d.jpg"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
};

const AppLayout=()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);