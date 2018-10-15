import React, { Component } from 'react'

class Link extends Component {
  render() {
    if(this.props.active) {
      return <span>{ this.props.children }</span>
    }
    return (
      <span
        onClick={e => {
          e.preventDefault()
          this.props.onClick()
        }}
      >
        {this.props.children}
      </span>
    )
  }
}

export default Link