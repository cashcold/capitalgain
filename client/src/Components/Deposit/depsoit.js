import React, { Component } from 'react';
import './style.css'
class DepositMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='depositMain'>
                <section className='deposit__box__1'>
                    <div className="deposit__1">
                        <h1>NEW DEPOSIT</h1>
                        <div className="depositInfo__lay__1">
                            <h3>Plan 1</h3>
                        </div>
                        <div className="depositInfo__lay__2">
                             <div className="depositInfo__box__1">
                                 <div className="depositInfo__box__1">
                                    <div className="depositInfo__innerbox__1">
                                        <h4>Plan</h4>
                                        <h4>Spent Amount ($)</h4>
                                        <h4>Profit (%)</h4>
                                    </div>
                                 </div>
                             </div> 
                             <div className="depositInfo__box__2">
                                     <div className="depositInfo__box__1">
                                        <div className="depositInfo__innerbox__1">
                                            <h4>Plan 1</h4>
                                            <h4>$20.00 - $50000.00	</h4>
                                            <h4>9.5</h4>
                                        </div>
                                    </div>
                             </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default DepositMain;