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
                <h1 className='newDeposit'>NEW <span>DEPOSIT</span></h1>
                <div className="allSection">
                <section className='deposit__box__1'>
                    <div className="deposit__1">
                        <div className="depositInfo__lay__1">
                            <h3> <input type='radio' name='planNow'   className='planBtn4'/>  Plan 1</h3>
                        </div>
                        <div className="depositInfo__lay__2">
                             <div className="depositInfo__box__1">
                                 <div className="depositInfo__box__1">
                                    <div className="depositInfo__innerbox__1">
                                        <h4><span>Plan</span></h4>
                                        <h4><span>Spent Amount ($)</span></h4>
                                        <h4><span>Profit (%)</span></h4>
                                    </div>
                                 </div>
                             </div> 
                             <div className="depositInfo__box__2">
                                     <div className="depositInfo__box__1">
                                        <div className="depositInfo__innerbox__1">
                                            <h4>24HRS</h4>
                                            <h4>$20.00 - $50000.00	</h4>
                                            <h4>9.5<br/><a href=''>Calculate your profit</a></h4>
                                        </div>
                                    </div>
                             </div>
                        </div>
                    </div>
                </section>
                <section className='deposit__box__1'>
                    <div className="deposit__1">
                        <div className="depositInfo__lay__1">
                            <h3> <input type='radio' name='planNow'   className='planBtn4'/>  Plan 2</h3>
                        </div>
                        <div className="depositInfo__lay__2">
                             <div className="depositInfo__box__1">
                                 <div className="depositInfo__box__1">
                                    <div className="depositInfo__innerbox__1">
                                        <h4><span>Plan</span></h4>
                                        <h4><span>Spent Amount ($)</span></h4>
                                        <h4><span>Profit (%)</span></h4>
                                    </div>
                                 </div>
                             </div> 
                             <div className="depositInfo__box__2">
                                     <div className="depositInfo__box__1">
                                        <div className="depositInfo__innerbox__1">
                                            <h4>Plan 2</h4>
                                            <h4>$20.00 - $50000.00	</h4>
                                            <h4>9.5<br/><a href=''>Calculate your profit</a></h4>
                                        </div>
                                    </div>
                             </div>
                        </div>
                    </div>
                </section>
                <section className='deposit__box__1'>
                    <div className="deposit__1">
                        <div className="depositInfo__lay__1">
                            <h3> <input type='radio' name='planNow'   className='planBtn4'/>  Plan 3</h3>
                        </div>
                        <div className="depositInfo__lay__2">
                             <div className="depositInfo__box__1">
                                 <div className="depositInfo__box__1">
                                    <div className="depositInfo__innerbox__1">
                                        <h4><span>Plan</span></h4>
                                        <h4><span>Spent Amount ($)</span></h4>
                                        <h4><span>Profit (%)</span></h4>
                                    </div>
                                 </div>
                             </div> 
                             <div className="depositInfo__box__2">
                                     <div className="depositInfo__box__1">
                                        <div className="depositInfo__innerbox__1">
                                            <h4>Plan 3</h4>
                                            <h4>$20.00 - $50000.00	</h4>
                                            <h4>9.5<br/><a href=''>Calculate your profit</a></h4>
                                        </div>
                                    </div>
                             </div>
                        </div>
                    </div>
                </section>
                <section className='deposit__box__1'>
                    <div className="deposit__1">
                        <div className="depositInfo__lay__1">
                            <h3> <input type='radio' name='planNow'   className='planBtn4'/>  Plan 4</h3>
                        </div>
                        <div className="depositInfo__lay__2">
                             <div className="depositInfo__box__1">
                                 <div className="depositInfo__box__1">
                                    <div className="depositInfo__innerbox__1">
                                        <h4><span>Plan</span></h4>
                                        <h4><span>Spent Amount ($)</span></h4>
                                        <h4><span>Profit (%)</span></h4>
                                    </div>
                                 </div>
                             </div> 
                             <div className="depositInfo__box__2">
                                     <div className="depositInfo__box__1">
                                        <div className="depositInfo__innerbox__1">
                                            <h4>Plan 4</h4>
                                            <h4>$20.00 - $50000.00	</h4>
                                            <h4>9.5<br/><a href=''>Calculate your profit</a></h4>
                                        </div>
                                    </div>
                             </div>
                        </div>
                    </div>
                </section>
                <section className='deposit__box__1'>
                    <div className="deposit__1">
                        <div className="depositInfo__lay__1">
                            <h3> <input type='radio' name='planNow'   className='planBtn4'/>  Plan 5</h3>
                        </div>
                        <div className="depositInfo__lay__2">
                             <div className="depositInfo__box__1">
                                 <div className="depositInfo__box__1">
                                    <div className="depositInfo__innerbox__1">
                                        <h4><span>Plan</span></h4>
                                        <h4><span>Spent Amount ($)</span></h4>
                                        <h4><span>Profit (%)</span></h4>
                                    </div>
                                 </div>
                             </div> 
                             <div className="depositInfo__box__2">
                                     <div className="depositInfo__box__1">
                                        <div className="depositInfo__innerbox__1">
                                            <h4>Plan 5</h4>
                                            <h4>$20.00 - $50000.00	</h4>
                                            <h4>9.5<br/><a href=''>Calculate your profit</a></h4>
                                        </div>
                                    </div>
                             </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
         );
    }
}
 
export default DepositMain;