import React, { Component } from 'react';
import '../App.css';
import List from './List.jsx';
import Logo from "../little-bird.png";



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            items: [
                { value: "I am the first chirp", id: 0 },
                { value: "I am the second chirp", id: 1 },
                { value: "I am the third chirp", id: 2 }
            ]
        }

        
    }

    handleInputChange = (value) => {
        this.setState({ name: value });
    }


    addChirp = () => {
        let index = this.state.items.length;
        this.state.items.push( {value: this.state.name, id: index} );
        // let newArray = this.state.items;
        this.setState({items: this.state.items});
        this.setState({name:""});
    }

    render() {

        return (

            <div>
                <nav className="navbar navbar-dark bg-primary justify-content-between">
                    <a className="navbar-brand navbar-primary" href="http://localhost:3000/" >
                        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    Chirper
                    </a>
                    <div>
                        <input
                            placeholder="type your chirp"
                            value={this.state.name}
                            onChange={(event) => this.handleInputChange(event.target.value)}
                        />
                        <button className="btn btn-success btn-sm" type="button" onClick={this.addChirp}>Add Chirp</button>
                    </div>

                </nav>
                <div className="container">
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default App;