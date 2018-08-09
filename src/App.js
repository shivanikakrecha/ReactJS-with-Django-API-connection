import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {history} from "../src/components/history";
import Login from "./components/pages/login";
import '../src/static/css/animate.min.css';
import '../src/static/css/bootstrap.min.css';
import '../src/static/css/fontawesome.min.css';
import '../src/static/css/responsive.css';
import '../src/static/css/style.css';
import 'toastr/build/toastr.css';
// import '../src/static/js/toastr.min';
// import '../src/static/js/jquery.min';
// import '../src/static/js/bootstrap.min';
// import '../src/static/js/waypoints.min';
// import '../src/static/js/particles.min';
// import '../src/static/js/animations';



class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Login/>
                </div>
            </Router>
        );
    }
}

export default App;
