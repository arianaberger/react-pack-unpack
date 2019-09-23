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

  getObjects = (val) => {
    const obj = this.state.objects
    if (val) {
      return obj.filter(obj => obj.pack)
    } else {
      return obj.filter(obj => !obj.pack)
    }
  }

  getPackedObj = () => {this.state.objects.filter(obj => obj.pack)}
  getUnpackedObj = () => {this.state.objects.filter(obj => !obj.pack)}


  render() {
    console.log(this.getObjects(true))
    return (
      <div className="App">
        <header className="App-header">
          <Stuff objects={this.state.objects} onClick={this.onClick}/>
          <Suitcase objects={this.state.objects} onClick={this.onClick}/>

          <h3>Items to Pack</h3>
          <ObjectsComponent objects={() => this.getUnpackedObj} onClick={this.onClick}/>
          <h3>Your Packed Items</h3>
          <ObjectsComponent objects={() => this.getPackedObj} onClick={this.onClick}/>

        </header>
      </div>
    );
  }
}

export default App;
