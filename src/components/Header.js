import { LOGO_URL } from "../utills/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="nav-items">
        {/* Search Section */}
        <div className="search">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        {/* Navigation Menu */}
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

export default Header;
