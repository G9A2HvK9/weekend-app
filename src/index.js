import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

// var mongoose = require('mongoose');
// var ActivitiesModel = require('./db/schema.js');
//
//
// function filter() {
//   const activity = ActivitiesModel.find()
//   ReactDOM.render(activity, document.getElementById('route'))
// }



class ResultsSlider extends React.Component {
  render() {
    var imgSrc = "http://dontpaniconline.com/media/magazine/body/2015-04-10/images/20150409_MakersAcademy_0072.jpg";
    var settings = {
    dots: true,
    swipeToSlide: true,
    };
    return (
      <Slider {...settings}>
        <div style={{height: 350, width: 900, overflow: false}}><img src= {imgSrc}></img></div>
        <div style={{height: 350, width: 900, overflow: false}}><img src="http://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg"></img></div>
        <div style={{height: 350, width: 900, overflow: false}}><img src="http://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg"></img></div>
        <div style={{height: 350, width: 900, overflow: false}}><img src="http://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg"></img></div>
        <div style={{height: 350, width: 900, overflow: false}}><img src="http://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg"></img></div>
        <div style={{height: 350, width: 900, overflow: false}}><img src="http://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg"></img></div>
        <div style={{height: 350, width: 900, overflow: false}}><img src="http://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg"></img></div>
      </Slider>
    );
  }
}

ReactDOM.render(
  <ResultsSlider />,
  document.getElementById('results-inner')
);
