import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import {Scrollbars} from 'react-custom-scrollbars';

import ProductTile from './productTile';
import Filter from './filter';
import ColorFilter from './colorFilter';
import ActiveFilter from './activeFilter';
import {DropDown} from "../common";
import './index.css';

import Slash from '../assets/bikes/trekSlash.jpg';
import TopFuel from '../assets/bikes/trekTopFuel.jpg';

import Habit from '../assets/bikes/cannondaleHabit.jpg';
import proCal from '../assets/bikes/trekProcaliber1.jpg';
import Rockhopper from '../assets/bikes/specializedRockhopper.jpg';
import {PRODUCT} from "../App";

class Listings extends Component {

  constructor(props){
    super(props);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.state = {
      filters: {
        Type: {
          open: false,
          options: {
            Mountain: true,
            Road: false,
            BMX: false,
            Commuter: false,
            "Kid's": false,
            Cross: false,
            Electric: false,
            Racing: false,
            "Fixed Gear": false,
          }
        },

        Gender: {
          open: true,
          options: {
            "Men's": true,
            "Women's": false,
            "Unisex": false,
          }
        },

      }
    }
  }

  toggleFilter = filter => {
    let tmpState = {...this.state.filters};
    tmpState[filter].open = !tmpState[filter].open;
    this.setState({filters: tmpState})
  };

  setFilter = (filter, item) => {
    let tmpState = {...this.state.filters};
    tmpState[filter].options[item] = !tmpState[filter].options[item];
    this.setState({filters: tmpState})
  };

  render() {
    return (
        <Scrollbars style={{width: '100%', height: '100%'}} ref={elem => this.scroll = elem}>
          <div className="listings">
            <div className="filters">
              {
                Object.keys(this.state.filters).map((filter, i) => <Filter
                    key={i}
                    title={filter}
                    expanded={this.state.filters[filter].open}
                    items={Object.keys(this.state.filters[filter].options)}
                    selected={Object.values(this.state.filters[filter].options)}
                    toggle={() => this.toggleFilter(filter)}
                    itemToggle={item => this.setFilter(filter, item)}
                />)
              }
              <Filter title="Price"/>
              <Filter title="Brand"/>
              <Filter title="Frame Material"/>
              <Filter title="Model Year"/>
              <ColorFilter
                  title="Color"
                  expanded
                  items={[
                    '#ff3a33',
                    '#FF9133',
                    '#FFBD34',
                    '#05B611',
                    '#05868C',
                    '#3154AB',
                    '#0D2C78',
                    '#000000',
                    '#888888',
                    '#ffffff',
                  ]}
                  selected={[true, false, false, true, false, false, false, true, false, false]}
              />
              <Filter title="Gear Shifter"/>
              <Filter title="Brakes"/>
              <Filter title="Suspension"/>
              <Filter title="Features"/>
            </div>
            <div className="main">
              <div className="refinements">
                <div className="activeFilters">
                  {
                    Object.keys(this.state.filters)
                        .map((filter, f) => Object.keys(this.state.filters[filter].options)
                            .map((option, o) => {
                              return this.state.filters[filter].options[option]
                                  && <ActiveFilter key={f + "" + o} title={option} remover={() => this.setFilter(filter, option)} />
                            })
                        )
                  }
                </div>
                <div className="sort">
                  <DropDown selected="Relevance" type="sort" options={['Price', 'Rating', 'Relevance', 'A-Z', 'Z-A']} />
                </div>
              </div>
              <div className="results">
                <ProductTile name="Procaliber 9.8 SL" pinned image={proCal} price="$4,499.99" rating={0.8} year="2018"
                             desc="Mountain" level="Advanced" brand="Trek" onClick={() => this.props.setPage(PRODUCT)}
                             colors={[['#FF9133', '#000000'], ['#05B611'], ['#000000', '#ffffff'],]}/>
                <ProductTile name="Slash 9.8" pinned image={Slash} price="$1,200" rating={0.75} year="2018"
                             desc="Mountain" level="Advanced" brand="Trek" tag="sale"
                             colors={[['#FF9133', '#000000'], ['#05B611'], ['#000000', '#ffffff'],]}/>
                <ProductTile name="Top Fuel" image={TopFuel} price="$3,100" rating={0.85} year="2018" brand="Trek"
                             desc="Mountain" level="Advanced" colors={[['#000000', '#ff3a33',], ['#ffffff'], ['#05B611'],]}/>
                <ProductTile name="Habit 4" image={Habit} price="$4,200" rating={1.0} year="2018"
                             desc="Trail" level="Intermediate" brand="Cannondale"
                             colors={[['#05B611', '#888888', '#000000'], ['#3154AB'], ['#888888'],]}/>
                <ProductTile name="Rockhopper" image={Rockhopper} price="$650" rating={0.45}
                             year="2018" desc="Mountain" level="Entry Level" brand="Specialized"
                             colors={[['#ff3a33', '#000000'], ['#FFBD34', '#ffffff',], ['#0D2C78'],]}/>
              </div>
              <div className="numResults">4 Results</div>
            </div>
            <div className="pinned">
              <div className="toggle"><Glyphicon glyph="menu-hamburger"/>&nbsp;&nbsp;pinned</div>
              <div className="items">
                <ProductTile name="Slash 9.8" image={Slash} price="$1,200" brand="Trek" rating={0.75} year="2018"
                             desc="Advanced Mountain" pinned
                             colors={[['#FF9133', '#000000'], ['#05B611'], ['#000000', '#ffffff'],]} small/>
                <ProductTile name="Procaliber 9.8 SL" pinned image={proCal} price="$4,499.99" rating={0.8} year="2018"
                             desc="Mountain" level="Advanced" brand="Trek" small
                             colors={[['#FF9133', '#000000'], ['#05B611'], ['#000000', '#ffffff'],]}/>
              </div>
            </div>
          </div>
        </Scrollbars>
    );
  }
}

export default Listings;