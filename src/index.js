import './css/style.css';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Projects from './components/Projects.js'
import Profile from './components/Profile.js'
import Contact from './components/Contact.js'
import profilepic from './images/profile.jpg'
import projectspic from './images/computer'
import contactpic from './images/contact.jpg'
import homepic from './images/background.png'


const root = ()=>{
  return(
    <Router>
      <div className="after-root">
        <Route exact path="/" component={App}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
  )
}



class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }


  render(){
    return(
        <div className="main-container">
          <div className="container">
            <a href="/Profile" className="button profile-btn"><i className="fas fa-address-card"></i><p className="tag"><span className="tag_text">Profile</span></p></a>
            <a href="/Projects" className="button projects-btn"><i className="fab fa-connectdevelop"></i><p className="tag"><span className="tag_text">Projects</span></p></a>
            <a href="/Contact" className="button contact-btn"><i className="fas fa-project-diagram"></i><p className="tag"><span className="tag_text">Contact</span></p></a>

            <img className="navbar" src={homepic} alt="home"/>
            <img className="navbar profile-img" src={profilepic} alt='profile'/>
            <img className="navbar projects-img" src={projectspic} alt='projects'/>
            <img className="navbar contact-img" src={contactpic} alt='contact'/>


          </div>
        </div>
    )
  }
}

render(root(), document.getElementById('root'))
