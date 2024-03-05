import React, { PureComponent } from 'react'

export default class Counter extends PureComponent{
    componentDidMount(){
        console.log('componentDidUpdate Counter')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Counter')
    }
  render() {
    return (
      <div>
        Counter:{this.props.count}
      </div>
    )
  }
}
