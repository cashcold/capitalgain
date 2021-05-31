import React, { Component } from 'react';
import './style.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                        <h1>OUR <span>INVESTMENT</span> PLANS</h1>
                    </div>
                    <div className="investmentt__plan">
                         <section className='pricingNow'>
                   <div className='title '>Choose Your Plan</div>
                   <div className='container container__2'>
                       <div className="box box__1">
                           <h1>15%</h1>
                           <h2 className='popular__1'>BEGINNER</h2>
                           <div className="price">PLAN: DAILY 24HRS</div>
                          <div className="all__plan">
                              <div className="plan__me">
                                    <i class="fas fa-handshake fa-3x"></i>
                                    <div className="text__content">MINIMUM - 5.00 USD</div>
                                    <hr/>
                                    <div className="text__content">MINIMUM - 99.00 USD</div>
                              </div>
                          </div>
                           
                           <div className="bothInner">
                                <a href='/calculate'  target='_blank' className='btn btn-warning'>Calculate</a>
                               </div>
                       </div>
                   </div>
                 </section>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Home;