import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import {StarRating, DropDown, ColorDot, Button, Number} from '../common';
import ProductTile from '../listings/productTile';
import Review from './review';
import './index.css';

import img1 from '../assets/bikes/trekProcaliber1.jpg';
import img2 from '../assets/bikes/trekProcaliber2.jpg';
import img3 from '../assets/bikes/trekProcaliber3.jpg';
import img4 from '../assets/bikes/trekProcaliber4.jpg';
import img5 from '../assets/bikes/trekProcaliber5.jpg';
import orange from '../assets/bikes/trekProcaliberOrange1.jpg';
import o2 from '../assets/bikes/trekProcaliberO2.jpg'
import o3 from '../assets/bikes/trekProcaliberO3.jpg'
import trek from '../assets/logos/trek.png';
import Slash from '../assets/bikes/trekSlash.jpg';

const SPECS = 'specs';
const SIZING = 'sizing';
const FAQ = 'faq';

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: FAQ,
    }
  }

  scroll;
  details;

  componentDidMount(){
    //this.scroll.scrollTop(this.details.offsetHeight + 100);
  }

  render() {
    return (
        <div className="productWrapper">
          <div className="productSidebar">
            <div className="productSidebarTop">
              <div className="backButton">
                <div style={{flex: '0 0 28px', color: '#5F9EA0'}}><Glyphicon glyph="arrow-left"/></div>
                <div style={{flex: '1'}}>Back</div>
              </div>
              <div className="sidebarTitle">Pinned</div>
            </div>
            <Scrollbars style={{ width: '100%', flex: '1' }} autoHide hideTracksWhenNotNeeded>
              <ProductTile name="Slash 9.8" image={Slash} price="$1,200" brand="Trek" rating={0.75} year="2018"
                           desc="Advanced Mountain" pinned
                           colors={[['#FF9133', '#000000'], ['#05B611'], ['#000000', '#ffffff'],]} small/>
              <ProductTile name="Procaliber 9.8 SL" pinned image={img1} price="$4,499.99" rating={0.8} year="2018"
                           desc="Mountain" level="Advanced" brand="Trek" small selected
                           colors={[['#FF9133', '#000000'], ['#05B611'], ['#000000', '#ffffff'],]}/>
            </Scrollbars>
          </div>
          <div className="product"  >
            <Scrollbars style={{ width: '100%', height: '100%' }} autoHide hideTracksWhenNotNeeded ref={elem => this.scroll = elem}>
              <div className="topPhoto" style={{backgroundImage: `url(${img2})`}} />
              <div className="info" ref={elem => this.details = elem}>
                <div className="gallery">
                  <div className="curImage" style={{backgroundImage: `url(${img4})`}} />
                  <div className="galleryNav">
                    <div className="galleryItem" style={{backgroundImage: `url(${img3})`}} />
                    <div className="galleryItem" style={{backgroundImage: `url(${img1})`}} />
                    <div className="galleryItem" style={{backgroundImage: `url(${img5})`}} />
                  </div>
                </div>
                <div className="productDetails">
                  <div className="basicInfo">
                    <div style={{flex: '1'}}>
                      <div className="title">Procaliber 9.8 SL</div>
                      <div className="price">$4,499.99</div>
                      <StarRating rating={0.8}/>
                      <div className="details">
                        <div>2018</div>
                        <div>Performance Hardtail Mountain Bike</div>
                      </div>
                    </div>
                    <div className="brand" style={{backgroundImage: `url(${trek})`}}/>
                  </div>
                  <div className="desc">
                    Procaliber 9.8 SL is a performance hardtail mountain bike for XC racers and serious riders. It has an
                    ultra-lightweight SL OCLV Mountain Carbon frame with trail-smoothing IsoSpeed and a host of pro-level
                    performance parts, including carbon wheels, a SRAM GX Eagle 1x12 drivetrain, and a lightweight RockShox
                    SID RL fork. There's no getting around it: this bike was made to win.
                  </div>
                  <div className="buy">
                    <div className="colors">
                      <div className="label">Color</div>
                      <span><ColorDot colors={['#cccccc', '#000000']} selected /></span>
                      <span><ColorDot colors={['#FF9133', '#000000']} /></span>
                      <span><ColorDot colors={['#ffffff', '#05B611', '#0D2C78']}/></span>
                    </div>
                    <div className="sizing">
                      <div className="label">Size</div>
                      <DropDown selected={'17.5 (29" wheel)'} options={[
                        '15.5 (27.5" wheel)',
                        '17.5 (29" wheel)',
                        '18.5 (29" wheel)',
                        '19.5 (29" wheel)',
                        '21.5 (29" wheel)',
                      ]}/>
                    </div>
                    <div className="addToCart">
                      <Button text="Add to Cart" type="cart" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="specs">
                <div className="tabs">
                  <div className={this.state.tab === SPECS ? 'active' : 'tab'} onClick={() => this.setState({tab: SPECS})}>Technical Specs</div>
                  <div className={this.state.tab === SIZING ? 'active' : 'tab'} onClick={() => this.setState({tab: SIZING})}>Sizing</div>
                  <div className={this.state.tab === FAQ ? 'active' : 'tab'} onClick={() => this.setState({tab: FAQ})}>FAQ</div>
                </div>
                {
                  this.state.tab === SPECS ?
                      <div className="content">
                        <div className="title">Frameset</div>
                        <div className="table">
                          <div className="row">
                            <div className="cell">Frame</div>
                            <div className="cell">Super Light OCLV Mountain Carbon, IsoSpeed, E2 tapered head tube, MicroTruss, Control Freak internal routing, balanced post mount brake, PF92, Boost148 & G2 Geometry on 17.5˝ and larger sizes</div>
                          </div>
                          <div className="row">
                            <div className="cell">Front suspension</div>
                            <div className="cell">RockShox SID RL, Solo Air, Motion Control remote lockout, E2 tapered steerer, G2 Geometry w/51mm offset on 29ers, Boost110, 100mm travel</div>
                          </div>
                        </div>

                        <div className="title">Wheels</div>
                        <div className="table">
                          <div className="row">
                            <div className="cell">Wheels</div>
                            <div className="cell">Bontrager Kovee Elite 23, Tubeless Ready, 54T Rapid Drive, Boost110 front, Boost148 rear (15.5˝: 142x12 rear), tubeless strips included, valves sold separately</div>
                          </div>
                          <div className="row">
                            <div className="cell">Tires</div>
                            <div className="cell">Bontrager XR2 Team Issue, Tubeless Ready, 120 tpi, aramid bead, 29x2.20˝ (15.5: 27.5x2.20˝)</div>
                          </div>
                        </div>

                        <div className="title">Drivetrain</div>
                        <div className="table">
                          <div className="row">
                            <div className="cell">Shifters</div>
                            <div className="cell">SRAM GX Eagle, 12 speed</div>
                          </div>
                          <div className="row">
                            <div className="cell">Rear derailleur</div>
                            <div className="cell">SRAM GX Eagle, Roller Bearing Clutch</div>
                          </div>
                          <div className="row">
                            <div className="cell">Crank</div>
                            <div className="cell">SRAM Stylo Carbon Eagle, 32T</div>
                          </div>
                          <div className="row">
                            <div className="cell">Bottom bracket</div>
                            <div className="cell">PF92</div>
                          </div>
                          <div className="row">
                            <div className="cell">Cassette</div>
                            <div className="cell">SRAM XG-1275, 10-50, 12 speed</div>
                          </div>
                          <div className="row">
                            <div className="cell">Chain</div>
                            <div className="cell">SRAM GX Eagle</div>
                          </div>
                          <div className="row">
                            <div className="cell">Pedals</div>
                            <div className="cell">Not included</div>
                          </div>
                        </div>
                        <div className="title">Components</div>
                        <div className="table">
                          <div className="row">
                            <div className="cell">Saddle</div>
                            <div className="cell">Bontrager Montrose Elite, hollow titanium rails</div>
                          </div>
                          <div className="row">
                            <div className="cell">Seatpost</div>
                            <div className="cell">Bontrager Pro, OCLV Carbon, 31.6mm, 5mm offset</div>
                          </div>
                          <div className="row">
                            <div className="cell">Handlebar</div>
                            <div className="cell">Bontrager Race X Lite, OCLV Carbon, 31.8mm, 5mm rise, 720mm width</div>
                          </div>
                          <div className="row">
                            <div className="cell">Grips</div>
                            <div className="cell">ESI Chunky</div>
                          </div>
                          <div className="row">
                            <div className="cell">Stem</div>
                            <div className="cell">Bontrager Pro, 31.8mm, 7 degree</div>
                          </div>
                          <div className="row">
                            <div className="cell">Headset</div>
                            <div className="cell">FSA IS-2, 1-1/8˝ top, 1.5˝ bottom</div>
                          </div>
                          <div className="row">
                            <div className="cell">Brakeset</div>
                            <div className="cell">SRAM Level TLM hydraulic disc</div>
                          </div>
                        </div>

                        <div className="title">Weight</div>
                        <div className="table">
                          <div className="row">
                            <div className="cell">Weight</div>
                            <div className="cell">17.5" - 10.02 kg / 22.10 lbs</div>
                          </div>
                          <div className="row">
                            <div className="cell">Weight Limit</div>
                            <div className="cell">This bike has a maximum total weight limit (combined weight of bicycle, rider, and cargo) of 300 pounds (136 kg).</div>
                          </div>
                        </div>
                      </div>
                      : this.state.tab === SIZING ?
                      <div className="content">
                        <div className="sizeChart">
                          <div className="row">
                            <div className="cell"><span>4'9"</span><span /></div>
                            <div className="cell"><span>4'10"</span></div>
                            <div className="cell"><span>4'11"</span><span /></div>
                            <div className="cell"><span>5'1"</span></div>
                            <div className="cell"><span>5'2"</span><span /></div>
                            <div className="cell"><span>5'3"</span></div>
                            <div className="cell"><span>5'4"</span><span /></div>
                            <div className="cell"><span>5'5"</span></div>
                            <div className="cell"><span>5'7"</span><span /></div>
                            <div className="cell"><span>5'7"</span></div>
                            <div className="cell"><span>5'8"</span><span /></div>
                            <div className="cell"><span>5'9"</span></div>
                            <div className="cell"><span>5'10"</span><span /></div>
                            <div className="cell"><span>5'11"</span></div>
                            <div className="cell"><span>6'1"</span><span /></div>
                            <div className="cell"><span>6'2"</span></div>
                            <div className="cell"><span>6'3"</span><span /></div>
                            <div className="cell"><span>6'4"</span></div>
                            <div className="cell"><span>6'5"</span><span /></div>
                            <div className="cell"><span>6'6"</span></div>
                          </div>
                          <div className="row">
                            <div className="sizeFiller" style={{flex:'0'}} />
                            <div className="sizeBar" style={{flex:'7'}} >13.5"</div>
                            <div className="sizeFiller" style={{flex:'33'}} />
                          </div>
                          <div className="row">
                            <div className="sizeFiller" style={{flex:'6'}} />
                            <div className="sizeBar" style={{flex:'9'}} >15.5"</div>
                            <div className="sizeFiller" style={{flex:'25'}} />
                          </div>
                          <div className="row">
                            <div className="sizeFiller" style={{flex:'14'}} />
                            <div className="sizeBar" style={{flex:'11'}} >17.5"</div>
                            <div className="sizeFiller" style={{flex:'15'}} />
                          </div>
                          <div className="row">
                            <div className="sizeFiller" style={{flex:'23'}} />
                            <div className="sizeBar" style={{flex:'9'}} >18.5"</div>
                            <div className="sizeFiller" style={{flex:'8'}} />
                          </div>
                          <div className="row">
                            <div className="sizeFiller" style={{flex:'30'}} />
                            <div className="sizeBar" style={{flex:'8'}} >21.5"</div>
                            <div className="sizeFiller" style={{flex:'2'}} />
                          </div>
                          <div className="row">
                            <div className="sizeFiller" style={{flex:'38'}} />
                            <div className="sizeBar" style={{flex:'2'}} >23"</div>
                            <div className="sizeFiller" style={{flex:'0'}} />
                          </div>
                        </div>
                      </div>
                      :
                      <div className="content">
                        <div className="faq">
                          <div className="question">
                            How many seasons will this last me?
                            <div className="faqAuthor">Bill D.&nbsp;&nbsp;Jan, 2018</div>
                          </div>
                          <div className="answer">
                            I've had mine for a few years now and it's still going strong
                            <div className="faqAuthor">Eduardo T.&nbsp;&nbsp;Jan, 2018</div>
                          </div>
                          <div className="answer">
                            I think the usual life span is 5 - 10 years
                            <div className="faqAuthor">Max P.&nbsp;&nbsp;Feb, 2018</div>
                          </div>
                          <div className="reply">Reply</div>
                        </div>

                        <div className="faq">
                          <div className="question">
                            Does this work well as a commuter bike too?
                            <div className="faqAuthor">Megan H.&nbsp;&nbsp;Dec, 2017</div>
                          </div>
                          <div className="answer">
                            I've ridden mine to work before but I'm always scared it will get stolen
                            <div className="faqAuthor">Raj M.&nbsp;&nbsp;Dec, 2017</div>
                          </div>
                          <div className="reply">Reply</div>
                        </div>

                        <div className="ask">Ask a Question</div>
                      </div>
                }


                <div className="seeMore" style={{display:'none'}}>Show More</div>
              </div>
              <div className="reviews">
                <div className="top">
                  <div style={{fontSize:'20px'}}>Reviews (78)</div>
                  <StarRating rating={0.8} />
                </div>
                <div className="highlights">
                  <div className="pros">
                    <div className="title">What People Love</div>
                    <div className="term">Suspension (6)</div>
                    <div className="term">Fit (3)</div>
                    <div className="term">Smooth (3)</div>
                  </div>
                  <div className="cons">
                    <div className="title">Room for Improvement</div>
                    <div className="term">Expensive (3)</div>
                    <div className="term">Brakes (2)</div>
                    <div className="term">Color (1)</div>
                    <div className="term">Suspension (2)</div>
                  </div>
                  <div className="ratings">
                    <div className="title">Ratings</div>
                    <div className="rating"><StarRating rating={0.0} /> (2)</div>
                    <div className="rating"><StarRating rating={0.2} /> (3)</div>
                    <div className="rating"><StarRating rating={0.4} /> (5)</div>
                    <div className="rating"><StarRating rating={0.6} /> (7)</div>
                    <div className="rating"><StarRating rating={0.8} /> (38)</div>
                    <div className="rating"><StarRating rating={1} /> (23)</div>
                  </div>
                </div>
                <Review title="Amazing." author="Mike K." rating={5} date="May, 2017" numHelpful="12" content="I am a 230-240 pound 46 year old rider depending on the week. I was on a Superfly 9.7 and after doing the Leadville Trail 100 in 2016 I went to a Remedy 8 thinking the full suspension would help in the technical downhills. I gave my Superfly to my son and he has been on the podium with it. I soon realized that full suspension wasn't for me and after the Lutsen 99'r I traded it in for the Procaliber 9.8. This is the bike I belong on. I always tell people to pick it up and love to see the look on their faces when the see how light it is." />
                <Review title="Nice bike with a major flaw" author="Kate R." rating={2} date="Jan, 2018" numHelpful="5" content="I upgraded to the 2017 Trek Procaliber 9.8 from an aluminum hardtail 29er with 3x9 XTR (approximately 7 years old). The Trek is undoubtedly more comfortable, better looking (come on, aesthetics matter!) and the modern drivetrain is nice. There is a big &quot;but&quot; coming - the SRAM Level TLM brakes must have a design flaw. My bike has been in the shop two times for warranty replacement. Something causes the brakes to lock up - you literally cannot move the lever. Trek has replaced them both times, but I'm unhappy that I've been off the bikes so much as I wait for the replacement and I worry it will happen 15 miles into a long ride. My LBS acknowledges the problem and told me to get Shimano brakes - SLX are better than the SRAMs. I spent a lot on this bike and don't want to spend more to get it reliable." />
                <Review title="Great bike with great service. No flaws!" author="Dale B." rating={4} date="Dec, 2017" numHelpful="2" content="This bike is perfect for me! I race high school series races with this bike and it fulfills all of my XC needs. Everything is great about this bike the iso speed is great. The Bike is also very light! The only thing I had a problem with was the cranks on the bike where not the correct component as listed BUT Trek made it up to me by replacing the wrong cranks with Sram XX1 Carbon Cranks. All in all this is an amazing bike and worth the price. If you don't think if the bike is worth the money think about the amazing service you get from trek along with an amazing bike." />
                <div className="loadMoreReviews">Load More</div>
              </div>
            </Scrollbars>
          </div>
        </div>
    );
  }
}

export default Product;