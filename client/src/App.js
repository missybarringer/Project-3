import React, { Component } from "react";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";


class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNav />
                <Header />
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Search} />
                            <Route exact path="/search" component={Search} />
                            <Route exact path="/saved" component={Saved} />
                            <Route exact path="/saved/:id" component={Saved} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
                
            </div>
        );
    }
}

export default App;