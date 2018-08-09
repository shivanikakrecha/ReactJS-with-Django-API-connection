import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import SignUp from "./signup";
import ForgotPassword from "./forgot_password";
import SignupActive from "./SignupActive";
import PhoneVrf from "./phone_nu";
import OTP from "./otp";
import {history} from "../history";
import {apiMethods} from "../front_Connection";
import Dashboard from "./dashboard";
import Logout from "./logout";

let Config = require('../api_path');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            submitted: true
        });
        const {email, password} = this.state;

        if (email && password) {
            login(email, password).then(
                data => {
                    if (data) {
                        localStorage.setItem('user_token', '8b39a7cabe0af29357e64121a54031a57d2f5544');
                        localStorage.setItem('user_first_name', data.first_name);
                        localStorage.setItem('user_last_name', data.last_name);
                        // this.props.setLoginProp();
                        history.push('/dashboard/');
                    }
                },
            );
        }
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="container main center">
                <Switch>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/forgot-password' component={ForgotPassword}/>
                    <Route exact path="/signup/verify/" component={SignupActive}/>
                    <Route exact path="/signup/phone/" component={PhoneVrf}/>
                    <Route exact path="/signup/otp/" component={OTP}/>
                    <Route exact path="/dashboard/" component={Dashboard}/>
                    <Route exact path="/logout/" component={Logout}/>


                    <div className="row">

                        <div className="container logo">
                            <Link to="/">BLOCKTRADEDESK</Link>
                        </div>

                        <div className="bg">
                            <div id="background"></div>
                        </div>

                        <div className="col-md-5 box">
                            <h1>Welcome, Login yourself first</h1>

                            <form onSubmit={this.handleSubmit} method='post'>
                                <div className="form-group">
                                    <input type="text" className="form-control email"
                                           name="email" value={email} onChange={this.handleChange} required autoFocus/>
                                    <span className="flabel">Email</span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control password" id="inputPassword"
                                           name="password" value={password} onChange={this.handleChange} required/>
                                    <span className="flabel">Password</span>
                                </div>
                                <button type="submit" className="btn btn-primary icon">Login</button>
                            </form>

                            <p className="forgot"><Link to='/forgot-password'>Forgot password?</Link></p>
                            <p className="reglink">Don't have an account?
                                <Link to='/signup'> Register</Link></p>

                        </div>

                        <div className="container links">
                            <Link to="/">Help</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Terms & Conditions</Link>
                        </div>
                    </div>
                </Switch>
            </div>

        )
    }
}

function login(email, password) {
    debugger;
    const API_URL = Config['api']['signin'];
    const requestData = JSON.stringify({email, password});
    return apiMethods.post(API_URL, requestData)
}
