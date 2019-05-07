import React, {Component} from 'react';
import Persons from '../Components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';

class App extends React.Component {
  state = {
    persons: [
        {id: "efdsfs1", name: "Alpha", age: 5},
        {id: "kjojei1", name: "Beeta", age: 7},
        {id: "kkjoi23", name: "Gama", age: 9}
    ],
    showPerson: false,
    showCockpit: true
  
  }

  switchNameHandler = (someNewName) => {
    //console.log("was clicked!");
    //Don't use this.state.persons[0].name = "Maxi";
    this.setState({
      persons:[
        {name: someNewName, age: 5},
        {name: "Manu", age: 9},
        {name:"Stephine", age: 11}
      ]
    })
  }

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pi => {
      return pi.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  personToggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
    //console.log(this.state.showPerson);
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;

    if(this.state.showPerson) {
      persons=(
          <div>
            <Persons persons={this.state.persons}
            deletetoggle={this.deletePersonHandler}
            changedname={this.changedNameHandler}/>
          </div>
      );
    }

    return(
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false  })}}>Remove Button</button>
        {this.state.showCockpit ?<Cockpit 
        title={this.props.appTitle}
        personslength={this.state.persons.length}
        btncolor={this.state.showPerson}
        persontoggle={this.personToggleHandler}/> : null }
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       {name: "Alpha", age: 5},
//       {name: "Beeta", age: 7},
//       {name: "Gama", age: 9}
//     ],
//     otherState: "some other value"
    
//   });

//   const switchNameHandler = () => {
//     //console.log("was clicked!");
//     //this.state.persons[0].name = "Maxi";
//     setPersonState({
//       persons:[
//         {name: "Maxi", age: 5},
//         {name: "Manu", age: 9},
//         {name:"Stephine", age: 11}
//       ],
//       otherState: "some other value in useState"
//     });
//   }
//   console.log(personState, setPersonState);

//   return(
//     <div className="App">
//       <h1>React learn</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Button</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age}>My Usage is: It's a Formula</Person>
//     </div>
//   );
// }

// export default App;


