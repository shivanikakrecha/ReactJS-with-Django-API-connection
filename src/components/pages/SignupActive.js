import React from 'react'
import {Link} from 'react-router-dom';
import Config from "../api_path";
import {apiMethods} from "../front_Connection";


export default class SignupActive extends React.Component {
    handleClick(){
        debugger;
        const API_URL = Config['api']['email_verify'];
        const requestData = {};
        return apiMethods.get(API_URL, requestData, true)

    }
    render() {
        return (
            <div className="auth">
                <div className="container main center">
                    <div className="row">

                        <div className="container logo">
                            <Link to="/">BLOCKTRDEDESK</Link>
                        </div>

                        <div className="bg">
                            <div id="background"></div>
                        </div>

                        <div className="col-md-5 box">
                            <h1>Authorization</h1>

                            <p className="notice">For the authorization, open your email first and authorize the
                                device.</p>

                            <div className="row buttons">

                                <div className="col-md-6">
                                    <Link to='/'><button type="submit" className="btn btn-primary back">
                                        Cancel</button></Link>
                                </div>

                                <div className="col-md-6">
                                    {/*<Link to='/signup/phone/'>*/}
                                        <button type="submit" className="btn btn-primary icon" onClick={this.handleClick}>
                                        Next</button>
                                    {/*</Link>*/}
                                </div>

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