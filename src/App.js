import React, {useState} from 'react'
import axios from 'axios'

function App() {

// const url=`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e12ad7ae69caca40419bf561964228cb`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Manila</p>
          </div>
          <div className="temp">
              <h1>60F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
          <div className="bottom">
            <div className="feels">
              <p>65F</p>
              <div className="humidity">
                12mph
              </div>
            </div>
          </div>
      </div>
    </div>
  );

}

export default App;
