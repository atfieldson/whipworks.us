import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import './homePage.css';
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
              <div className="picContainer">
                <img src={require("./images/about/idolPic.jpg")} className="idolPic" />
                <p>Performing at a non-profit Gala in 2018</p>
              </div>
              <div className="picContainer">
                <img src={require("./images/about/picWithJenniferChoi.jpg")} className="jenPic" />
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

