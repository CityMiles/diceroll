import React, { Component } from 'react'

class RollDisplay extends Component {

   render() {
       return (

           <div><center>
           <h2>Awesome ... here's your previous rolls: <font color='green'>{this.props.diceArray + ''} </font></h2>
           </center></div>

       )
   }
}

export default RollDisplay
