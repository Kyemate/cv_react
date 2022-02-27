import React, { Component } from 'react'
import '../style/popup.css'

export default class PopUp extends Component {
    componentDidMount(){
        var i = 0;
        var code = "";
        var modal = document.getElementById("eggpop");
        var closebtn = document.getElementsByClassName("close")[0];
        window.addEventListener("keydown",function(e) {
        code = (code+String.fromCharCode(e.keyCode || e.which)).substr(-3);
        if( code == "112") 
            modal.style.display = "block";

        },false);

        closebtn.onclick = function() {
            modal.style.display = "none";
          }
    }
  render() {
    return (
        <div id="eggpop" className="overlay">
        <div className="popup">
          <h2>Easter Egg!</h2>
          <a className="close">&times;</a>
          <div>
            Congratulations you found this easter egg. Now try to slove this quiz.<br/>
             <a href="https://jsisweird.com/" target="_blank">https://jsisweird.com/</a>
          </div>
        </div>
      </div>
    )
  }
}
