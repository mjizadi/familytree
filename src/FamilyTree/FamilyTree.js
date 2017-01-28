import React, {Component} from 'react';
import './FamilyTree.css';

import Person from './Person';
import ChildrenList from './ChildrenList';

class FamilyTree extends Component {
    render() {
        const getInheritedLastName = this.getChildInheritedLastName.bind(this);
        return (
            <div className="tree">
                <Person
                    firstName={this.props.tree.firstName}
                    lastName={this.props.tree.lastName}
                    nickname={this.props.tree.nickname}
                    male={this.props.tree.male}
                    spouse={this.props.tree.spouse}
                />
                {
                    this.props.tree.children &&
                    <ChildrenList
                        lastName={getInheritedLastName()}
                        childrenArray={this.props.tree.children}
                    />
                }
            </div>
        );
    }

    getChildInheritedLastName() {
        if (this.props.tree.male) {
            return this.props.tree.lastName;
        }
        return this.props.tree.spouse !== undefined ?
            this.props.tree.spouse.lastName :
            "";
    }
}

export default FamilyTree;
