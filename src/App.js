import React, { Component } from 'react'; import './App.css'; import HelloWorld from './HelloWorld'; import Counter from './Counter';

class App extends Component { render() {
		return (
			<div className="App">
			<HelloWorld name={'Bruno'} />
			<Counter count/>
			</div>
			
			
			
		);
	}
}

export default App; 