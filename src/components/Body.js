import RestuarantCard from "./RestuarantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
  // Local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resObj);

  // const listOfRestaurants = [{
  //   name:"Dominos",
     
  // }];

  return(
    <div className="body" >
      <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
          const filteredList = listOfRestaurants.filter(
            (res) => res.card.card.info.avgRating > 4.5
          );
          setListOfRestaurant(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map((restaurant)=>(
            <RestuarantCard key={restaurant.card.card.info.id} resData = {restaurant}/>
          )
        )}
      </div>
    </div>
  );
};

export default Body;