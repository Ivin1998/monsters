import './App.css';
import { Component } from 'react';
import { Cardlist } from './component/card-list/card-list.component';
import {Searchbox} from "./component/card-list/search-box/search-box.component.jsx";

class App extends Component{
  constructor(){
    super();
    this.state={
         monsters : [],
         searchField:''
    };
  }

    componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  } 
  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters = monsters.filter(monsters=>
      monsters.name.toLowerCase().includes(searchField.toLowerCase()));

    return( 
      <div className="App">
      <h3 className='head'>Ivin Austan</h3>
        <Searchbox  placeholder='Search Monsters'
         handlechange={e=>this.setState({searchField:e.target.value})}/>
         <br></br><br></br>
        <Cardlist monsters={filteredMonsters}/>

    </div>
    )

  }
}
  
export default App;

  
  


