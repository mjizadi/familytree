import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class Person extends Component {
    render() {
        return (
            <div>
                <FontAwesome
                    name={this.props.male ? "male" : "female"}
                />
                {this.props.firstName + ' ' + this.props.lastName}
            </div>
        );
    }
}

export default Person;


