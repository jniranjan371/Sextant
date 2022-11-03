import React from 'react'; 
import Banner from './Banner'; 
import './App.css';
import Card from './Card'; 


export default class App extends React.Component{
  constructor(props){
    super(props); 
  }

  render(){
    return(
      <div className='App'>
        <div className='Banner'>
          <Banner name='Cisco Sextant'></Banner>
        </div>
        <div className='cards'>
          <Card className='card' name='card 1'></Card> 
          <Card className='card' name='card 2'></Card> 
          <Card className='card' name='card 3'></Card> 
        </div>
      </div>
    ); 
  }
}
