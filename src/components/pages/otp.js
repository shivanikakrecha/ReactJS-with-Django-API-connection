import React from 'react'
import Config from "../api_path";
import {apiMethods} from "../front_Connection";
import {history} from "../history";
import {Link} from 'react-router-dom';



export default class OTP extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            cache_email: localStorage.getItem('user_email') ? localStorage.getItem('user_email') : '',
            cache_phone: localStorage.getItem('user_phone') ? localStorage.getItem('user_phone') : '',
            sumitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        debugger;
        e.preventDefault();
        this.setState({
            submitted: true,
        });
        const {otp1, otp2, otp3, otp4, cache_email, cache_phone} = this.state;
        // let email = 'xyz@gmail.com';
        let email = cache_email ? cache_email : this.state.email;
        // let phone = '+919412389567';
        let phone = cache_phone ? cache_phone : this.state.phone;
        let otp = otp1 + otp2 + otp3 + otp4;

        if (email && phone && otp){
            sms_activate(email, phone, otp).then(
                data => {
                    if(data){
                        localStorage.setItem('user_otp', otp);
                        history.push('/dashboard')
                        
                    }   
                }
            )
        }

    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="phone recovery">
                <div className="container main center">
                    <div className="row">

                        <div className="container logo">
                            <Link to="/">BLOCKTRDEDESK</Link>
                        </div>

                        <div className="bg">
                            <div id="background"></div>
                        </div>

                        <div className="col-md-5 box">
                            <h1>Enter 4-digit recovery number</h1>

                            <p className="notice">Enter the 4-digit number below sent to your Mobile number or Email
                                address.</p>

                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group cc">
                                    <input type="text" className="form-inline autonext"
                                           name="otp1" onChange={this.handleChange}
                                           maxLength="1" required autoFocus/>
                                </div>
                                <div className="form-group cc">
                                    <input type="text" className="form-inline autonext"
                                           name="otp2" onChange={this.handleChange}
                                           maxLength="1" required/>
                                </div>
                                <div className="form-group cc">
                                    <input type="text" className="form-inline autonext"
                                           name="otp3" onChange={this.handleChange}
                                           maxLength="1" required/>
                                </div>
                                <div className="form-group cc">
                                    <input type="text" className="form-inline autonext"
                                           name="otp4" onChange={this.handleChange}
                                           maxLength="1" required/>
                                </div>


                                <button type="submit" className="btn btn-primary icon">Next</button>
                            </form>


                        </div>

                        <div className="container links">
                            <Link to="/">Help</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Terms & Conditions</Link>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

function sms_activate(email, phone, otp) {
    const API_URL = Config['api']['sms_otp'];
    const requestData = JSON.stringify({email, phone, otp});
    return apiMethods.post(API_URL, requestData)
}
