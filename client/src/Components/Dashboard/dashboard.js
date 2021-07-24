import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, useParams ,useRouteMatch} from 'react-router-dom'
import AccountRouter from '../InnerRouter/accountRouter/accountRouter';
import Account from '../InnerRouter/accountRouter/accountRouter'
import EditMainRouter from '../Edit/edit';
import WithdrawMain from '../Withdraw/withdraw';
import './style.css'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: ''
         }
    }
    componentDidMount(){
        // const url = this.props.match.path;
        // this.setState({
        //     url
        // })
    }
    render() { 
        return ( 
            <div className='dashboard__main'>
                <section className='dashboard__section_box__1'>
                    <h1>MY <span>DASHBOARD</span></h1>
                </section>
                <section className='dashboard__section_box__2'>
                    <ul>
                        <li ><a href='/dashboard/account_dash' >ACCOUNT</a></li>
                        <li><a href=''>DEPOSIT</a></li>
                        <li><a href=''>DEPOSIT LIST</a></li>
                        <li><a href='/dashboard/withdraw'>WITHDRAW</a></li>
                        <li><a href=''>TRANSACTION</a></li>
                        <li><a href={`/dashboard/edit`}>EDIT</a></li>
                        <li><a href=''>SECURITY</a></li>
                        <li><a href=''>SIGN-OUT</a></li>
                    </ul>
                </section>
                <Switch>    
                        <Route path='/dashboard/edit'  exact  component={EditMainRouter}/> 
                        <Route path='/dashboard/account_dash'  exact component={AccountRouter}/> 
                        <Route path='/dashboard/withdraw'  exact component={WithdrawMain}/> 
                </Switch>
            </div>
         );
    }
}
 
export default Dashboard;