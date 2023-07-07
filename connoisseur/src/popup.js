import React, { useEffect, useRef } from 'react';
import './popup.css';
import burger from './assets/burger-popup.png';
import veg from './assets/veg-popup.png';
import minus from './assets/minus-popup.png';
import plus from './assets/plus-popup.png';
import tag from './assets/tag.png';
import { Helmet } from 'react-helmet';

export default function Popup({ onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
        </Helmet>
        <div className='item-image'>
          <div className='food-item-image'><img src={burger} alt="Burger" /></div>
          <div className='tag-div'><img src={tag} alt="Tag" /></div>
          <div className='price'><span className='price-txt'>₹ 170</span></div>
        </div>
        <div className='Bestseller-div'>
          <div className='outer-rect'><span className='bestseller'>Bestseller</span></div>
        </div>
        <div className='item-name-div'><span className='item-name'>Aloo Tikki</span></div>
        <div className='veg-non-veg'><img src={veg} alt="Veg" /></div>
        <div className='desc'>
          <div className='desc-text'>
            A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!
          </div>
        </div>
        <div className='minus-qty-plus'>
          <div className='minus'><img src={minus} alt="Minus" /></div>
          <div className='qty'><span className='qty-txt'>1</span></div>
          <div className='plus'><img src={plus} alt="Plus" /></div>
        </div>
        <div className='add-to-cart-div'><button className='add-to-cart'>ADD TO CART</button></div>
      </div>
    </div>
  );
}
