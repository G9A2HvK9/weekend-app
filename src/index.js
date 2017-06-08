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
    var settings = {
    dots: true,
    };
    return (
      <Slider {...settings}>
        <div class="searchResult"><h3>1</h3></div>
        <div class="searchResult"><h3>2</h3></div>
        <div class="searchResult"><h3>3</h3></div>
        <div class="searchResult"><h3>4</h3></div>
        <div class="searchResult"><h3>5</h3></div>
        <div class="searchResult"><h3>6</h3></div>
      </Slider>
    );
  }
}

ReactDOM.render(
  <ResultsSlider />,
  document.getElementById('results-inner')
);
