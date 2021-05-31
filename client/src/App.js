import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import './App.css'
import Other__NavBar from './Components/Navbar/other_nav';
import Home from './Components/Home/home';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                <div  className='google__id' id="google_translate_element"></div>
                    <div className='container_!'>
                        <Other__NavBar/>
                        <Navbar/>
                        <div className='router'>
                            
                           <Switch>
                              <Route path='/' exact component={Home}/> 
                           </Switch>
                        </div>
                        {/* <FooterMain/> */}
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;