import React from 'react';
import './App.css';
import Stuff from './Stuff'
import Suitcase from './Suitcase'
import ObjectsComponent from './ObjectsComponent'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      objects: [
        {name: 'shirt', pack: false},
        {name: 'shoes', pack: false},
        {name: 'jacket', pack: false}
      ]
    }
  }

  onClick = e => {
    const newObjects = [...this.state.objects]
    const newArr = newObjects.map(obj => {
      if (obj.name === e) {
        return {
          ...obj,
          pack: !obj.pack
        }
      } else {
        return obj
      }
    })

    this.setState({
      objects: newArr
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Stuff objects={this.state.objects} onClick={this.onClick}/>
          <Suitcase objects={this.state.objects} onClick={this.onClick}/>

          <ObjectsComponent />
          <ObjectsComponent />

        </header>
      </div>
    );
  }
}

export default App;
