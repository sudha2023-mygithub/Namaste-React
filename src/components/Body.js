import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body=()=>{
  // Local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80471&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    const restaurants = json?.data?.cards
    ?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )
    ?.map((card) => card.card.card);

    setListOfRestaurant(restaurants || []);
    setFilteredRestaurant(restaurants || []);
  };

  // Conditional Rendering
  if(listOfRestaurants.length === 0) {
    return <Shimmer/>
  }

  return(
    <div className="body" >
      <div className="filter">

        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="searchBtn" onClick={()=>{
            const filteredReataurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredReataurant);
          }}>search</button>
        </div>

        <button className="filter-btn" 
        onClick={()=>{
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setListOfRestaurant(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          filteredRestaurant.map((restaurant)=>(
            <RestuarantCard key={restaurant.info.id} resData = {restaurant.info}/>
          )
        )}
      </div>
    </div>
  );
};

export default Body;