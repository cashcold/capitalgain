import React, { Component } from 'react';
import './style.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            amountCalculate: ''
         }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = input => (event)=>{
        this.setState({[input]: event.target.value})
        
    }

    componentDidMount(){
        const RegisterHomeTrigger = ()=>{
            gsap.registerPlugin(ScrollTrigger)

            const home__main__box__1 = document.querySelector('.home__main__box__1')
            const home__box__h1 = document.querySelector('.home__box__h1')
            const home__box__h3 = document.querySelector('.home__box__h3')
            const flowAnimate = document.querySelectorAll('.flowAnimate')
            const home__box__2_image = document.querySelector('.home__box__2_image')

            const home__mainTl =  new TimelineLite({
                scrollTrigger: {
                    trigger:  home__main__box__1,
                    start: "0px 80%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })  
            
            home__mainTl.from(home__box__h1,{opacity: 0, duration: 1, ease: "slow(0.1, 0.1, false)", x:'-800',y: '8000' })
            home__mainTl.from(home__box__h3,{opacity: 0, duration: 1, ease: "slow(0.4, 0.7, false)", x:'-800', })
            home__mainTl.from(flowAnimate,{opacity: 0, duration: 1, ease: "slow(0.4, 0.7, false)", x:'800',  stagger: 0.5})
            home__mainTl.from(home__box__2_image,{opacity: 0, duration: 1, ease: "slow(0.4, 0.7, false)", x:'-800'})

        }

        RegisterHomeTrigger()
    }
    render() { 
        const CalculatorEngine = ()=>{
           if( this.state.amountCalculate){
                if( this.state.amountCalculate < 2000){
                const Percentage = this.state.amountCalculate * 9.5/100
               document.querySelector('.totalAmount').innerHTML = "$"+Percentage
               document.querySelector('.percent_check').innerHTML = "9.5"
               document.querySelector('.planNowType').innerHTML = "PLAN I"
                }
 
            }
           if( this.state.amountCalculate){
                if( this.state.amountCalculate > 2001){
                const Percentage = this.state.amountCalculate * 29/100
               document.querySelector('.totalAmount').innerHTML = "$"+Percentage
               document.querySelector('.percent_check').innerHTML = "29"
               document.querySelector('.planNowType').innerHTML = "PLAN II"
                }
 
            }
           if( this.state.amountCalculate){
                if( this.state.amountCalculate > 4001){
                const Percentage = this.state.amountCalculate * 48/100
               document.querySelector('.totalAmount').innerHTML = "$"+Percentage
               document.querySelector('.percent_check').innerHTML = "48"
               document.querySelector('.planNowType').innerHTML = "PLAN III"
                }
 
            }
           if( this.state.amountCalculate){
                if( this.state.amountCalculate > 6001){
                const Percentage = this.state.amountCalculate * 29/100
               document.querySelector('.totalAmount').innerHTML = "$"+Percentage
               document.querySelector('.percent_check').innerHTML = "68"
               document.querySelector('.planNowType').innerHTML = "PLAN IIII"
                }
 
            }
              
        }
                
            //    document.querySelector('.toatlProfit').style.cssText = "font-size: 30px"
            //    document.querySelector('.toatalAllMoney').innerHTML ="$"+OverAllProfit + " TOATAL PROFIT RECEIVED   "
            //    document.querySelector('.toatalAllMoney').style.cssText = "display: block; font-size: 30px " 
        CalculatorEngine()
        console.log(this.state.amountCalculate)
        return ( 
            
            <div className='main__home'>
                <section className='home__main__box__1'>
                        <div className="home__box__1">
                            <div className='home__h1'>
                                <h1 className='home__box__h1'>Capital Gain Management Co.</h1>
                                <h3 className='home__box__h3'>Earn up to 12% Daily, Easily with 3 STEPS</h3>
                            </div>
                         <div className="home__flow__box">
                            <div className="flow__box__1 flow__boxMe flowAnimate">
                                 <i class="fas fa-user fa-3x flowAnimate"></i>
                                 <hr className='flowAnimate'/>
                                 <p className='flowAnimate'>Open a Free Account</p>
                                 <a href='#' className='btn-home flowAnimate'>Sign-up</a>
                            </div>
                            <div className="flow__box__2 flow__boxMe flowAnimate">
                                 <i class="fas fa-user fa-3x flowAnimate"></i>
                                 <hr className='flowAnimate'/>
                                 <p className='flowAnimate'>Choose a Plan and Deposit</p>
                                 <a href='#' className='btn-home flowAnimate'>Deposit</a>
                            </div>
                            <div className="flow__box__3 flow__boxMe flowAnimate">
                            <i class="fas fa-user fa-3x flowAnimate"></i>
                                 <hr className='flowAnimate'/>
                                 <p className='flowAnimate'>Withdraw Your Profits</p>
                                 <a href='#' className='btn-home flowAnimate'>Withdraw</a>
                            </div>
                            </div>
                        </div>
                        <div className="home__box__2">
                        <img src={require('../../images/farm-2852024_1920.jpg')} className='home__box__2_image'/> 
                        </div>
                </section>
                <section className='about__investmentt__plan  '>
                    <div className="header__text">
                        <h2>OUR <span>INVESTMENT</span> PLANS</h2>
                    </div>
                    <div className="investmentt__plan">
                         <section className='pricingNow'>
                   <div className='container container__2'>
                       <div className="box_box__1">
                           <h1>PLAN I</h1>
                           <div className="innerPlan innerPlanother">
                               <h1 className='percentRate'>9.5</h1>
                               <h3>%</h3>
                           </div>
                           <h3 className='planType'>DAILY FOREVER</h3>
                           <div className="typeAmount_box_1">
                              <div className="innerTypeAmount">
                                  <p>Min: </p>
                                  <p className='typeAmountSpan'>$10</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Max: </p>
                                  <p className='typeAmountSpan'>$2000</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Withdraw:</p>
                                  <p className='typeAmountSpan'>INSTANT</p>
                              </div>
                           </div>
                       </div>
                       <div className="box_box__1">
                           <h1>PLAN II</h1>
                           <div className="innerPlan innerPlanother">
                               <h1 className='percentRate'>29</h1>
                               <h3>%</h3>
                           </div>
                           <h3 className='planType'>3 DAYS</h3>
                           <div className="typeAmount_box_1">
                              <div className="innerTypeAmount">
                                  <p>Min: </p>
                                  <p className='typeAmountSpan'>$2001</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Max: </p>
                                  <p className='typeAmountSpan'>$4000</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Withdraw:</p>
                                  <p className='typeAmountSpan'>INSTANT</p>
                              </div>
                           </div>
                       </div>
                       <div className="box_box__1">
                           <h1>PLAN III</h1>
                           <div className="innerPlan innerPlanother">
                               <h1 className='percentRate'>48</h1>
                               <h3>%</h3>
                           </div>
                           <h3 className='planType'>5 DAYS</h3>
                           <div className="typeAmount_box_1">
                              <div className="innerTypeAmount">
                                  <p>Min: </p>
                                  <p className='typeAmountSpan'>$4001</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Max: </p>
                                  <p className='typeAmountSpan'>$600</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Withdraw:</p>
                                  <p className='typeAmountSpan'>INSTANT</p>
                              </div>
                           </div>
                       </div>
                       <div className="box_box__1">
                           <h1>PLAN IV</h1>
                           <div className="innerPlan innerPlanother">
                               <h1 className='percentRate'>68</h1>
                               <h3>%</h3>
                           </div>
                           <h3 className='planType'>7 DAYS</h3>
                           <div className="typeAmount_box_1">
                              <div className="innerTypeAmount">
                                  <p>Min: </p>
                                  <p className='typeAmountSpan'>$6001</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Max: </p>
                                  <p className='typeAmountSpan'>$8000</p>
                              </div>
                               <span className='spanMainType'></span>
                              <div className="innerTypeAmount innerTypeAmount2">
                                  <p>Withdraw:</p>
                                  <p className='typeAmountSpan'>INSTANT</p>
                              </div>
                           </div>
                       </div>
                   </div>
                 </section>
                 <section className='calculateMe'>
                     <div className="calcualteNow__box_1">
                        <img src={require('../../images/b72895618be95619a15bd4a0befdf826.png')}/>
                     </div>
                     <div className="calcualteNow__box_2">
                         <h2>CALCULATE <br/><span className='profit'>PROFIT</span></h2>
                     </div>
                     <div className="calcualteNow__box_3">
                         <p><span>Enter Amount</span></p>
                         <input name='amountCalculate' onChange={this.handleChange('amountCalculate')} className='calculateInput'/>
                     </div>
                     <div className="calcualteNow__box_4">
                         <p><span>PLAN</span></p>
                         <p className='planNowType'></p>
                     </div>
                     <div className="calcualteNow__box_5">
                         <p><span>DAILY EARNING</span></p>
                         <p className='totalAmount'>$0</p>
                     </div>
                     <div className="calcualteNow__box_6">
                         <p><span>DAILY PROFIT</span></p>
                         <p className='percent_check'>%</p>
                     </div>
                 </section>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Home;