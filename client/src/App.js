import React, { Component } from "react";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
// import LoginNav from "./components/LoginNav";
import Login from "./pages/Login";
import SavedItems from "./pages/SavedItems";
import AddItem from "./pages/AddItem";
import Stock from "./pages/Stock";
import Chart from "./pages/Chart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
        //    { true ? (
                <div className="App">
                    <TopNav />
                    <Header />
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path="/" component={SavedItems} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/additem" component={AddItem} />
                                <Route exact path="/stock" component={Stock} />
                                <Route exact path="/chart" component={Chart} />
                            </Switch>
                        </div>
                    </Router>
                </div>
        //    ) : (
        //        <div className="Login">
    //                 <LoginNav />
        //             <Router>
        //                 <div>
        //                     <Route exact path="/" component={Login} />
        //                 </div>
        //             </Router>
        //        </div>
        //     )}
        );
    }
}

export default App;