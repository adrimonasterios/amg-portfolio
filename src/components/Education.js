import React from 'react';


class Education extends React.Component{
  render(){
    return(
      <div className="display_info">
        <h2>Education</h2>
        <div className="comp-item">
          <p>Wyncode Academy (2018)</p><p className="comp-description">Full Stack Web Development</p>
        </div>
        <div className="comp-item">
          <p>Universidad Privada Boliviana (2016)</p><p className="comp-description">Marketing and Sales (Diploma Course)</p>
        </div>
        <div className="comp-item">
          <p>Instituto Da Vinci (2016)</p><p className="comp-description">Photography (Diploma Course)</p>
        </div>
        <div className="comp-item">
          <p>Universitat zu Koln (2011)</p><p className="comp-description">Exchange Program</p>
        </div>
        <div className="comp-item">
          <p>Universidad Torcuato Di Tella (2007-2012)</p><p className="comp-description">Lic. Economia Empresarial</p>
        </div>
        <div className="comp-item">
          <p>Colegio Aleman Mariscal Braun (1994-2006)</p>
        </div>
      </div>
    )
  }
}

export default Education
