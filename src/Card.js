import React from 'react';
import './Card.css';




const Card = (props) => {
    return (
       <>
         <div className="col-md-2 col-9 mx-auto my-4">
         
          <div className="card">
          <img className="card-img-top" src={`http://openweathermap.org/img/w/${props.imgsrc}.png`} alt="Weather Update" />
              <div className="card-body">
                <h5 className="card-title">{Math.round(props.current_temp_max)}&deg;/{Math.round(props.current_temp_min)}&deg;</h5>
                <p className="card-text">{props.datecurr}</p>
                <p className="card-text"></p>
                <p className="card-text">{props.description}</p>
              </div>
          </div> 
       </div>
       
       </> 
    )
};

export default Card;