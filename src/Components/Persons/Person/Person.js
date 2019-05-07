import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';

class Person extends React.Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getderivedstatefromprops...');
    //     return state;
    // }
    // shouldComponentUpdate(nextprops, nextstate) {
    //     console.log('[Person.js] shouldcomponentupdate...');
    //     return true;
    // }

    // getSnapshotBeforUpdate(prevprops, prevstate) {
    //     console.log('[Person.js] getsnapshotbeforeupdate...');
    // }

    // componentDidUpdate() {
    //     console.log('[Person.js] componentdidupdate');  
    // }
    render(props) {
        return(
            <Aux>
                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change}/>
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);