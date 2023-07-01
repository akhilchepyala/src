import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Quick Meals To Order</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A Table full of delicious Food"></img>
      </div>
      <MealsSummary />
    </Fragment>
  );
};

export default Header;