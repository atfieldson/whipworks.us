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
      },{
        original: require('./images/charts/BW105Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW105ChartThumb.jpg')
      },{
        original: require('./images/charts/BW102Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW102ChartThumb.jpg')
      },{
        original: require('./images/charts/BW101Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW101ChartThumb.jpg')
      },{
        original: require('./images/charts/BW96Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW96ChartThumb.jpg')
      },{
        original: require('./images/charts/BW94Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW94ChartThumb.jpg')
      },{
        original: require('./images/charts/BW93Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW93ChartThumb.jpg')
      },{
        original: require('./images/charts/BW85Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW85ChartThumb.jpg')
      },{
        original: require('./images/charts/BW76Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW76ChartThumb.jpg')
      },{
        original: require('./images/charts/BW72Chart.jpg'),
        thumbnail: require('./images/thumbnails/BW72ChartThumb.jpg')
      },
    ]
  }

  render() {
    return (
      <div>
        <div className="homeTitle">
          <h1>Home Page</h1>
        </div>
        <div className="homePageContentContainer">
          <div className="imageGalleryContainer">
            <ImageGallery className="imageGallery" items={this.images}/>
          </div>
          <div className="aboutWWContainer">
            <h1>UNDER</h1>
            <h1>CONSTRUCTION</h1>
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

