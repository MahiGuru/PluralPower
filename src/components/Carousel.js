import React from 'react';
import './Carousel.css';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// import Pagination from "react-paginate";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Carousel extends React.Component {
    state = {
        index: 0,
      };
    
      handleChangeIndex = index => {
        this.setState({
          index,
        });
      };
  render() {
    const { index } = this.state; 
      return ( 
        <div className="carousel-container">
            <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                <div style={Object.assign({})} className="slide slide1">slide n°1</div>
                <div style={Object.assign({})} className="slide slide2">slide n°2</div>
                <div style={Object.assign({})} className="slide slide3">slide n°3</div>
            </AutoPlaySwipeableViews>
      </div>
        
      );
    }
  }
  
  export default Carousel;