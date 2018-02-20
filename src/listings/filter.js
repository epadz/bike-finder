import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './index.css';

const Filter = ({title, expanded = false, items = [], selected = [], toggle, itemToggle}) => {
  return (
      <div className="filter">
        <div className="filterHeader" onClick={toggle}>
          <div className="filterTitle">{title}</div>
          <div className="filterToggle"><Glyphicon glyph={expanded ? 'chevron-up' : 'chevron-down'} style={{top: expanded ? '-3px' : '-1px'}} /></div>
        </div>
        <div className="filterOptions" style={{height: expanded ? 'auto' : 0}}>
          {
            items.map((item, i) =>
                <div className="filterOption" key={i} onClick={() => itemToggle(item)}>
                  <div className="optionTitle">{item}</div>
                  <div className="optionToggle" style={{backgroundColor: selected[i] ? '#5F9EA0' : '#c8c8c8'}} />
                </div>
            )
          }
        </div>
      </div>
  );
};

export default Filter;