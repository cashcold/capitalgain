import React, { Component } from 'react';
import './style.css'
class WithdrawMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='withdraw__main'>
                <h1 className='widthraw__h1'>WITHDRAW FUND</h1>
                <div className="textInfo blink_me alert alert-danger  " role="alert" >
                            <h5>You have no funds to withdraw.</h5>
                </div>
                <div className="All__flow__withdraw">
                    <section className='withdraw__box__1'>
                      <div className="flow__text">
                            <div className="with__inner__box_1">
                                <h4 className='style__h4'>Account Balance:</h4>
                            </div>
                            <div className="with__inner__box_1">
                                <h4>$0.00</h4>
                            </div>
                            <div className="with__inner__box_1">
                                <h4 className='style__h4'>Pending Withdrawals:</h4>
                            </div>
                            <div className="with__inner__box_1">
                                <h4>$0.00</h4>
                            </div>
                      </div>
                    </section>
                    <section className='widthdraw__info'>
                        <div className="width__process__1">
                            <h4>Processing</h4>
                        </div>
                        <div className="width__process__1">
                            <h4>Available</h4>
                        </div>
                        <div className="width__process__1">
                            <h4>Pending</h4>
                        </div>
                    </section>
                    <section className='width__method'>
                        <div className="method__box">
                            <h4><i class="fab fa-bitcoin"></i>Bitcoin</h4>
                        </div>
                        <div className="method__box">
                            <h4 className='btn btn-success'>$0.00</h4>
                        </div>
                        <div className="method__box">
                            <h4  className='btn btn-danger'>$0.00</h4>
                        </div>
                        {/* <div className="method__box">
                            <h4  className='btn btn-primary'>14VoBZY3Pap6NUeTxNttspyGHBx92d1wAh</h4>
                        </div> */}
                    </section>
                    <section className='wallet'>
                        <div className="iconWallet">
                        <i class="fas fa-wallet fa-3x"></i>
                        </div>
                        <div className="wallet__id">
                            <h4>wallet address</h4>
                        </div>
                        <div className="wallet__id">
                            <h4>14VoBZY3Pap6NUeTxNttspyGHBx92d1wAh</h4>
                        </div>
                       
                    </section>
                  
                </div>
              
            </div>
         );
    }
}
 
export default WithdrawMain;