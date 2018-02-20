import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './index.css';

const ColorFilter = ({title, expanded = false, items = [], selected = []}) => {
  return (
      <div className="filter">
        <div className="filterHeader">
          <div className="filterTitle">{title}</div>
          <div className="filterToggle"><Glyphicon glyph={expanded ? 'chevron-up' : 'chevron-down'} style={{top: expanded ? '-3px' : '-1px'}} /></div>
        </div>
        <div className="colorOptions" style={{height: expanded ? 'auto' : 0}}>
          {
            items.map((item, i) =>
                <div className="colorOption" key={i} style={{borderColor:selected[i] ? '#444444' : '#aaaaaa', backgroundColor: item}} />
            )
          }
        </div>
      </div>
  );
};

export default ColorFilter;