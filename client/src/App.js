import React, { Component } from "react";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
// import LoginNav from "./components/LoginNav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SavedItems from "./pages/SavedItems";
import AddItem from "./pages/AddItem";
import Stock from "./pages/Stock";
import ChartItems from "./pages/ChartItems";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
        // placeholder ternary to check if loggedIn - if yes, directed to Saved items page as default, if no, direct to login page
            // loggedIn will need to be defined when building authentication
        //    { loggedIn === true ? (
                <div className="App">
                    <TopNav />
                    <Header />
                    <Router>
                        <div>
                            <Switch>
                                {/* once authentication is built, update paths so that login is '/' and saveditems is '/home' */}
                                <Route exact path="/" component={SavedItems} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={Signup} />
                                <Route exact path="/additem" component={AddItem} />
                                <Route exact path="/stock" component={Stock} />
                                <Route exact path="/chart" component={ChartItems} />
                            </Switch>
                        </div>
                    </Router>
                </div>
        //    ) : (
        //        <div className="Login">
        //             <LoginNav />
        //             <Router>
        //                 <div>
        //                     <Switch>
        //                         <Route exact path="/" component={Login} />
        //                         <Route exact path="/signup" component={Signup} />
        //                     </Switch>
        //                 </div>
        //             </Router>
        //        </div>
        //     )}
        );
    }
}

export default App;