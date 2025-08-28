import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utills/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utills/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}=useParams()
  const numericResId = resId.match(/\d+$/)?.[0];


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + numericResId);

      const json = await data.json();
      setResInfo(json.data);

      console.log(
        "Restaurant name:",
        json.data.cards[2]?.card?.card?.info?.name
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Restaurant basic info
  const { name, cuisines, cloudinaryImageId, avgRating, areaName, city } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // Menu items from the recommended section
  const itemCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  console.log("Menu items:", itemCards);

  return (
    <div className="menu">
      <div className="restaurant-info">
        <h1>{name}</h1>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          style={{ width: "200px", height: "150px", objectFit: "cover" }}
        />
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{areaName + ", " + city}</h4>
        <h4>⭐ {avgRating} stars</h4>
      </div>

      <div className="menu-section">
        <h2>Menu</h2>
        <h3>Recommended ({itemCards.length} items)</h3>

        <div className="menu-items">
          {itemCards.map((item) => {
            const {
              id,
              name: itemName,
              description,
              imageId,
              price,
            } = item?.card?.info || {};

            return (
              <div key={id} className="menu-item">
                <div className="item-info">
                  <h4>{itemName}</h4>
                  <p>₹{price ? price / 100 : "N/A"}</p>
                  <p className="description">{description}</p>
                </div>
                {imageId && (
                  <img
                    src={CDN_URL + imageId}
                    alt={itemName}
                    className="item-image"
                    style={{
                      width: "100px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
