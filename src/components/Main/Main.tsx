import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Main.css";
import Header from "../Header/Header";

export default function Main() {
  const context = useContext(UserContext);
  const contextThem = useContext(ThemeContext);
  const [showDetails, setShowDetails] = useState(false);

  if (!context) return null;
  if (!contextThem) return null;
  const { mode } = contextThem;

  const sd = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className={mode}>
      <Header></Header>
      <button onClick={sd}>More</button>

      {showDetails && (
        <div>
          <p>Email: {context.email}</p>
          <p>Street: {context.address.street}</p>
          <p>Suite: {context.address.suite}</p>
          <p>City: {context.address.city}</p>
          <p>Zipcode: {context.address.zipcode}</p>
          <p>Geo Lat: {context.address.geo.lat}</p>
          <p>Geo Lng: {context.address.geo.lng}</p>
        </div>
      )}
    </div>
  );
}
