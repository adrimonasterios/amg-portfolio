import React from 'react';
import me from '../images/me.jpg'


class Profile extends React.Component{
  render(){
    return(
      <div className="display_info">
        <h2>Personal Information</h2>
        <p>Name: Adrian Monasterios Gutierrez</p>
        <p>Date of Birth: 10/06/2018</p>
        <p>Place of Birth: La Paz - Bolivia</p>
      </div>
    )
  }
}

export default Profile
