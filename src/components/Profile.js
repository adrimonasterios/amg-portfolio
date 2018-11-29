import React from 'react';
import me from '../images/me.jpg'
import Education from './Education.js'
import WorkExperience from './WorkExperience.js'
import PersonalInformation from './PersonalInformation.js'
import Technologies from './Technologies.js'



class Profile extends React.Component{
  constructor(){
    super();
    this.state={
      current_info: PersonalInformation,
      backColor1: 'rgb(21, 195, 185)',
      backColor2: 'rgb(21, 148, 195)',
      backColor3: 'rgb(21, 148, 195)',
      backColor4: 'rgb(21, 148, 195)',
    }
  }

  // changeStyle(){
  //   if (this.state.current_info.toString() == document.querySelectorAll('.nav-item')[0].innerHTML){
  //   return "rgb(21, 195, 185)"
  // }
  // }

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
              <li className="nav-item" style={{background: this.state.backColor1}} onClick={()=>{this.setState({current_info: PersonalInformation, backColor1: "rgb(21, 195, 185)", backColor2: "rgb(21, 148, 195)", backColor3: "rgb(21, 148, 195)", backColor4: "rgb(21, 148, 195)"})}}>Personal Information</li>
              <li className="nav-item"  style={{background: this.state.backColor2}} onClick={()=>this.setState({current_info: Education, backColor1: "rgb(21, 148, 195)", backColor2: "rgb(21, 195, 185)", backColor3: "rgb(21, 148, 195)", backColor4: "rgb(21, 148, 195)"})}>Education</li>
              <li className="nav-item"  style={{background: this.state.backColor3}} onClick={()=>this.setState({current_info: WorkExperience, backColor1: "rgb(21, 148, 195)", backColor2: "rgb(21, 148, 195)", backColor3: "rgb(21, 195, 185)", backColor4: "rgb(21, 148, 195)"})}>Work Experience</li>
              <li className="nav-item"  style={{background: this.state.backColor4}} onClick={()=>this.setState({current_info: Technologies, backColor1: "rgb(21, 148, 195)", backColor2: "rgb(21, 148, 195)", backColor3: "rgb(21, 148, 195)", backColor4: "rgb(21, 195, 185)"})}>Technologies</li>
            </ul>
          </div>
          <this.state.current_info/>
        </div>
      </div>
    )
  }
}

export default Profile
