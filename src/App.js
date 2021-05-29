
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {FcSearch} from 'react-icons/fc';
import {Input} from '@material-ui/core';
import {InputAdornment} from '@material-ui/core';
import Sdata from './Sdata';
import Card from './Card';
import Carddisplay from './Carddisplay';
import { useState } from 'react';

const api = {
  key: "d0e66d43dff074870fa0108373244b2a",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState({});

  const searchFun = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}forecast?q=${city}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then (result => 
        {
         setSearch(result);
         setCity('');
         console.log(result);
        })
    }
  }

  

  const dateBuilder = (d) => {
    let months = ["January", "February","March","April","May","June","July",
         "August","Sepetember","October","November","December"
  ];
  
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`
  }

  

  return (
    <div className="text-center pt-3">
     <h1>Weather Forecast</h1>

     <div className="container-fluid mt-5">
     <div className="row">
     <div className="col-md-10 mx-auto">
       <div className="row">
       <div className="col-md-6 col-10 mx-auto my-4 ">
       <Input className="input" type="text" placeholder="Enter Location"
       onChange = {
         (event) => {
           setCity(event.target.value);
         }
       }
       value={city}
       onKeyPress={searchFun}
        endAdornment={
        <InputAdornment  position='start'>
          <FcSearch  className="icon" />
        </InputAdornment>}
      />
      
       </div>
       </div>

      {(typeof search.list != "undefined") ? (
        <div>
       <div className="my-3">
       <div className="mt-2 city">{search.city.name}</div>
       <div className="temp">{Math.round(search.list[0].main.temp)}&deg;C</div>
       
       </div>
       </div>
       
      ) : (
        <div>
          <h3>Enter Your Location</h3>
          <h2>--&deg;</h2>
        </div>
      )}
    
    
    {(typeof search.list != "undefined") ? (
      <div>
     
     <div className="col-md-10 col-10 mx-auto">
     <div className="row mb-3">
      
     <Card  imgsrc={search.list[0].weather[0].icon}
     current_temp_max={search.list[0].main.temp_max} 
     current_temp_min={search.list[0].main.temp_min} 
     datecurr={dateBuilder(new Date(search.list[0].dt_txt))}
      description={search.list[0].weather[0].main}
     />
      <Card  imgsrc={search.list[1].weather[0].icon}
     current_temp_max={search.list[1].main.temp_max} 
     current_temp_min={search.list[1].main.temp_min} 
     datecurr={dateBuilder(new Date(search.list[1].dt_txt))}
      description={search.list[1].weather[0].main}
     />
      <Card  imgsrc={search.list[9].weather[0].icon}
     current_temp_max={search.list[9].main.temp_max} 
     current_temp_min={search.list[9].main.temp_min}
     datecurr={dateBuilder(new Date(search.list[9].dt_txt))}
      description={search.list[9].weather[0].main}
     />
      <Card  imgsrc={search.list[17].weather[0].icon}
     current_temp_max={search.list[17].main.temp_max} 
     current_temp_min={search.list[17].main.temp_min}
     datecurr={dateBuilder(new Date(search.list[17].dt_txt))}
      description={search.list[17].weather[0].main}
     />
      <Card  imgsrc={search.list[25].weather[0].icon}
     current_temp_max={search.list[25].main.temp_max} 
     current_temp_min={search.list[25].main.temp_min}
     datecurr={dateBuilder(new Date(search.list[25].dt_txt))}
      description={search.list[25].weather[0].main}
     />
    
  
      </div>
     </div>
     </div>
    ): (
      <div className="mt-4">
      <div className="col-md-10 col-10 mx-auto">
     <div className="row mb-5">
     

      {
         Sdata.map((result,index) => {
           return <Carddisplay key={index} imgsrc={result.image}
           current_temp={result.current_temp}
           datecurr={dateBuilder(new Date())}
           description={result.description}
           />
         })

      }
   </div>
      </div>
      </div>
    
    )}

     </div>
     </div>
    </div>
    </div>
  );
}

export default App;
