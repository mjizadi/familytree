import React, {Component} from 'react';
import FamilyTree from './FamilyTree';
import './App.css';
import jalal from './jalal.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {tree: jalal};

        this.handleTreeChange = this.handleTreeChange.bind(this);
    }

    render() {
        return (
            <div>
                <FamilyTree tree={this.state.tree}/>
                <textarea
                    className="jsonInput"
                    cols="100"
                    rows="10"
                    value={JSON.stringify(this.state.tree)}
                    onChange={this.handleTreeChange}>
                </textarea>
            </div>
        );
    }

    handleTreeChange(event) {
        this.setState({tree: JSON.parse(event.target.value)});
    }
}

export default App;
