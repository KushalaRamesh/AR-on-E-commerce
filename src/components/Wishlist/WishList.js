import React, { useState } from "react";
import "./WishList.css";
import { Link } from 'react-router-dom';
import CombinedARView from './CombinedARView';

const WishList = ({ wishlist, onRemoveItem }) => {
  const [showARView, setShowARView] = useState(false);
  const isEmpty = wishlist.length === 0;

  const EmptyCart = () => {
    return (
      <>
        <div className="alert">
          You have no items in your WishList, start adding some!
        </div>
        <Link to="/" className="button go-back">
          Go Back
        </Link>
      </>
    );
  };

  const handleRemoveItem = (id) => {
    onRemoveItem(id);
  };

  const toggleARView = () => {
    setShowARView(!showARView);
  };

  const FilledWishList = () => {
    return (
      <>
        <div className="wishlist-header">
          <h5 className="cart-heading">Added Items</h5>
          {wishlist.length > 0 && (
            <button onClick={toggleARView} className="visualize-btn">
              {showARView ? 'Hide AR View' : 'Visualize in AR'}
            </button>
          )}
        </div>
        <hr className="divider" />
        {showARView && <CombinedARView wishlistItems={wishlist} />}
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <div className="wishlist-details">
                <div className="wishlist-name">{item.name}</div>
                <div className="wishlist-category">Category: {item.category}</div>
                <div className="wishlist-color">Color: {item.color}</div>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">
                Remove
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <h3 className="cart-title">Your WishList</h3>
      <div className="cart-grid">
        <div className="cart-items-container">
          <div className="cart-paper">
            {isEmpty ? <EmptyCart /> : <FilledWishList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;