import React, { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = () => {
  return (
    <Fragment>
    <button className={classes.button}>
      <span>Your Cart</span>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span className={classes.badge}>
        2
      </span>
    </button>
    </Fragment>
  )
}

export default HeaderCartButton;
