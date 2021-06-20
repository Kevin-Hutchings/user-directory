import React, {Component} from 'react';
import data from '../data'
import Person from './Person'
import Button from './Buttons';

export default class Information extends Component {
   constructor(){
      super();

      this.state = {
         people: data,
         personIndex: 0
      }

      this.changePerson = this.changePerson.bind(this);
   }

   changePerson(direction){
      const {personIndex, people} = this.state;

      if(direction === 'prev' && personIndex > 0){
         this.setState({personIndex: personIndex - 1})
      } else if(direction === 'next' && personIndex < people.length-1){
         this.setState({personIndex: personIndex + 1})
      }
   }

   render(){
      return(
         <div> 
            <Person person={this.state.people[this.state.personIndex]} />
            <section className="Buttons">
               <Button buttonTitle="< Previous" handleClick={() => this.changePerson('prev')} />
               <Button buttonTitle="Next >" handleClick={() => this.changePerson('next')} />
            </section>
         </div>
      )
   }
}