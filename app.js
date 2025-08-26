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

const Header=()=>{

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
}

const RestaurantCard=()=>{
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vw4ze1uvsrdtba4dhknu"
      />
      <h3>Aaaramam Foods</h3>
      <h4>Idali, North Indian, Kerala</h4>
      <div className="res-info">
        <span className="star">⭐ 4.5</span>
        <span className="price">₹200 for two</span>
        <span className="delivery">30 mins</span>
      </div>
    </div>
  );
} 

const Body = () => {
  return (
    <div className="body">
    
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout=()=>{

  return(

    <div className="app">

    
<Header/>

<Body/>
    </div>
  )
}


let root = ReactDOM.createRoot(document.getElementById("root")); //!alert
root.render(<AppLayout />);
