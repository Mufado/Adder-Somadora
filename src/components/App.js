import React, { Component } from "react";
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstAddend: '',
            secondAddend: '',
            sumTotal: 'Resultado'
        };

        this.handleSumAddends = this.handleSumAddends.bind(this);
        this.handleGetFirstAddend = this.handleGetFirstAddend.bind(this);
        this.handleGetSecondAddend = this.handleGetSecondAddend.bind(this);
    }

    handleGetFirstAddend(e) {
        this.setState({ firstAddend: Number(e.target.value) });
    }

    handleGetSecondAddend(e) {
        this.setState({ secondAddend: Number(e.target.value) });
    }

    handleSumAddends(e) {
        this.setState({ sumTotal: this.state.firstAddend + this.state.secondAddend });
        e.preventDefault();
    }

    render() {
        const title = process.env.REACT_APP_TITLE;
        return (
            <div className="container">
                <h1> {title} </h1>
                <div className="addends">
                    <input type="number" onChange={this.handleGetFirstAddend} />
                    <input type="number" onChange={this.handleGetSecondAddend} />
                </div>

                <form onSubmit={this.handleSumAddends}>
                    <button type="submit"> + </button>
                </form>
                
                <h3> {this.state.sumTotal} </h3>
            </div>
        )
    };
}

export default App;