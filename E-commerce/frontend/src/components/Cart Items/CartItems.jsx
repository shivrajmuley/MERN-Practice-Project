import React, { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeToCart } =
    useContext(ShopContext);
  return (
    <section className="cartItemsContainer">
      <table>
        <thead>
          <tr className="cartItemTitles">
            <th className="product">Products</th>
            <th className="title">Title</th>
            <th className="price">Price</th>
            <th className="qty">Quantity</th>
            <th className="total"> Total</th>
            <th className="remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr className="cartItemsDetails" key={e.id}>
                  <td className="product">
                    <img src={e.image} />
                  </td>
                  <td className="title">
                    <span>{e.name}</span>
                  </td>
                  <td className="price">
                    <span>${e.new_price}</span>
                  </td>
                  <td className="qty">
                    <span>{cartItems[e.id]}</span>
                  </td>
                  <td className="total">
                    <span>${e.new_price * cartItems[e.id]}</span>
                  </td>
                  <td className="remove">
                    <i class="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="cartSummaryContainer">
        <h4>Summary</h4>
        <div className="summaryTable">
          <p>Subtotal:</p>
          <span>${getTotalCartAmount()}</span>
        </div>
        <div className="summaryTable">
          <p>Shipping Fee:</p>
          <span>Free</span>
        </div>
        <b>
          <div className="summaryTable">
            <p>Total:</p>
            <span>${getTotalCartAmount()}</span>
          </div>
        </b>
        <button className="checkout">Checkout</button>
        <p>
          <b>Your Coupon Code Enter Here:</b>
        </p>
        <input type="text" placeholder="Coupon code" />
        <button className="cartSubmit">Submit</button>
      </div>
    </section>
  );
};

export default CartItems;
