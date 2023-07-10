import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({ clickFunctionForModal }) => {
  const cartItems = <ul className={classes["cart-items"]}>Sushi</ul>;
  return (
    <Modal closeBackDrop={clickFunctionForModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => clickFunctionForModal()}
        >
          Close
        </button>
        <button className={classes.button}>Place your Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
