import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import './index.css';

const Button = ({text, type}) => {
  return (
      <div className="button">
        {text}
        {
          type === 'cart' && <Glyphicon glyph="shopping-cart" />
        }
      </div>
  );
};

export default Button;