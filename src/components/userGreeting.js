import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {

    return this.state.isLoggedIn && <div>Welcome Emmy</div>

    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Emmy</div> :
    //     <div>Welcome Guest</div>
    // )

    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Emmy</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>
    
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Emmy</div>
    // }else {
    //     return <div>Welcome Guest</div>
    // }
  }
}

export default UserGreeting