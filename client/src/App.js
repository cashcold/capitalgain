import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route, useParams, useRouteMatch} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import './App.css'
import Other__NavBar from './Components/Navbar/other_nav';
import Home from './Components/Home/home';
import FooterMain from './Components/Footer/footer';
import AboutMain from './Components/About-us/about';
import FAQSMAIN from './Components/FAQ/faq';
import ContactMain from './Components/Contact-us/contact_us';
import RegisterUser from './Components/Register/register';
import Dashboard from './Components/Dashboard/dashboard';
import Login from './Components/Login/login';
import DepositMain from './Components/Deposit/depsoit';
import EditMain from './Components/Edit/edit';
import WithdrawMain from './Components/Withdraw/withdraw';
import EditMainRouter from './Components/InnerRouter/editRouter/edit';
import AccountRouter from './Components/InnerRouter/accountRouter/accountRouter';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: ''
         }
    }
    componentDidMount(){
        const url = window.location.pathname;
        this.setState({
            url
        })
       
    }
    render() { 
        console.log(this.state.url)
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
                              <Route path='/about-us' exact component={AboutMain}/> 
                              <Route path='/faqs' exact component={FAQSMAIN}/> 
                              <Route path='/contact-us' exact component={ContactMain}/> 
                              <Route path='/login' exact component={Login}/> 
                              <Route path='/register' exact component={RegisterUser}/> 
                              <Route path='/deposit' exact component={DepositMain}/> 
                              <Route path='/edit' exact component={EditMain}/> 
                              <Route path='/withdraw' exact component={WithdrawMain}/>
                              {/* inner__dashboard__router start */}
                              {/* <Route path='/edit_dash' exact component={EditMainRouter}/> 
                              <Route path='/account_dash' exact component={AccountRouter}/>  */}
                               {/* inner__dashboard__router end */}
                               <Switch>
                               <Route path='/dashboard' render={(props)=> <Dashboard {...props} />} />
                               </Switch>
                           </Switch>
                        </div>
                       <FooterMain/>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;