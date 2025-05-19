import { CDN_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, rating } = resdata.info;
  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId}></img>
      <div>{name}</div>
      <div>{cuisines.join(" , ")}</div>
      <div>{avgRating}</div>
      <div>{rating}</div>

    </div>
  )
}

export default RestaurentCard;