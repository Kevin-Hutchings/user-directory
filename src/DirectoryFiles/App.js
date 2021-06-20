import React, {Component} from 'react';
import Information from './components/Information';
import {Header} from './components/Header';

export default class App extends Component {

  render(){
    return(
      <>
        <Header />
        <Information />
      </>
    )
  }
}