import React, { Component } from 'react';
import Cardlist from'../Components/Cardlist';
// import { robots } from './robots';
import Searchbar from'../Components/Searchbar';
import './App.css';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends Component{
    constructor(){
        super()
        this.state= {
            robots: [],
            searchfield: ''
        } 
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=> this.setState({ robots: users }))
    }

    onSearchChange= (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const {robots, searchfield} =this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLowerCase())
        });
        return(
            <div className='tc'>
                <div className="top-bar">
                    <h1>ROBOFRIEND</h1>
                    <Searchbar searchChange={this.onSearchChange}/>
                </div>
                <div className="flex flex-wrap justify-center">
                    <ErrorBoundry>
                        < Cardlist robots={ filteredRobots }/>
                    </ErrorBoundry>
                </div>
            </div>
          
        )
    }
}

export default App;