import React from "react";
import ReactDOM from "react-dom/client";

/*

Food ordering App

  *Header
   -Logo
   -Nav Items

   *Body
   -Search
   -Restaurant Container
      -Restaturant card

   *Footer

    -Copy right
    -Links
    -Address
    -Contact



*/

let list = [
  {
    info: {
      id: "392828",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_392828.JPG",
      locality: "Chikka Lakshmaiah Layout",
      areaName: "Adugodi",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "434792",
      avgRatingString: "4.3",
      totalRatingsString: "3.6K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "10576",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/23396165-65be-4f2c-a2f8-d55de0497073_10576.JPG",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "21K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "671928",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
      locality: "7th Block",
      areaName: "Koramangla",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "5.4K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "65075",
      name: "Homely",
      cloudinaryImageId: "xgwb49gf1wsle9zadntt",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis",
      ],
      avgRating: 4.4,
      parentId: "4043",
      avgRatingString: "4.4",
      totalRatingsString: "107K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "C",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "27811",
      name: "Natural Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/7bf7c05a-d0d1-4894-b06b-ffaf44fe4d3b_27811.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "2093",
      avgRatingString: "4.8",
      totalRatingsString: "19K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "102K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "374455",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/e355aa6b-bc56-4d39-ac2b-a657033916c2_374455.JPG",
      locality: "1st Stage",
      areaName: "BTM Layout",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.9,
      veg: true,
      parentId: "582",
      avgRatingString: "4.9",
      totalRatingsString: "6.3K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "750225",
      name: "Daily Kitchen - Everyday Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/8f5cea18-dacd-4392-a877-8444e6a0e8aa_750225.jpg",
      locality: "6TH BLOCK",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.4,
      parentId: "444382",
      avgRatingString: "4.4",
      totalRatingsString: "786",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "108097",
      name: "Ambur Star Briyani Since 1890",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
      avgRating: 4.5,
      parentId: "21400",
      avgRatingString: "4.5",
      totalRatingsString: "23K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "588791",
      name: "Goila Butter Chicken",
      cloudinaryImageId: "5e19832da032dd69547565e27104706f",
      locality: "CLUB ROAD",
      areaName: "Koramangala",
      costForTwo: "₹600 for two",
      cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
      avgRating: 4.1,
      parentId: "322587",
      avgRatingString: "4.1",
      totalRatingsString: "2.1K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "656392",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "4.3K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "23678",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/566bfcc0-c4f0-4d1b-816c-45405033b9fb_23678 - Copy (10).jpg",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "65K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "307",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/18/2908f87d-af1e-4c36-bd6f-64b077639c23_307.JPG",
      locality: "BTM Layout",
      areaName: "BTM Layout",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Sweets", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "22",
      avgRatingString: "4.5",
      totalRatingsString: "83K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "681439",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/02dd8027-a849-4cc5-9411-ea8e8cc767f9_681439.jpg",
      locality: "6TH BLOCK",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.6,
      parentId: "11216",
      avgRatingString: "4.6",
      totalRatingsString: "582",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "534235",
      name: "Cheesecake & Co.",
      cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery"],
      avgRating: 4.6,
      veg: true,
      parentId: "387417",
      avgRatingString: "4.6",
      totalRatingsString: "3.6K+",
      sla: {},
      availability: {
        nextCloseTime: "2025-08-27 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "10820",
      name: "California Burrito",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food",
      ],
      avgRating: 4.6,
      parentId: "1252",
      avgRatingString: "4.6",
      totalRatingsString: "44K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "11211",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/1cb896a9-746c-4051-938e-89b5b31ddc1e_11211.JPG",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.4,
      parentId: "1557",
      avgRatingString: "4.4",
      totalRatingsString: "26K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "65797",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
      parentId: "371281",
      avgRatingString: "4.5",
      totalRatingsString: "57K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "524936",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/72d575af-a19a-49f1-8545-7e3fe27b17e6_524936.JPG",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "7.9K+",
      sla: {},
      availability: {},
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {},
      aggregatedDiscountInfoV3: {},
      differentiatedUi: {},
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {},
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlUpdpkf-B7kZzgoplqW8pFcL5Ln8CGJf5A&s"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <div className="search">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resdata } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          cloudinaryImageId
        }
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

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard resdata={list[0]} />
        <RestaurantCard resdata={list[1]} />
        <RestaurantCard resdata={list[2]} />
        <RestaurantCard resdata={list[3]} />
        <RestaurantCard resdata={list[4]} />
        <RestaurantCard resdata={list[5]} />
        <RestaurantCard resdata={list[6]} />
        <RestaurantCard resdata={list[7]} />
        <RestaurantCard resdata={list[8]} />
        <RestaurantCard resdata={list[9]} />
        <RestaurantCard resdata={list[10]} />
        <RestaurantCard resdata={list[11]} />

      
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root")); //!alert
root.render(<AppLayout />);
