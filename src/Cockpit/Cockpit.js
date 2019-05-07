import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('save the data');
        }, 1000);
        return () => {
            console.log('clean up use effect');
        };
    }, []);

    const classStyles = [];
    let btnClass = classes.switchButton;
    if(props.personslength <=2) {
        classStyles.push(classes.someColor);
      }
  
      if(props.personslength <=1) {
        classStyles.push(classes.fontStyle);
      }

      if(props.btncolor) {      
        btnClass = classes.switchButtonRed;
      }
    return(
        <div>
            <h1>{props.title}</h1>
            <p className={classStyles.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.persontoggle}>Switch Button</button>
        </div>
    );
}
export default React.memo(Cockpit);