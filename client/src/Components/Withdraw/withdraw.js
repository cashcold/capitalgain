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
                <h1>WITHDRAW FUND</h1>
                <section className='withdraw__box__1'>
                    <div className="with__inner__box_1"></div>
                </section>
            </div>
         );
    }
}
 
export default WithdrawMain;