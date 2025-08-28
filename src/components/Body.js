import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import list from "../utills/mockData";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFlterResList] = useState([]);

  let {name,locality,areaName}=filterResList.filter((item)=>{
    console.log(item,'ttefds');
  })


  console.log(resList,'final');


  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("...fetching data");

        let data = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
        );

        const json = await data.json();
        console.log("Fetch successful");
        console.log(json);
        const restaurants =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || list;

        setResList(restaurants);
        setFlterResList(restaurants);
      } catch (error) {
        setResList(list);
        setFlterResList(list);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log("body rendered..! ");

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Filter Section */}
      <div className="filter">
        {/* Search Section */}
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //search the restaurent list and update the UI
              console.log(searchText);

              const filterRest = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFlterResList(filterRest);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            let filterRestaurant = resList.filter(
              (res) => res.info?.avgRating > 4.5
            );
            setFlterResList(filterRestaurant);
            console.log(filterRestaurant);
          }}
          className="filter-btn"
          type="button"
        >
          ⭐ Top Rated
        </button>
      </div>

      <div className="res-container">
        {filterResList.map((restaurant, index) => {
        const   { name, locality, areaName, id } = restaurant.info;
            const slug =
              [name, locality, areaName]
                .filter(Boolean) // remove undefined/null
                .map((str) =>
                  str
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")
                ) // slugify
                .join("-") + `-rest${id}`;
return (
  <Link to={`/restaurantMenu/${slug}`} key={id || index}>
    <RestaurantCard resdata={restaurant} />
  </Link>
);
})}
      </div>
    </div>
  );
};

export default Body;
