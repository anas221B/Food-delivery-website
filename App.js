import React from "react";
import ReactDOM from "react-dom/client";
import "./Index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-Img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlz25QIlCMRKVQialJlbT93VwxoopTDqlXQ&s"
          alt="Logo"
        />
      </div>
      <div className="nav-Items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=900&auto=format&fit=crop&q=60"
      />
      <h3>{resData.resName}</h3>
      <p>{resData.cuisine}</p>
      <h4>{resData.rating} Stars</h4>
      <h4>{resData.deliveryTime} mins</h4>
    </div>
  );
};

// --- Mock Data ---

const resList = [
  {
    id: 1,
    resName: "Meghana Foods",
    cuisine: "Biryani, North Indian",
    rating: 4.4,
    deliveryTime: 30,
  },
  {
    id: 2,
    resName: "KFC",
    cuisine: "Burgers, Fried Chicken",
    rating: 4.1,
    deliveryTime: 25,
  },
  {
    id: 3,
    resName: "Vellore Kitchen",
    cuisine: "South Indian, Meals",
    rating: 4.5,
    deliveryTime: 35,
  },
  {
    id: 4,
    resName: "Pizza Hut",
    cuisine: "Pizzas, Italian",
    rating: 4.0,
    deliveryTime: 40,
  },
  {
    id: 5,
    resName: "Empire Restaurant",
    cuisine: "North Indian, Kebabs",
    rating: 4.2,
    deliveryTime: 28,
  },
  {
    id: 6,
    resName: "Corner House",
    cuisine: "Ice Cream, Desserts",
    rating: 4.8,
    deliveryTime: 15,
  },
  {
    id: 7,
    resName: "Burger King",
    cuisine: "Burgers, American",
    rating: 4.2,
    deliveryTime: 22,
  },
  {
    id: 8,
    resName: "Leon Grill",
    cuisine: "Burgers, Peri Peri Chicken",
    rating: 4.3,
    deliveryTime: 30,
  },
  {
    id: 9,
    resName: "A2B",
    cuisine: "South Indian, Sweets",
    rating: 4.6,
    deliveryTime: 20,
  },
  {
    id: 10,
    resName: "Starbucks",
    cuisine: "Beverages, Coffee",
    rating: 4.7,
    deliveryTime: 18,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
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

// --- Rendering ---

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
