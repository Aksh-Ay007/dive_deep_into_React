import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import list from "../utills/mockData";

const Body = () => {
  const [resList, setResList] = useState(list);

  return (
    <div className="body">
      {/* Filter Section */}
      <div className="filter">
        <button
          onClick={() => {
            let filterRestaurant = list.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResList(filterRestaurant);
            console.log(filterRestaurant);
          }}
          className="filter-btn"
          type="button"
        >
          ⭐ Top Rated
        </button>
      </div>

      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.info.id || index}
            resdata={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
