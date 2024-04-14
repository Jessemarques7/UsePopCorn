import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./assets/components/StarRating";
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color={"red"} size={24} defaultRating={1} />
  </React.StrictMode>
);
