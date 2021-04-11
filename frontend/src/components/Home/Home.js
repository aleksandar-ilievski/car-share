import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import { useHistory } from 'react-router-dom';
import "./home.css";
import "lodash";
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(null);
  const [city, setCity] = useState("");
  const history = useHistory();

  function _suggestionSelect(result, lat, lng, text) {
    result = result.split(",")[0];
    setCity(result);
  } 
  function searchCar(){
    let dateStart = startDate ? startDate.toDateString() : new Date().toDateString()
    let dateEnd = endDate ? endDate.toDateString() : new Date().toDateString()
    console.log(city+", "+dateStart+", "+dateEnd);
    history.push('/carlist');
  }
  return (
    <div className="bgimg">
      <Nav />
      <div className="sve">
        <div className="container">
          <div className="row textCenter">
            <h1>
              FIND <span style={{ color: "rgb(151,6,44)" }}>THE PERFECT</span> CAR FOR
              YOU
            </h1>
          </div>
          <div className="row textCenter">
            <MapboxAutocomplete 
              publicKey="pk.eyJ1IjoiYWxla3NhbmRhcjQ2IiwiYSI6ImNrbjk0d3dlNzBhZzQyeG1ydWhyZjB1azEifQ.xAOI3OiwXjB4AAhkSe7vXw"
              inputClass='form-control search'
              country='mk'
              onSuggestionSelect={_suggestionSelect}
              resetSearch={false}
            />
            <div className="date1">
            <DatePicker
              placeholderText="Select Start Date" 
              selected={startDate}
              minDate={date}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={date => setStartDate(date)}
            /></div>
            <div className="date2">
            <DatePicker
              placeholderText="Select End Date"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={date => setEndDate(date)}
            /></div>
            <div className="gobtn" onClick={searchCar}>
              <p>GO!</p>
            </div> 
          </div>
        </div>
        </div>
    </div>
  );
}

export default Home;
