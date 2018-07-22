import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Login from './containers/Login';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer  } from "./reducers/reducers";

const store = createStore(rootReducer);

class App extends Component {
    constructor(){
        super();
        this.classObj = {
            root : 'login-container',
            paper: 'login-paper'
        }
    }
    
    render() {
        return ( 
            <Provider store={store}>
                <div className = "App" >
                    <Login classes={this.classObj}></Login>
                    <Carousel></Carousel>
                </div>
            </Provider>
        );
    }
}

export default App;