import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 100,
      slideInterval: 2000,
      thumbnailPosition: 'bottom',
      showVideo: {},
    };

    this.images = [
      {
        original: require('./images/charts/BW118Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW118ChartThumb.jpg')
      },
      {
        original: require('./images/charts/BW117Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW117ChartThumb.jpg')
      },
      {
        original: require('./images/charts/BW111+112Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW111+112ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW105Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW105ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW102Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW102ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW101Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW101ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW96Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW96ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW94Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW94ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW93Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW93ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW85Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW85ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW76Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW76ChartThumb.jpg')
      }, {
        original: require('./images/charts/BW72Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW72ChartThumb.jpg')
      },
    ]
  }

  render() {
    return (
      <div className="homePage">
        <div className="homePageContentContainer">
          <div className="imageGalleryContainer">
            <ImageGallery className="imageGallery" items={this.images} />
          </div>
          <div className="aboutWWContainer">
            <h2>About the Whipmaker</h2>
            <p>Adam Fieldson here, owner and sole whipmaker at WhipWorks, LLC. I love making whips.  The fact that so many people have taken interest in my work gives me great pride.  I strive to make the best product for my clients.  My goal is to create a whip that is durable, easy to crack, and beautiful.  I like to think of my bullwhips as art, art that can break the sound barrier!</p>
            <div className="aboutPicContainer" >
              <div>
                <img src={require("./images/about/idolPic.jpg")} />
                <p>Performing at a non-profit Gala in 2018</p>
              </div>
              <div>
                <img src={require("./images/about/picWithJenniferChoi.jpg")}/>
                <p>I had the pleasure of meeting the famous whip performer April Jennifer Choi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutBullwhipContainer" >
          <h2>What goes into a WhipWorks Bullwhip?</h2>
          <p>A WhipWorks whip starts with a steel rod that is attached to a nylon sheath.  This sheath is then loaded with steel shot. The added weight from the shot encourages a taper that effortlessly transfers energy from the heel to the end of the whip.  Over this is applied the first bolster, which is a wrap to support the transition of the whip (the section where the handle and the thong meet).  Then the first layer of plaiting is applied, which is a 6 plait layer (6 strands of paracord).  Over this, a second bolster is applied before the 10 plait layer is added.  And then, the final 16 plait layer is applied.  This final layer of plaiting takes much more time, as the pattern in the handle is intricate and requires special attention.  After plaiting, a concho is permanently attached to the heel of the whip, and two accent knots are added to the handle.  The whip is then submerged in liquid wax, patted dry and hung to set.  This waxing make these whips water resistant and ready for any weather condition.
            </p>
          <div className="aboutBullwhipContainerPicContainer">
            <div className="makingPicContainer">
              <img src={require("./images/about/loadingCore.jpg")} className="makingPics" />
              <p>Loading the core of a new whip with steel shot</p>
            </div>
            <div className="makingPicContainer">
            <img src={require("./images/about/layersOfPlaiting.jpg")} className="makingPics" />
            <p>The three layers of plaiting in a WhipWorks Bullwhip</p>
            </div>            
            <div className="makingPicContainer">
            <img src={require("./images/about/accentKnotTying.jpg")} className="makingPics" />
            <p>Applying an accent knot onto the heel of a Bullwhip</p>
            </div>
            <div className="makingPicContainer">
            <img src={require("./images/about/waxedVsUnwaxed.jpg")} className="makingPics" />
            <p>The difference between some waxed and unwaxed whips</p>
            </div>
          </div>
        </div>
        <div className="aboutBullwhipContainer" >
          <h2>Some Frequently Asked Questions</h2>
          <h3>Why Whips?</h3>
          <p>Whips are the first human made tool to break the sound barrier.  It is incredibly satisfying to be outside with a whip in hand and literally make sonic booms!</p>
          <h3>What is paracord?</h3>
          <p>Paracord is a nylon sheath wrapped around strands of cotton string.  It was used in WW2 as suspension line in parachutes, and has become a popular material for camping and other outdoor activities due to it’s incredible durability and water resistant traits. </p>
          <h3>How long does a Bullwhip take to make?</h3>
          <p>There are a lot of factors to consider here.  A 4 or 5 foot whip with a simple handle design could take 7-9 hours.  A 12 footer with an intricate handle design could take up to 14 hours.  It is truly a labor of love though and I enjoy every minute.</p>
          <h3>How did you get into whip making?</h3>
          <p>When I was in elementary school, my family lived in Melbourne Australia for a couple of years.  During our time there, my mom purchased an inexpensive 4 plait stockwhip at a tack shop as a souvenir.  I spent hours cracking that thing and a life-long passion for whips was born.  In college, I attempted to make my first whip.  Several years and some terrible whips later, WhipWorks was born.</p>
        </div>
        <div className = "aboutBullwhipContainer">
          <button onClick={() => this.props.history.push("/bullwhip")} className = "colorChooserButton">
            Design a Bullwhip
          </button>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);

