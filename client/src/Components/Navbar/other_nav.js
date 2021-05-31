import React, { Component } from 'react';
import {addDays,addMinutes} from "date-fns"
class Other__NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentDateTime: '',
            month: ''
         }
    }

    componentDidMount(){
        const CheckDateTime = ()=>{
           
            var currentTime = new Date()
            var hours = currentTime.getHours()
            var minutes = currentTime.getMinutes()
            var sec = currentTime.getSeconds()

            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];

            const d = new Date();
            const date__check = monthNames[d.getMonth()]
           


            var date = currentTime.getDate()+'-'+date__check+'-'+ currentTime.getFullYear();
          


            if (minutes < 10){
                minutes = "0" + minutes
            }
            if (sec < 10){
                sec = "0" + sec
            }
            var t_str = date + ', ' +  ' ' + hours + ":" + minutes + ":" + sec + " ";
            if(hours > 11){
                t_str += "PM";
            } else {
               t_str += "AM";
            }
            this.setState({
                currentDateTime: t_str
            })
           
        }
        CheckDateTime()
        setInterval(CheckDateTime,1000)

      
    }
    render() { 
        return ( 
            <div className='other__navMe'>
                  <section className='other__navbar'>
                    <div className="other__navFlow">
                        <section className='other_bar_flow'>
                            <div className="other__nav_chat__1">
                            <p><i class="far fa-clock fa-2x"></i> {this.state.currentDateTime}</p>
                            </div>
                            <div className="other__nav_chat__2">
                                <p><i class="fab fa-telegram-plane fa-2x"> </i> Telegram Chat</p>
                            </div>
                            <div className="other__nav_chat__3">
                                <p><i class="fab fa-bitcoin fa-2x other__i__1"></i> $55077.53 </p>
                                 <p><i class="fab fa-ethereum  fa-2x other__i__2"></i> ETH $4159.69</p>
                                 <p><img src={require('../../images/Bitcoin-Cash-BCH-icon.png')} className='other__i__3'/> $1417.490</p>
                                 <p><img src={require('../../images/download.png')} className='other__i__4'/> $0.465</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Other__NavBar;