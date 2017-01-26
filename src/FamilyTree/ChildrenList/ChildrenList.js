import React, {Component} from 'react';
import './ChildrenList.css';
import FamilyTree from '../FamilyTree';

class ChildrenList extends Component {
    render() {
        let lastName = this.props.lastName;
        let i = 0;
        return (
            <div>
                {this.props.childrenArray !== undefined && this.props.childrenArray.map(
                    (child) =>
                        <FamilyTree
                            tree={Object.assign(child, {"lastName": lastName})}
                            key={i++}
                        />
                )}
            </div>
        );
    }
}

export default ChildrenList;


