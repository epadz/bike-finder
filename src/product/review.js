import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import {StarRating} from '../common';
import './index.css';

const Review = ({title, rating, author, date, numHelpful, content}) => {
  return (
      <div className="review">
        <div className="reviewHeader">
          <div className="reviewInfo">
            <div className="reviewTitle">{title}</div>
            <div className="reviewRating"><StarRating rating={rating / 5.0} /></div>
            <div className="reviewAuthor">{author} <span>{date}</span></div>
          </div>
          <div className="reviewUsefulness">
            <div><Glyphicon glyph="thumbs-up" /></div>
            <div>{numHelpful} people found this helpful</div>
          </div>
        </div>
        <div className="reviewContent">
          {content}
        </div>
      </div>
  );
};

export default Review;