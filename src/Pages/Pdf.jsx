import React, { Component } from 'react'

export default class Pdf extends Component {
  render() {
    return (
        <embed src={require('../static/pdf/CV - Henrik Zetterstrom.pdf')} width="100%"  height="95%" type="application/pdf"/>
    )
  }
}
