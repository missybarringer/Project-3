import React, { Component } from "react";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import AddItem from "./pages/AddItem";
import Stock from "./pages/Stock";
import Chart from "./pages/Chart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNav />
                <Header />
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Saved} />
                            <Route exact path="/additem" component={AddItem} />
                            <Route exact path="/stock" component={Stock} />
                            <Route exact path="/chart" component={Chart} />
                        </Switch>
                    </div>
                </Router>
                
            </div>
        );
    }
}

export default App;