import React, { Component } from 'react'
import Diceroll from './diceroll.js'
import RollDisplay from './RollDisplay.js'
import './App.css'

class App extends Component {
   constructor(props) {
       super(props)
       this.state = {
           diceNumber: 1,
           diceArray: [],
       }
   }

diceFunction = () => {

   let {diceNumber} = this.state
   let {diceArray} = this.state

   let newDice = Math.floor(Math.random() * 6 + 1 )
   this.setState({diceNumber: newDice})

   diceArray.push(newDice)
   this.setState({diceArray: diceArray})
}

   render() {

       let {diceNumber} = this.state
       let {diceArray} = this.state

       return (

           <div>
           <br/>

           <Diceroll diceNumber={diceNumber} diceFunction={this.diceFunction}/>

           <br/>

           <RollDisplay diceArray={diceArray} diceNumber={diceNumber} diceFunction={this.diceFunction}/>

           </div>

       )
   }
}

export default App
