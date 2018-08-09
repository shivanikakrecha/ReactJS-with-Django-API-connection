import React from 'react'
import {Link} from 'react-router-dom';


export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="auth">
                <div className="container main center">
                    <h1> Dashboard </h1>
                    <Link to="/logout"><h1>Logout</h1></Link>
                </div>
            </div>
        )
    }
}