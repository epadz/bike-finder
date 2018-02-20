import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { ColorDot, StarRating } from '../common';
import './index.css';

const ProductTile = ({image, brand, name, rating, year, desc, level, price, colors = [], small = false, tag, pinned = false, selected = false, onClick = () => {}}) => {
  return small ? (
      <div className="productTileSM" style={selected ? {border: 'solid 2px #484848'} : {}} >
        <div className="pinButton"><Glyphicon glyph={pinned ? 'heart' : 'heart-empty'} /></div>
        <div className="image" style={{backgroundImage:`url(${image})`}} />
        <div className="title"><span style={name.length > 16 ? {fontSize: '.75em'} : {}}>{name}</span></div>
        <div className="info">
          <div className="brandAndYear">
            <div className="brand">{brand}</div>
            <div className="year">{year}</div>
          </div>
          <div className="priceAndRating">
            <div className="price">{price}</div>
            <div className="rating"><StarRating size="sm" rating={rating} /></div>
          </div>
        </div>
      </div>
  ) : (
      <div className="productTile" onClick={() => onClick()}>
        <div className="pinButton"><Glyphicon glyph={pinned ? 'heart' : 'heart-empty'} /></div>
        <div className="image" style={{backgroundImage:`url(${image})`}} />
        <div className="title"><span style={name.length > 16 ? {fontSize: '.75em'} : {}}>{name}</span></div>
        <div className="info">
          <div className="details">
            <div className="brandAndYear">
              <div className="brand">{brand}</div>
              <div className="year">{year}</div>
            </div>
            <div className="desc">{level}</div>
            <div className="desc">{desc}</div>
          </div>
          <div className="priceAndRating">
            <div className="price">{price}</div>
            <div className="rating"><StarRating rating={rating} /></div>
          </div>
        </div>
      </div>
  )
};

export default ProductTile;