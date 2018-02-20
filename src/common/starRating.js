import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './index.css';

const StarRating = ({rating = 1, size = 'md', style={}}) => {
  return (
      <div className={size === 'sm' ? 'starRatingSM' : 'starRating'} style={style}>
        <div className="emptyStars">
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
        </div>
        <div className="filledStars" style={size === 'sm' ? {width: `${60 * rating}px`} : {width: `${100 * rating}px`}}>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
          <Glyphicon glyph="star"/>
        </div>
      </div>
  );
};

export default StarRating;