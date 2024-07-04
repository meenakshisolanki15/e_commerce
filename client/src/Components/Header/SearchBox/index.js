import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosSearch } from 'react-icons/io';
import { IoCloseOutline } from "react-icons/io5";

const products = [
  { id: 1, name: 'Men', route: '/men' },
  { id: 2, name: 'Women', route: '/women' },
  { id: 3, name: 'Kid', route: '/kids' },
  { id: 4, name: 'Watches', route: '/watches' },
  { id: 5, name: 'Footwear', route: '/footwear' },
  { id: 6, name: 'Toys', route: '/toys' },
  { id: 7, name: 'Mobile', route: '/mobile' },
  { id: 8, name: 'Beauty', route: '/beauty' },
  { id: 9, name: 'HomeStop', route: '/homestop' },

];

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handleProductClick = (route) => {
    navigate(route);
    setSearchClicked(false); 
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchClicked(false); 
  };

  return (
    <div className="search-box">
      <div className='headerSearch ml-3 mr-3'>
        <input
          type='text'
          placeholder='Search for products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearchClick}><IoIosSearch /></Button>
        {searchTerm && <IoCloseOutline className="clear-icon " onClick={handleClearSearch} />}
      </div>
      {searchClicked && (
        <div className="product-list">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="product-item"
              onClick={() => handleProductClick(product.route)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
