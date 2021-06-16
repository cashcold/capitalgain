import React, { Component } from 'react';
import './style.css'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='dashboard__main'>
                <section className='dashboard__section_box__1'>
                    <h1>MY <span>DASHBOARD</span></h1>
                </section>
                <section className='dashboard__section_box__2'>
                    <ul>
                        <li><a href=''>ACCOUNT</a></li>
                        <li><a href=''>DEPOSIT</a></li>
                        <li><a href=''>DEPOSIT LIST</a></li>
                        <li><a href=''>WITHDRAW</a></li>
                        <li><a href=''>TRANSACTION</a></li>
                        <li><a href=''>EDIT</a></li>
                        <li><a href=''>SECURITY</a></li>
                        <li><a href=''>SIGN-OUT</a></li>
                    </ul>
                </section>
                <section className='dashboard__section_box__3'>
                    <div className="dash__box__1">
                        <i class="fas fa-coins fa-5x"></i>
                        <div className="dashText">
                            <h5>TOTAL INVESTMENT</h5>
                            <h5> $ 0.00</h5>
                        </div>
                        <h2 className='btn'>INVEST</h2>
                    </div>
                    <div className="dash__box__1">
                        <i class="fas fa-comments-dollar fa-5x"></i>
                        <div className="dashText">
                            <h5>ACCOUNT BALANCE</h5>
                            <h5> $ 0.00</h5>
                        </div>
                        <h2 className='btn'>WITHDRAW</h2>
                    </div>
                </section>

            </div>
         );
    }
}
 
export default Dashboard;