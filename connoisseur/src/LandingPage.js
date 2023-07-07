import React, { useState } from 'react';
import './LandingPage.css';
import menu_icon from './assets/menu.png';
import right_arrow_icon from './assets/vector-11.png';
import green_dot from './assets/green-dot.png';
import red_dot from './assets/red-dot.png';
import { Helmet } from 'react-helmet';
import data from './LandingPage_data.json';
import burger from './assets/component-3.png';
import './popup.css'
import Popup from './popup';

export default function LandingPage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const togglePopup = (itemIndex) => {
    setSelectedItemIndex(itemIndex);
    setIsPopupVisible(!isPopupVisible);
  };
  
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const groupedItems = data.reduce((acc, item) => {
    const outletName = item.outlet_name;
    if (!acc[outletName]) {
      acc[outletName] = [];
    }
    acc[outletName].push(item);
    return acc;
  }, {});

  return (
    <div className='LandingPage container'>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap" rel="stylesheet" />
      </Helmet>
      <div className='top-yellow-border'>
        <div className='menu-div'>
          <img src={menu_icon} className='menu-icon' alt='Menu' />
        </div>
        <div className='search-div'>
          <span className='search-location'>BITS Pilani Hyderabad Campus</span>
        </div>
      </div>
      <div className='main-body'>
        {Object.entries(groupedItems).map(([outletName, items]) => (
          <div className='parent' key={outletName}>
            <div className='outer'>
              <div className='outlet-name'>
                <span className='Name-text'>{outletName}</span>
                <div className='right-arrow'>
                  <img src={right_arrow_icon} alt='Right Arrow' />
                </div>
              </div>
            </div>
            <div className='menu-items'>
              <div className='outer-container'>
                {items.map((item, itemIndex) => (
                  <div className='container-class' key={itemIndex}>
                    <div className='food-item-card'>
                      <div className='food-item-image' onClick={() => togglePopup(itemIndex)}>
                        <img src={burger} className='food-img' alt='Food Item' />
                      </div>
                      <div className='food-price-div'>
                        <span className='food-price'>Rs. {item.price}</span>
                      </div>
                      <div className='item-details'>
                        <div className='food-item-name'>{item['food-item-name']}</div>
                        <div className='veg-non-veg'>
                          <img src={item.veg === 'true' ? green_dot : red_dot} className='dot' alt='Dot' />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isPopupVisible && selectedItemIndex !== null && (
        <Popup
          selectedItem={data[selectedItemIndex]}
          onClose={() => setIsPopupVisible(false)}
        />
      )}
    </div>
  );
}
