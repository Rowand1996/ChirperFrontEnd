import React, { Component } from 'react';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:"",
            hasLoaded:false
        }
    }

    handleInputChange = (value) => {
        this.setState({name: value});
    }

    checkIfLoaded = () => {
        if(this.state.hasLoaded === false){
            this.setState({hasLoaded:true});
            
        } else {
            
            this.setState({hasLoaded:false});
        }
    }
    
    componentDidMount = () => {
        this.setState({hasLoaded:true});
    }

    render() {
        if(this.state.hasLoaded){
            return (
                <div>
                    <input 
                    placeholder="What's your name?"
                    value={ this.state.name }
                    onChange={ (event) => this.handleInputChange(event.target.value) }
                    />
                    <button onClick = {this.checkIfLoaded}>
                        click if loaded!
                    </button>
                    <h1>{this.props.text}</h1>
                    <h1>{this.state.name}</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Still Loading.....</h1>
                    <button onClick = {this.checkIfLoaded}>
                    Click if not loaded!
                    </button>
                </div> 
            );
        } 
    }
}

export default App;