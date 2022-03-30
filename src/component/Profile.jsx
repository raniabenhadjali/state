import React, {Component} from "react"

 class Profile extends Component{

constructor(props){
super(props)
this.state={
    conter : 0,
    intervall : null
}
}
componentDidMounl(){
this.setState( {
    intervall : setInterval (()=>{
this.setState({
    counter : this.state.counter +1
})
    },1000)
})
}
render(){
const{fullName , age, adress , profession , src}=this.props


return(

<div>
<h1>{this.state.counteur}</h1>
<h1>{fullName}</h1>
<h1>{age}</h1>
<h1>{adress}</h1>
<h1>{profession}</h1>
<img src={src} alt="img" width="150px"/>







    </div>
  )
}
}
export default Profile