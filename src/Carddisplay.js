import React from 'react';
import './Card.css';




const Carddisplay = (props) => {
    return (
       <>
         <div className="col-md-2 col-8 mx-auto my-4">
          <div className="card w-auto">
          <img className="card-img-top" src={props.imgsrc} alt="Weather Update" />
              <div className="card-body mx-2">
                <h5 className="card-title">{props.current_temp}&deg;C</h5>
                <p className="card-text">{props.datecurr}</p>
                <p className="card-text">{props.year}</p>
                <p className="card-text">{props.description}</p>
              </div>
          </div> 
       </div>
       </> 
    )
};

export default Carddisplay;