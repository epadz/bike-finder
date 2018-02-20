import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './index.css';
import img2 from '../assets/bikes/trekProcaliber2.jpg';
import Rockhopper from '../assets/bikes/specializedRockhopper.jpg';
import Road from '../assets/categories/road.jpg';
import Mountain from '../assets/categories/mountain.jpeg';
import BMX from '../assets/categories/bmx.jpg';
import Commuter from '../assets/categories/commuter.jpg';
import Kids from '../assets/categories/kids.jpg';
import Cross from '../assets/categories/cross.jpg';
import Leisure from '../assets/categories/leisure.jpg';
import Fixie from '../assets/categories/fixie.jpg';
import Ebike from '../assets/categories/ebike.png';
import Racing from '../assets/categories/racing.jpg';

import {LISTINGS} from "../App";

class Home extends Component {

  render() {
    return (
        <Scrollbars style={{width: '100%', height: '100%'}}>
          <div className="page">
            <div className="categories">
              <div className="categoryRow">
                <div className="category"><span style={{backgroundImage:`url(${Road})`}} /><div>Road</div></div>
                <div className="category" onClick={() => this.props.setPage(LISTINGS)}><span style={{backgroundImage:`url(${Mountain})`}} /><div>Mountain</div></div>
                <div className="category"><span style={{backgroundImage:`url(${BMX})`}} /><div>BMX</div></div>
                <div className="category"><span style={{backgroundImage:`url(${Commuter})`}} /><div>Commuter</div></div>
              </div>
              <div className="categoryRow">
                <div className="category"><span style={{backgroundImage:`url(${Kids})`}} /><div>Kids</div></div>
                <div className="titleTile"><div>A Bike for <span style={{textDecoration: 'underline', textDecorationColor: '#5F9EA0'}}>Every</span> Need</div></div>
                <div className="category"><span style={{backgroundImage:`url(${Cross})`}} /><div>Cross</div></div>
              </div>
              <div className="categoryRow">
                <div className="category"><span style={{backgroundImage:`url(${Ebike})`}} /><div>Electric</div></div>
                <div className="category"><span style={{backgroundImage:`url(${Racing})`}} /><div>Racing</div></div>
                <div className="category"><span style={{backgroundImage:`url(${Fixie})`}} /><div>Fixed Gear</div></div>
                <div className="category"><span style={{backgroundImage:`url(${Leisure})`}} /><div>Leisure</div></div>
              </div>
            </div>
          </div>
        </Scrollbars>
    );
  }
}

export default Home;