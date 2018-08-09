import React from 'react'
import {history} from "../history";
import {apiMethods} from "../front_Connection";
import Config from "../api_path";
import {Link} from 'react-router-dom';



export default class PhoneVrf extends React.Component {
    constructor(props){
        debugger;
        super(props);
        this.state = {
            cc: '',
            number: '',
            cache_email: localStorage.getItem('user_email') ? localStorage.getItem('user_email') : '',
            sumitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
        debugger;
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        debugger;
        e.preventDefault();
        this.setState({submitted: true});
        const {number, cache_email} = this.state;
        // let email = "shivanikakrecha@gmail.com";
        let email = cache_email ? cache_email : this.state.email;
        let phone = this.state.cc + number;

        if (phone && email) {
            phonenu_verify(email, phone).then(
                data => {
                    if (data){
                        localStorage.setItem('user_phone', phone);
                        history.push('/signup/otp');
                    }
                },
            );
        }

    }

    render() {
        const {number} = this.state;

        return (
            <div className="phone">
                <div className="container main center">
                    <div className="row">

                        <div className="container logo">
                            <Link to="/">BLOCKTRDEDESK</Link>
                        </div>

                        <div className="bg">
                            <div id="background"></div>
                        </div>

                        <div className="col-md-5 box">
                            <h1>Enter Your Phone Number</h1>

                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group cc">
                                    <input type="text" className="form-inline" defaultValue="+12" onChange={this.handleChange}
                                           name="cc" maxLength="3" required/>
                                </div>
                                <div className="form-group mobile">
                                    <input type="text" maxLength="10" className="form-inline"
                                           name="number" value={number}
                                           onChange={this.handleChange} required autoFocus/>
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

function phonenu_verify(email, phone) {

    const API_URL = Config['api']['sms'];
    const requestData = JSON.stringify({email, phone});
    return apiMethods.post(API_URL, requestData)

}