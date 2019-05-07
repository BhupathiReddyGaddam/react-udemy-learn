import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // shouldComponentUpdate(nextprops, nextstate) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextprops.person !== this.props.persons) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    render(props){
        return this.props.persons.map((person, index) => {
            return <Person 
            name={person.name}
            age={person.age}
            click={() => this.props.deletetoggle(index)}
            key={person.id}
            change={(event) => this.props.changedname(event, person.id)}/>
        });
    }
} 

export default Persons;
