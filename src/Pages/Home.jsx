import React, { Component } from 'react'
import '../style/home.css'
import cv from '../static/data/cv.json'

export default class Home extends Component {


      componentDidMount(){
        document.getElementById("biotext").innerHTML = cv.bio.toString();
        
        function fillList(listId, source, bold = false, br = false)
        {
          var list = document.getElementById(listId);
          for (var i = 0; i < source.length; ++i) {
            var li = document.createElement('li');
            li.setAttribute("class", "list-group-item bg-transparent");
            if(bold)
              li.innerHTML = "<strong>" + source[i] + "<strong/>";  
            else
            li.innerHTML = source[i];  

            list.appendChild(li);      
                                    
          }
          if(br)
              list.appendChild(document.createElement("br"));   
        }
        
        fillList("experiencelist", cv.experience, true, true);
        fillList("otherlist", cv.other, true, true);

        fillList("internshiplist", cv.internship, false, true);
        fillList("electedofficelist", cv['elected office'], false, true);
        fillList("educationlist", cv.education, false, false);
        

  }
  render() {
    return (
  <div className="container-custom">
		<div className="bg image1">test</div>
		<div className="text" style={{alignSelf: "center", alignItems: "center" }}>  
      <div className="container" style={{justifyContent: "center", maxWidth: "970px"}} >
		   <h3>Bio</h3>
		   <p id='biotext'></p>
		</div>
  </div>
		<div className="bg image2"></div>
		<div className="text">
      <div className="container align-center" style={{maxWidth: '970px' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-12">
              <h3>Erfarenhet</h3>
              <ul className="list-group list-group-flush" id='experiencelist'></ul>
            </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12">
            <h3>Överigt</h3>
            <ul className="list-group list-group-flush" id='otherlist'></ul>
          </div>
         </div>
        </div>
      </div>
		</div>
		<div className="bg image3"></div>
		<div className="text">
		   <h3>Praktik</h3>
		   <ul className="list-group list-group-flush" id='internshiplist'></ul>
        <h3>Förtroendeuppdrag</h3>
        <ul className="list-group list-group-flush" id='electedofficelist'></ul>
        <h3>Utbildning</h3>
        <ul className="list-group list-group-flush" id='educationlist'></ul>
       
		</div>
		<div className="bg image4"></div>
	</div>
    )
  }
}
