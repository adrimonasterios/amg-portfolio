import React from 'react';

class WorkExperience extends React.Component{
  render(){
    return(
      <div className="display_info">
        <h2>Work Experience</h2>
        <div className="comp-item">
          <p>Management Control Specialist (2014-2018)</p><p className="comp-description">Sinchi Wayra S.A. (La Paz - Bolivia)</p>
        </div>
        <div className="comp-item">
          <p>Social Network Managment (2018)</p><p className="comp-description">The Hot Spot (La Paz - Bolivia)</p>
        </div>
        <div className="comp-item">
          <p>Junior Tax Analyst (2012-2013)</p><p className="comp-description">Ernst & Young (Buenos Aires - Argentina)</p>
        </div>
      </div>
    )
  }
}

export default WorkExperience
