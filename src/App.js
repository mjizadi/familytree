import React, {Component} from 'react';
import FamilyTree from './FamilyTree';
import tree from './tree.json';
import {jsonInput} from "./FamilyTree/styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tree: tree};

    this.handleTreeChange = this.handleTreeChange.bind(this);
  }

  render() {
    return (
      <div>
        <FamilyTree
          tree={this.state.tree}
          depth={0}
        />
        <textarea
          style={jsonInput}
          cols="100"
          rows="10"
          value={JSON.stringify(this.state.tree)}
          onChange={this.handleTreeChange}
        />
      </div>
    );
  }

  handleTreeChange(event) {
    this.setState(Object.assign({}, this.state, {tree: JSON.parse(event.target.value)}));

    return true;
  }
}

export default App;
