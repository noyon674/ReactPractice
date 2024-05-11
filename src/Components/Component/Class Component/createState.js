import React, {Component} from 'react'

class createState extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  handleIncrese = ()=>{
    this.setState({
      count: this.state.count+1
    })
  }
  render(){
    return <div>

      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleIncrese}>Increase</button>
    </div>
  }
}

export default createState