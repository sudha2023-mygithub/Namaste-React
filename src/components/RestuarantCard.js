import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const RestuarantCard=(props)=>{
  const {resData} = props;
  const {name,cuisines,avgRating,sla:{slaString}} = resData.card.card.info;
  return(
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={CDN_URL+resData.card.card.info.cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{(cuisines).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  )
};

export default RestuarantCard;