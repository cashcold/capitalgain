import React, { Component } from 'react';
import './style.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='loginMain'>
                <section className='login__box__login'>
                         <h1>MEMBER <span>LOG IN</span></h1>
                        <div className='formMain_login'>
                            <form>
                                <table className='formTable_login'>
                                    <tr>
                                         <td><label>Your Username: </label></td>
                                        <td><input  className='' type='text' name='user_Name' /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Your Password: </label></td>
                                        <td><input  className='' type='email' name='email'  /></td>
                                    </tr>
                                </table>
                            </form>
                         
                            <div className="a_Links">
                                <a href='' className='btn btn-warning'>Forgot Password</a>
                                <a href=''  className='btn btn-danger'>Login</a>
                            </div>
                        </div>
                </section>
            </div>
         );
    }
}
 
export default Login;