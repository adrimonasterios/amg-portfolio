import React from 'react';
import html_logo from '../images/html_logo.png'
import css_logo from '../images/css_logo.png'
import js_logo from '../images/js_logo.jpg'
import react_logo from '../images/react_logo.png'
import ruby_logo from '../images/ruby_logo.png'
import rails_logo from '../images/rails_logo.png'
import ps_logo from '../images/ps_logo.png'
import il_logo from '../images/il_logo.png'
import office_logo from '../images/office_logo.png'


class Technologies extends React.Component{
  render(){
    return(
      <div className="display_info">
        <h2>Technologies</h2>
        <div className="tech-item">
          <p>HTML</p>
          <img className="tech_img" src={html_logo} alt="html"/>
        </div>
        <div className="tech-item">
          <p>CSS</p>
          <img className="tech_img" src={css_logo} alt="css"/>
        </div>
        <div className="tech-item">
          <p>JavaScript</p>
          <img className="tech_img" src={js_logo} alt="js"/>
        </div>
        <div className="tech-item">
          <p>ReactJS</p>
          <img className="tech_img" src={react_logo} alt="react"/>
        </div>
        <div className="tech-item">
          <p>Ruby</p>
          <img className="tech_img" src={ruby_logo} alt="ruby"/>
        </div>
        <div className="tech-item">
          <p>Ruby on Rails</p>
          <img className="tech_img" src={rails_logo} alt="rails"/>
        </div>
        <div className="tech-item">
          <p>Adobe Photoshop</p>
          <img className="tech_img" src={ps_logo} alt="ps"/>
        </div>
        <div className="tech-item">
          <p>Adobe Illustrator</p>
          <img className="tech_img" src={il_logo} alt="il"/>
        </div>
        <div className="tech-item">
          <p>Microsoft Office</p>
          <img className="tech_img" src={office_logo} alt="office"/>
        </div>
      </div>
    )
  }
}

export default Technologies
