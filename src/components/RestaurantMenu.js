import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

  const [resInfo, setResInfo] = useState(null);

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
  try {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80471&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=ENTER");

    if (!data.ok) {
      throw new Error(`HTTP error ${data.status}`);
    }

    const json = await data.json();
    console.log(json);

    setResInfo(json);

    } catch (err) {
      console.error("Menu fetch failed:", err);
    }
  };
  

  if(resInfo === null) return <Shimmer />;

  const info = resInfo?.data?.cards[2]?.card?.card?.info || {};

  return(
    <div className="menu">
      <h1>{info?.name}</h1>
      <h2>{info?.costForTwo}</h2>
      <h3>{info?.cuisines?.join(",")}</h3>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;