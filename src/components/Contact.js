import React from 'react';

class Contact extends React.Component{
  constructor(){
    super();
    this.state={
      message: ""
    }
  }

  render(){
    return(
      <div className="contact-main">
        <a href="/" className="home-btn"><i className="fas fa-home"></i></a>
        <div className="contact-container">
          <div className="contact-site">
            <h1>Contact Me</h1>
            <div className="contact-nav">
              <a href="https://www.linkedin.com/in/adrian-monasterios-gutierrez" target="_blank" rel="noopener noreferrer" className="button profile-btn"><i className="fab fa-linkedin"></i><p className="tag"><span className="tag_text">LinkedIn</span></p></a>
              <a href="https://github.com/adrimonasterios" target="_blank" rel="noopener noreferrer" className="button projects-btn"><i className="fab fa-github"></i><p className="tag"><span className="tag_text">Github</span></p></a>
              <a href="https://www.instagram.com/adrimonasterios/" target="_blank" rel="noopener noreferrer" className="button contact-btn"><i className="fab fa-instagram"></i><p className="tag"><span className="tag_text">Instagram</span></p></a>
            </div>
            <form className="contact-form" action='https://docs.google.com/forms/d/e/1FAIpQLSdZhrb0nbGR-cem_E9-TfL5HWfQ8WGgQxPXMiCLGgIIRKMCDw/formResponse'  onSubmit={()=>window.location.reload()} target="target_frame">
              <input className="clear" type="text" name="entry.968437155" placeholder="Name"/>
              <input className="clear" type="text" name="entry.683996536" placeholder="Last Name"/>
              <input className="clear" type="email" name="entry.1624643405" placeholder="e-mail" required/>
              <input className="clear" type="text" minLength="2" name="entry.730087367" placeholder="Subject" required/>
              <textarea className="message clear" type="text" name="entry.743094438" placeholder="Write message..." required/>
              <input type="submit" name="button" value="Send"/>
            </form>
            <iframe title="form" name="target_frame">My frame</iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
