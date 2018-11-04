import React from 'react';


class Contact extends React.Component{
  render(){
    return(
      <div className="contact-main">
        <a href="/" className="home-btn"><i className="fas fa-home"></i></a>
        <div className="contact-container">
          <div className="contact-site">
            <h1>Contact Me</h1>
            <a href="https://www.linkedin.com/in/adrian-monasterios-gutierrez" target="_blank" className="button profile-btn"><i className="fab fa-linkedin"></i><p className="tag"><span className="tag_text">LinkedIn</span></p></a>
            <a href="https://github.com/adrimonasterios" target="_blank" className="button projects-btn"><i className="fab fa-github"></i><p className="tag"><span className="tag_text">Github</span></p></a>
            <a href="https://www.instagram.com/adrimonasterios/" target="_blank" className="button contact-btn"><i className="fab fa-instagram"></i><p className="tag"><span className="tag_text">Instagram</span></p></a>
            <form className="contact-form" action="index.html" method="post">
              <input type="text" name="name" placeholder="Name"/>
              <input type="text" name="lastname" placeholder="Last Name"/>
              <input type="text" name="email" placeholder="e-mail"/>
              <input type="text" name="subject" placeholder="Subject"/>
              <textarea className="message" type="text" name="message" placeholder="Write message..."/>
              <input type="submit" name="button" value="Send"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
