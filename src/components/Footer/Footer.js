import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
  <div className="footerContainer">
  <a href="https://www.facebook.com/adamswhipworks/">
  <img src={require('./images/facebook.jpg')} className="mediaLogo" />
  </a>
  <a href="https://www.instagram.com/whipworks/?hl=en">
    <img src={require('./images/instagram.png')} className="mediaLogo" />
  </a>
  <a href="https://www.youtube.com/channel/UCy1U3l1nwB3TwFbCV3Z5peQ">
  <img src={require('./images/youtube.png')} className="mediaLogo" />
  </a>
  </div>
   
   </footer>
);

export default Footer;
