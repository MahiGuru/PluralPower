import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Pagination from "react-js-pagination";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
    root: {
        position: 'relative',
      },
      slide: {
        padding: 15,
        minHeight: 200,
        color: '#fff',
      },
      slide1: {
        backgroundColor: '#FEA900',
      },
      slide2: {
        backgroundColor: '#B3DC4A',
      },
      slide3: {
        backgroundColor: '#6AC0FF',
      },
}
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
      }
  
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
  render() {
    const { index } = this.state; 
      return ( 
          <div style={styles.root}>
            <AutoPlaySwipeableViews>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
            </AutoPlaySwipeableViews>
            <Pagination dots={3} index={index} onChange={this.handleChangeIndex} />
          </div> 
        
      );
    }
  }
  
  export default Carousel;