import React, { Component, useState, useEffect } from 'react'
import ProjectCard from '../Components/ProjectCard';


export default class Projects extends Component {

  state = {
    loading: true,
    projects: []
  };

  async componentDidMount(){
    const url = "https://api.github.com/users/Kyemate/repos";
    const response = await fetch(url);

    const data = await response.json();
    
    this.setState({projects: data, loading: false});
    console.log(this.state.projects);

    var i = 0;
    var gallery = document.getElementById("root");
    var secretBtn = document.getElementById("gallery");
    secretBtn.onclick = function(e) {
    var ev = e || window.event;
     if(e.target !== this)
        return;
      console.log(i++);
      gallery.style.background = "linear-gradient(to bottom, blue 50%, yellow 50%)";
    }

  }
  componentWillUnmount(){
    var gallery = document.getElementById("root");
    gallery.style.background = "white";
  }

  render() {
    if(this.state.loading)
      return <div>Loading...</div>;
      
    return (

     
      <section id="gallery">
        <div className="container">
          <div className="row" style={{marginTop: "20px"}}>
            {this.state.projects.map((project, i) => (
               <ProjectCard project={project} key={i}></ProjectCard> 
            ))}
          </div>
        </div>
      </section> 
    )
  }
}