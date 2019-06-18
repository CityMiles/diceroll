import React, { Component } from 'react'

class Diceroll extends Component {

   render() {
       return (

           <div>
           <center>
           <img id = 'pic' src = 'https://thumbs.gfycat.com/FlashyIdioticFrogmouth-size_restricted.gif' width = '400px'/>
           <br/>
           <br/>
           <h1><font color = 'green'>You Win!</font> Your roll is <font color = 'green'>{this.props.diceNumber}</font> </h1>
           <button onClick = {this.props.diceFunction}>Roll Dice</button>
           </center></div>

       )
   }
}

export default Diceroll
