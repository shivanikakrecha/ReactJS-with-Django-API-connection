import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div class="forgotpassword">
                <div className="container main center">
                    <div className="row">

                        <div className="container logo">
                            <Link to="/">BLOCKTRDEDESK</Link>
                        </div>

                        <div className="bg">
                            <div id="background"></div>
                        </div>

                        <div className="col-md-5 box">
                            <p>Select which contact details should we use to reset your password.</p>

                            <div className="row">
                                <Link to='/signup/otp'>
                                    <div className="btn btn-primary action">
                                        <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 lefticon"><img
                                            className="sms img-responsive" src="img/via_mobile.png" alt="img/via_mobile.png"/></div>
                                        <div className="col-lg-8 col-md-8 col-xs-8 col-sm-8 content">
                                            <span className="light">Via sms</span>
                                            <span>**** **** 98</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="row">
                                <Link to='signup/verify'>
                                    <div className="btn btn-primary action">
                                        <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 lefticon"><img
                                            className="mail img-responsive" src="img/via_mail.png" alt="img/via_mail.png"/></div>
                                        <div className="col-lg-8 col-md-8 col-xs-8 col-sm-8 content">
                                            <span className="light">Via email</span>
                                            <span>******mn@abc.com</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

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