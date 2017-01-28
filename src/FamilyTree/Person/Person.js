import React, {Component} from 'react';
import './Person.css';
import PersonBox from './PersonBox';

class Person extends Component {
    render() {
        return (
            <div className="coupleBox">

                <PersonBox
                        firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        nickname={this.props.nickname}
                        male={this.props.male}
                />
                {
                    this.props.spouse &&
                    <PersonBox
                        firstName={this.props.spouse.firstName}
                        lastName={this.props.spouse.lastName}
                        nickname={this.props.spouse.nickname}
                        male={!this.props.male}
                    />
                }
            </div>
        );
    }
}

export default Person;


