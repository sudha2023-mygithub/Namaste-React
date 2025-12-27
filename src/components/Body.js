import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
  // Local state variable - Super powerful variable

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log(listOfRestaurants);

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


  const OnlineStatus = useOnlineStatus();
  if(OnlineStatus === false){
    return(
      <h1>
        Looks like you are Offline!! Please check your internet connection
      </h1>
    );
  };

  // Conditional Rendering
  if(listOfRestaurants.length === 0) {
    return <Shimmer/>
  }

  

  return(
    <div className="body" >
      <div className="flex">

        <div className="m-2 p-2">
          <input type="text" className="border border-solid border-black rounded-sm" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4  rounded-lg" onClick={()=>{
            const filteredReataurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredReataurant);
          }}>search</button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" 
          onClick={()=>{
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>

      </div>

      <div className="flex flex-wrap">
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