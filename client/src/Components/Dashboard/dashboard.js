import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, useParams ,useRouteMatch,Link} from 'react-router-dom'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import AccountRouter from '../InnerRouter/accountRouter/accountRouter';
import Account from '../InnerRouter/accountRouter/accountRouter'
import EditMainRouter from '../Edit/edit';
import WithdrawMain from '../Withdraw/withdraw';

import './style.css'
import TotalTransaction from '../Transacttion/transaction';
import DepositMain from '../Deposit/depsoit';
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
                    {/* <h1>MY <span>DASHBOARD</span></h1> */}
                    
                     <DropdownButton className='dashboard_bot_drop' id="dropdown-item-button" title="MY DASHBOARD">
                        <Dropdown.Item  href='/dashboard/account'>ACCOUNT</Dropdown.Item>
                        <Dropdown.Item  href='/dashboard/deposit'>DEPOSIT</Dropdown.Item>
                        <Dropdown.Item  href='/'>DEPOSIT LIST</Dropdown.Item>
                        <Dropdown.Item  href='/dashboard/withdraw'>WITHDRAW</Dropdown.Item>
                        <Dropdown.Item  href='/dashboard/transaction/total_transaction'>TRANSACTION</Dropdown.Item>
                        <Dropdown.Item  href='/dashboard/edit'>EDIT</Dropdown.Item>
                        <Dropdown.Item  href='/'>SECURITY</Dropdown.Item>
                        <Dropdown.Item  href=''>SIGN-OUT</Dropdown.Item>
                    </DropdownButton>
                </section>
                <section className='dashboard__section_box__2'>
                    <ul className='dashboard_a'>
                        <li ><a href='/dashboard/account' >ACCOUNT</a></li>
                        <li><a href='/dashboard/deposit'>DEPOSIT</a></li>
                        <li><a href=''>DEPOSIT LIST</a></li>
                        <li><a href='/dashboard/withdraw'>WITHDRAW</a></li>
                        <li><a href='/dashboard/transaction/total_transaction'>TRANSACTION</a></li>
                        <li><a href={`/dashboard/edit`}>EDIT</a></li>
                        <li><a href=''>SECURITY</a></li>
                        <li><a href=''>SIGN-OUT</a></li>
                    </ul> 
                </section>
                <Switch>    
                        <Route path='/dashboard/edit'  exact  component={EditMainRouter}/> 
                        <Route path='/dashboard'  exact component={AccountRouter}/> 
                        <Route path='/dashboard/account'  exact component={AccountRouter}/> 
                        <Route path='/dashboard/withdraw'  exact component={WithdrawMain}/> 
                        <Route path='/dashboard/deposit'  exact component={DepositMain}/> 
                        <Route path='/dashboard/transaction/total_transaction'  exact component={TotalTransaction}/> 
                </Switch>
            </div>
         );
    }
}
 
export default Dashboard;