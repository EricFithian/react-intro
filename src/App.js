import React, {Component} from 'react'
import Nav from './components/Nav'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    const myData = [
      {
        name: "Eric",
        age: 37,
        company: "General Assembly"
      }, {
        name: "Alessio",
        age: 30,
        company: "General Assembly"
      }
    ]
    let eric = "Eric"
    // Make sure to return some UI
    return (
      <>
        <h1>Hello World! React is fun</h1>
        <p>This is adding context</p>
        <Nav data={myData} anotherProp={"another"} />
        <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1205%2Fr1102255_1296x518_5%2D2.jpg&w=1320&h=528&scale=crop&cquality=40&location=center&format=jpg" alt="Giants picture of Daniel Jones and Saquon Barkley"/>
      </>
    )
  }
}

export default Hello