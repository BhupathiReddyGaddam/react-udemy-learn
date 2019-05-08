import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../AuthContext/AuthContext';

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
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render(props) {
        return(
            <Aux>
                {this.context.authanticated ? <p>Authanticated</p> : <p>Please Login</p>}
                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                type="text" 
                onChange={this.props.change}
                //ref={(inputEl) => {this.inputElement=inputEl}}
                ref={this.inputElementRef}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);