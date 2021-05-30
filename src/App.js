//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.getData = this.getData.bind(this);
    this.state = {
      isVisible: true,
    }
	}

	async getData(url) {
		console.log(url);
		let response = await fetch(url);
    return await response.json();
	
	}


	render() {
		return (
			<div  className="container">
				<Autocomplete items="/search" isVisible={this.state.isVisible} getdata={this.getData}></Autocomplete>
			</div>
		);
	}
}
export default App;
