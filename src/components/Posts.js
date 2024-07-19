import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div>
      <br />
      <h4 style={{textAlign:"center"}}>My display With {theme}</h4>
      <br />
      <button
        className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`}
        onClick={handleOnClick}
      >
        {theme === "dark" ? "light" : "dark"}
        <img src="https://i.pinimg.com/originals/98/5c/f6/985cf6baec6f05e4f93876e473ac25a6.jpg" width="100%" height="100%" alt="Submit"></img>
      </button>
    </div>
  );
};

export default Posts;
