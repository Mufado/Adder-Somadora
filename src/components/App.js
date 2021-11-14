import React, { Component } from "react";
import "./App.css"


class Addends extends Component {
    render() {
        return (
            <form>
                <input type="number" />
            </form>
        )
    };
}

class Total extends Component {
    render() {
        return (
            <h1> Total </h1>
        )
    };
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = [];
    }

    render() {
        return (
            <div>
                <Addends>  </Addends>
                <Addends>  </Addends>
                <Total> </Total>
            </div>
        )
    };
}

export default App;