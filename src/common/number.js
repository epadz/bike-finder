import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import './index.css';

const Number = ({value}) => {
  return (
      <div className="number">
        <div><Glyphicon glyph="minus" /></div>
        <div className="value">{value}</div>
        <div><Glyphicon glyph="plus" /></div>
      </div>
  );
};

export default Number;