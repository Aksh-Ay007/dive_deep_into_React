import { CDN_URL } from "../utills/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <div className="res-info">
        <span className="star">⭐ {avgRating}</span>
        <span className="price">{costForTwo}</span>
        <span className="delivery">30 mins</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
