import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const restaurantData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];

function App() {
    return <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>;
}

function Header() {
    //const style = {color: "red", fontSize: '32px', textTransform: "uppercase" };
    const style = {};

    return (
        <header className="header">
            <h1 style={style}>
                Fast React Pizza Co.
            </h1>
        </header>
    )
}

function Menu() {
    const numFood = restaurantData.length;

    return (
        <main className='menu'>
            <h2>Our menu</h2>

            

            {numFood > 0 && (
                <React.Fragment>
                    <p>Information about the restaurtant information about the place, so the text is random.</p>
                    <ul className='pizzas'>
                        {restaurantData.map((item) => (
                            <Restaurant restaurantObject={item} key={item.name} />
                        ))}
                    </ul>
                </React.Fragment>
            )}

            {/* <Restaurant name='Pizza Spinaci' 
                ingredients='Tomato, mozarella, spinach and ricotta cheese' 
                photoName = 'pizzas/spinaci.jpg' price={10}
            />

            <Restaurant name='Pizza Funghi' 
                ingredients='Tomato, mushrooms' 
                photoName = 'pizzas/funghi.jpg' price={12}
            /> */}

        </main>
    )
}

function Restaurant({ restaurantObject }) {

    // if(restaurantObject.soldOut) {
    //     return null;
    // }

    return (
        <div className={`pizza ${restaurantObject.soldOut ? "sold-out" : ""}`}>
            <img src={restaurantObject.photoName} alt={restaurantObject.name} />
            <li>
                <h3>{restaurantObject.name}</h3>
                <p>{restaurantObject.ingredients}</p>

                {restaurantObject.soldOut ? (
                    <span>"Sold out"</span> 
                )   :   (
                    <span>{restaurantObject.price}</span>
                )}
            </li>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if (isOpen) {
    //     alert("We're currently open!");
    // } else {
    //     alert("Sorry we're closed");
    // }

    return ( 
        <footer className='footer'>
            {isOpen 
                ? <Order closeHour={closeHour} openHour={openHour} /> 
                : (
                    <p>
                        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                    </p>
            )}
        </footer>
    );
}

function Order({ closeHour, openHour }) {
    return (<div className="order">
        <p>
            We're open until {closeHour}:00. Come visit us or order online.
        </p>
        <button className='btn'>Order</button>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
        <App />
    </React.StrictMode>
);