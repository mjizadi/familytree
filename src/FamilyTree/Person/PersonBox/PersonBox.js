import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

let persons = 0;
class PersonBox extends Component {
    constructor(props) {
        super(props);
        this.getFormattedName = this.getFormattedName.bind(this);
    }

    render() {
        return (
            <div className="personBox">
                <FontAwesome
                    name={this.props.male ? "male" : "female"}
                />
                {' ' + this.getFormattedName()}
            </div>
        );
    }

    getFormattedName() {
        console.log(++persons);
        if (this.props.nickname !== undefined) {
            return this.props.nickname;
        }
        if (this.props.firstName === undefined && this.props.lastName === undefined) {
            return "";
        }
        if (this.props.firstName === undefined) {
            return this.props.lastName;
        }
        if (this.props.lastName === undefined) {
            return this.props.firstName;
        }
        return this.props.firstName + ' ' + this.props.lastName;
    }
}

export default PersonBox;