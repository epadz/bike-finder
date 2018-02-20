import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './index.css';

const DropDown = ({selected, type = null, options = [], open = false}) => {
  return (
      <div className="dropDown">
        {type && <div className="dropDownIcon"><Glyphicon glyph="sort" /></div>}
        <div className="box">
          <div className="current">{selected}</div>
          <div className="openButton"><Glyphicon glyph="triangle-bottom"/></div>
          <div className="options" style={{display: open ? 'block' : 'none'}}>
            {
              options.map((option, i) => <div className="option" key={i}>{option}</div>)
            }
          </div>
        </div>
      </div>
  );
};

export default DropDown;