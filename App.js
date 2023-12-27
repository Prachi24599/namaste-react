import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search 
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Img
 *          - Name of Res, Star Rating, Cuisine, Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="restaurant-card" style={{backgroundColor : "#f0f0f0"}}>
            <img className="restaurant-logo" alt="restaurant-logo" src="https://b.zmtcdn.com/data/pictures/3/20729743/bae5332c13de2e1df091fee03556efe4_o2_featured_v2.jpg?output-format=webp"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text"/>
                <button>Search</button>
            </div>
            <div className="restaurant-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
