import React, {Component} from 'react';
import Person from '../Components/Persons/Person/Person';
import classes from './App.css';

class App extends React.Component {
  state = {
    persons: [
        {id: "efdsfs1", name: "Alpha", age: 5},
        {id: "kjojei1", name: "Beeta", age: 7},
        {id: "kkjoi23", name: "Gama", age: 9}
    ],
    showPerson: false
  
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
    let btnClass = classes.switchButton;

    if(this.state.showPerson) {
      persons=(
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}
              change={(event) => this.changedNameHandler(event, person.id)}/>
            })}
          </div>
      );

        btnClass = classes.switchButtonRed;
    }

    const classStyles = [];

    if(this.state.persons.length <=2) {
      classStyles.push(classes.someColor);
    }

    if(this.state.persons.length <=1) {
      classStyles.push(classes.fontStyle);
    }

    return(
      <div className={classes.App}>
        <h1>React learn</h1>
        <p className={classStyles.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.personToggleHandler}>Switch Button</button>
        {persons}
      </div>
    );
  }
}

export default App;

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


