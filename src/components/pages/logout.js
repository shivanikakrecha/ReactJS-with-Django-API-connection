import React from 'react'
import {history} from "../history";


export default class Logout extends React.Component {

    componentDidMount() {
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_first_name');
        localStorage.removeItem('user_last_name');
        history.push('/');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h1 className="loading-text">
                    Logging out...
                </h1>
            </div>
        );
    }
}