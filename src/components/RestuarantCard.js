import { CDN_URL } from "../utils/constants";
const RestuarantCard=(props)=>{
  const {resData} = props;
  const {name,cuisines,avgRating,sla:{slaString}} = resData;
  return(
    <div className="m-4 p-4 w-[220px] bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
      <img alt="res-logo" className="h-52 w-full rounded-lg mb-1" src={CDN_URL+resData.cloudinaryImageId}/>
      <h3 className="font-bold py-2 text-lg" >{name}</h3>
      <h4>{(cuisines).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  )
};

export default RestuarantCard;