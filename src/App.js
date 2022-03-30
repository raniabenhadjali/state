
import react ,{Component, userState} from 'react'
import { useState } from 'react';
import './App.css';
import Profile from './component/Profile';
class App extends Component{
constructor(){
  this.state={
    show: true 
  }
}
handleShow=()=>{
  this.setState({
    show : !this.state.show
  })
}
render(){
  let src = "https://bestwallpapers.net/wp-content/uploads/2020/03/4K-Wallpapers-Free-Download-4K-Wallpaper-For-Phone.jpeg";
return (
<div className='App' >
  <button onClick={this.handleShow}>Click me </button>
{
  this.state.show ? (
    <Profile
fullName="ben hadj ali rania"
age="20"
adress=" Téboursouk"
profession ="web developper"
src={src}/> ) :null

}



    </div>
  );
}
}

export default App;
