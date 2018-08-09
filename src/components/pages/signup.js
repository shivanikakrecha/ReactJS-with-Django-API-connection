import React from 'react'
import {Link} from 'react-router-dom';
import Config from "../api_path";
import {apiMethods} from "../front_Connection";
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import {history} from "../history";

let randomInt = require('random-int');


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            RandomNu1: randomInt(0, 9),
            RandomNu2: randomInt(0, 9),
            RandomAns: '',
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        const {user} = this.state;
        this.setState({
            [name]: value,
            user: {
                ...user,
                [name]: value
                }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submitted: true
        });
        let ans = this.state.RandomAns;
        let n1 = this.state.RandomNu1;
        let n2 = this.state.RandomNu2;
        let result = n1 + n2;
        var g = parseInt(ans);
        if (result !== g){
            toastr.error("Please Enter a valid captcha.")
        }

        const {user} = this.state;
        if (user.first_name && user.last_name && user.email && user.password && user.password === user.confirm_password) {
            register(user).then(
                data => {
                    if (data) {
                        localStorage.setItem('user_email', user.email);
                        console.log(user.email)
                        history.push('/signup/verify/');
                    }
                },
            );
        }
    }


    render() {
        const {user, RandomAns} = this.state;
        return (
            <div className="register">
                <div className="container main center">
                    <div className="row">

                        <div className="container logo">
                            <Link to="/">BLOCKTRDEDESK</Link>
                        </div>

                        <div className="bg">
                            <div id="background"></div>
                        </div>

                        <div className="col-md-5 box">
                            <h1>Welcome, Please Register Yourself</h1>

                            <form onSubmit={this.handleSubmit} method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control email"
                                           name='email' value={user.email} onChange={this.handleChange} required
                                           autoFocus/>
                                    <span className="flabel">Email</span>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control name" name="first_name"
                                           value={user.first_name} onChange={this.handleChange} required autoFocus/>
                                    <span className="flabel">First name</span>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control name" name="last_name"
                                           value={user.last_name} onChange={this.handleChange} required autoFocus/>
                                    <span className="flabel">Last name</span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control password" name="password"
                                           value={user.password} onChange={this.handleChange} required/>
                                    <span className="flabel">Password</span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control password" name="confirm_password"
                                           value={user.confirm_password} onChange={this.handleChange} required/>
                                    <span className="flabel">Confirm Password</span>
                                </div>

                                <div className="form-group">
                                    <label className="dark" htmlFor="captcha">{this.state.RandomNu1} + {this.state.RandomNu2} </label>
                                    <input type="text" className="form-inline captcha" id="captcha" name="RandomAns"
                                           value={RandomAns} onChange={this.handleChange}
                                           required/>
                                </div>


                                <div className="check tnc form-group ">
                                    <input type="checkbox" className="form-control " id="tnc" required />
                                    <label htmlFor="tnc">I accept <Link to="/">Terms & Conditions</Link></label>
                                </div>

                                <button type="submit" className="btn btn-primary icon">Register</button>
                            </form>

                            <p className="loginlink">Already have an account? <Link to={'/'}>Login</Link></p>

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


function register(user) {
    const API_URL = Config['api']['signup'];
    const requestData = JSON.stringify(user);
    return apiMethods.post(API_URL, requestData)
}
