import React from 'react';
import './index.css';

const ColorDot = ({colors = [], selected = false}) => {
  switch(colors.length){
    case 2:
      return(
          <div className={selected ? 'colorDotSelected' : 'colorDot'} style={selected ? {borderColor: '#333'} : {}}>
            <div style={{backgroundColor:colors[0], width: '100%', height: '50%'}} />
            <div style={{backgroundColor:colors[1], width: '100%', height: '50%'}} />
          </div>
      );
    case 3:
      return(
          <div className={selected ? 'colorDotSelected' : 'colorDot'} style={selected ? {borderColor: '#333'} : {}}>
            <div style={{backgroundColor:colors[0], width: '50%', height: '50%'}} />
            <div style={{backgroundColor:colors[1], width: '50%', height: '50%'}} />
            <div style={{backgroundColor:colors[2], width: '100%', height: '50%'}} />
          </div>
      );
    case 4:
      return(
          <div className={selected ? 'colorDotSelected' : 'colorDot'} style={selected ? {borderColor: '#333'} : {}}>
            <div style={{backgroundColor:colors[0], width: '50%', height: '50%'}} />
            <div style={{backgroundColor:colors[1], width: '50%', height: '50%'}} />
            <div style={{backgroundColor:colors[2], width: '50%', height: '50%'}} />
            <div style={{backgroundColor:colors[3], width: '50%', height: '50%'}} />
          </div>
      );
    case 1:
    default:
      return(
          <div className={selected ? 'colorDotSelected' : 'colorDot'} style={selected ? {borderColor: '#333'} : {}}>
            <div style={{backgroundColor:colors[0], width: '100%', height: '100%'}} />
          </div>
      );
  }
};

export default ColorDot;