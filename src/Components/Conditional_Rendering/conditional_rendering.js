import React, {Component} from 'react'

class conditional_rendering extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleIncrease = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrease = ()=>{
        this.setState({
            count: this.state.count - 1
        })
    }
    handleReset = ()=>{
       this.setState({
        count: 0
       }) 
    }
    render(){
        //state distructuring
        const {count} = this.state;

        return <div className='center'>
            <h1>Count: {count}</h1>
            
            <button onClick={this.handleIncrease} disabled ={count === 5 ? true: false}>+</button> &nbsp; &nbsp;
            <button onClick={this.handleDecrease} disabled={count === 0 ? true: false}>-</button> &nbsp; &nbsp;
            <button onClick={this.handleReset}>reset</button>
        </div>
    }
}

export default conditional_rendering