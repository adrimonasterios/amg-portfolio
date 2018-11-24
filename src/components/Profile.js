import React from 'react';
import me from '../images/me.jpg'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Education from './Education.js'
import WorkExperience from './WorkExperience.js'
import PersonalInformation from './PersonalInformation.js'
import Technologies from './Technologies.js'



class Profile extends React.Component{
  constructor(){
    super();
    this.state={
      current_info: PersonalInformation
    }
  }

  render(){
    return(
      <div className="profile_site">
        <div className="profile_photo">
          <img src={me} alt="me"/>
          <a href="/" className="home-btn"><i className="fas fa-home"></i></a>
        </div>
        <div className="profile_information">
          <div>
          <h1>Profile</h1>
            <ul className="profile-nav">
              <li className="nav-item"  onClick={()=>this.setState({current_info: PersonalInformation})}>Personal Information</li>
              <li className="nav-item"  onClick={()=>this.setState({current_info: Education})}>Education</li>
              <li className="nav-item"  onClick={()=>this.setState({current_info: WorkExperience})}>Work Experience</li>
              <li className="nav-item"  onClick={()=>this.setState({current_info: Technologies})}>Technologies</li>
            </ul>
          </div>
          <this.state.current_info/>
        </div>
      </div>
    )
  }
}

export default Profile
