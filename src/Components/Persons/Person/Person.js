import React, {Component} from 'react';
import classes from './Person.css';

class Person extends React.Component {
    render(props) {
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change}/>
            </div>

        );
    }
}

export default Person;