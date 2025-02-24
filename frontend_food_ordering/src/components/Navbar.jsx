import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex justify-between items-center py-5 px-4 md:px-8 bg-white shadow-md">
      <h1 className="text-xl font-bold">Navbar</h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "border-b-2 border-blue-500" : ""}>
          Home
        </Link>
        <button onClick={() => setMenu("menu")} className={menu === "menu" ? "border-b-2 border-blue-500" : ""}>
          Menu
        </button>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "border-b-2 border-blue-500" : ""}>
          Mobile App
        </a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "border-b-2 border-blue-500" : ""}>
          Contact Us
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
