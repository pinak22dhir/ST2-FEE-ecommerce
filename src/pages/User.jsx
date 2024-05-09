import React, { useEffect, useState } from "react";
import "./User.css";
import Products from "./Products";

function User() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setArr(data);
      })
      .catch((err) => {
        console.log("network error");
      });
  }, []);

  function deleteItem(idx) {
    let updatedArr = [...arr];
    updatedArr.splice(idx, 1);
    setArr(updatedArr);
  }

  return (
    <div className="user-container">
      <header>
        <h1 className="user-heading">Welcome to Our Store</h1>
      </header>
      <Products arr={arr} deleteItem={deleteItem} />
      <footer>
        <p className="footer-text">© 2024 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default User;