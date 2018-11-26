import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'

class Projects extends React.Component{
  constructor(){
    super();
    this.state={
      currentPicture:project1
    }
  }

  linkToImg(){
    if(this.state.currentPicture == project1){
      return "https://froogalapp.herokuapp.com/"
    }else if(this.state.currentPicture == project2){
      return "https://perfectweek.herokuapp.com/"
    }else if(this.state.currentPicture == project3){
      return "https://todo-list-amg22.herokuapp.com/"
    }
  }

  render(){
    return(
      <div className="projects-container">
        <a href="/" className="home-btn"><i className="fas fa-home"></i></a>
        <div className="projects-site">
          <h1>Projects</h1>
          <div className="main-project">
            <a href={this.linkToImg()} target="_blank" className="link-img"><img src={this.state.currentPicture} alt="big-picture"/></a>
          </div>
          <div className="project-thumbnails">
            <a href="https://froogalapp.herokuapp.com/" target="_blank" className="project-links"><img src={project1} alt="project1"/></a>
            <a href="https://perfectweek.herokuapp.com/" target="_blank" className="project-links"><img src={project2} alt="project2"/></a>
            <a href="https://todo-list-amg22.herokuapp.com/" target="_blank" className="project-links"><img src={project3} alt="project3"/></a>
            <img onClick={()=>this.setState({currentPicture: project1})} src={project1} alt="project1"/>
            <img onClick={()=>this.setState({currentPicture: project2})} src={project2} alt="project2"/>
            <img onClick={()=>this.setState({currentPicture: project3})} src={project3} alt="project3"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
