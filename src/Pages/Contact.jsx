import React, { Component } from 'react'
import '../style/contact.css'

export default class Contact extends Component {
  render() {
    return (
        <div className="container-custom">
        <div className="bg contactImage1"></div>
        <div className="content">
          <div className="container align-center" style={{ maxWidth: "970px"}}>
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-12">
                  <h3>Contact</h3>
                  <p>072-205 76 48 <br/>
                  henrik@mdpn.net
                  </p>
                </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <h3>Linkedin</h3>
                <a href="https://www.linkedin.com/in/henrik-z-47314810a/">Henrik Zetterström</a>
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className="bg contactImage2"></div>
      </div>
        
    )
  }
}
