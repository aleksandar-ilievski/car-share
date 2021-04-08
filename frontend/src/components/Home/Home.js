import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import "./home.css";
import "lodash";
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function _suggestionSelect(result, lat, lng, text) {
    console.log(result, lat, lng, text)
  }
  return (
    <>
      <div className="bgimg">
      <header><Nav /></header>
        <div className="container">
          <div className="row textCenter">
            <h1>
              <span style={{ color: "white" }}>FIND THE PERFECT</span> CAR FOR
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
            <DatePicker
              placeholderText="Select Start Date" 
              selected={startDate}
              minDate={date}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={date => setStartDate(date)}
            />
            <DatePicker
              placeholderText="Select End Date"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={date => setEndDate(date)}
            /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
