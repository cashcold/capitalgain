import React, { Component } from 'react';
import './style.css'
class AccountRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='account__router'>
                 <section className='dashboard__section_box__3'>
                    <div className="dash__box__1">
                        <i class="fas fa-coins fa-5x"></i>
                        <div className="dashText">
                            <h5>ACTIVTE DEPOSIT</h5>
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
                <section className='welcome__user'>
                    <div className="welcomeText">
                        <h3>Welcome Cashcold99!</h3>
                        <h3>Last Account Access : Jun-15-2021 08:37:12 PM</h3>
                    </div>
                </section>
                <section className='about__all'>
                    <div className="all__about_-box__1">
                        <h3>DEPOSIT HISTORY</h3>
                        <div className="all__box">
                            <p>Active Deposit :</p>
                            <p>$0.00</p>
                        </div>
                        <div className="all__box">
                            <p>Total Deposit :</p>
                            <p>$0.00</p>
                        </div>
                        <div className="all__box">
                            <p>Last Deposit :</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="all__about_-box__1">
                        <h3>WITHDRAW HISTORY</h3>
                        <div className="all__box">
                            <p>Pending Withdraw :</p>
                            <p>$0.00</p>
                        </div>
                        <div className="all__box">
                            <p>Total Withdraw :</p>
                            <p>$0.00</p>
                        </div>
                        <div className="all__box">
                            <p>Last Withdraw :</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                </section>
                <section className='reffer__link'>
                    <div className="refferNow">
                        <div className="reff__box_1">
                             <i class="fas fa-users fa-10x"></i>
                        </div>
                        <div className="reff__box_2">
                            <h2>Personal <span>Referral</span> Link:</h2>
                           <p className='reffLink'>https://capitalgain/?ref=cashcold99</p>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default AccountRouter;