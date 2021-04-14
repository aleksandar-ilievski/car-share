import React, { useEffect, useState } from "react";
import Nav from "../NavBar/Nav";
import { likePost, getPosts } from '../../actions/posts';
import "./CarPost.css";
import { Avatar } from "@material-ui/core";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import moment from "moment";
import { updatePost } from "../../api";


function Car() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  let id = window.location.pathname.split("/")[2];
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null
  });
  const [postData, setPostData] = useState({ startDate: '', endDate: '', days: '' });
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
      dispatch(getPosts());
  }, [dispatch]);

  const [focus, setFocus] = useState(null);

  const { startDate, endDate } = dateRange;

  const handleOnDateChange = (startDate, endDate) => setdateRange(startDate, endDate);


  let sdate = moment(startDate).toString().split(" ");
  let edate = moment(endDate).toString().split(" ");

  let startdatefinal = sdate[1]+" "+sdate[2]+" "+sdate[3];
  let enddatefinal = edate[1]+" "+edate[2]+" "+edate[3];

  
  let data1 = new Date(startDate?._d).getTime();
  let data2 = new Date(endDate?._d).getTime();
  
  let days = (data2-data1)/ (1000 * 3600 * 24);

  if(!posts){
    <div>LOADING...</div>
  }
  return (
    <div>
     <Nav />
    {posts.map((post) => 
       post._id === id && (
        <div className="car-show-container">
        <div className="car-show-banner">
          <div
            className="car-show-img-banner"
            style={{ backgroundImage: `url(${post.selectedFile})` }}
          ></div>
        </div>
        <br />
        <br />
        <br />
        <div className="car-show-main-section">
          <div className="car-show-left-container">
            <div className="car-show-grid-container">
              <div className="item-1">
                <div className="car-show-left-sec">The car</div>
              </div>
              <div className="item-2">
                <span className="car-show-title">{post.title}</span>
                <div className="car-show-star-wrapper">
                  <div className="car-show-star-inner">
                    <div className="car-show-left-full-star"></div>
                    <div className="car-show-left-full-star"></div>
                    <div className="car-show-left-full-star"></div>
                    <div className="car-show-left-full-star"></div>
                    <div className="car-show-left-full-star"></div>
                    <span className="car-show-top-trips">∙ {Math.floor(Math.random()*100)} trips</span>
                  </div>
                </div>
                <div className="car-show-std-feat-container">
                  <div className="car-show-std-feat-grid">
                    <div className="item-1">
                      <div
                        title="Manual transmission"
                        className="feature-manual-trans"
                      ></div>
                      <span className="car-show-features-standard-text">
                        Manual transmission
                      </span>
                    </div>
                    <div className="item-2">
                      <div className="feature-doors"></div>
                      <span className="car-show-features-standard-text">
                        2 doors
                      </span>
                    </div>
                    <div className="item-3">
                      <div className="feature-seats"></div>
                      <span className="car-show-features-standard-text">
                        4 seats
                      </span>
                    </div>
                    <div className="item-4">
                      <div className="feature-mpg"></div>
                      <span className="car-show-features-standard-text">
                        24 MPG
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-3">
                <div className="car-show-left-sec">Hosted by</div>
              </div>
              <div className="item-4">
                <div className="car-show-host-wrapper">
                  <div className="car-show-host-avatar"><Avatar></Avatar></div>
                  <div className="car-show-right-of-avatar">
                    <div className="car-show-left-content">{post.name}</div>
                    <br />
                    <div className="car-show-left-content-trips">
                      {Math.floor(Math.random()*100)} trips - Joined April 2021
                    </div>
                    <br />
                    <div className="car-show-left-content-response">
                      Typically responds in {Math.floor(Math.random()*10)} minutes
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-5">
                <div className="car-show-left-sec">Description</div>
              </div>
              <div className="item-6">
                <div className="car-show-left-content">
                  {post.message}
                </div>
              </div>
              <div className="item-7">
                <div className="car-show-left-sec">Features</div>
              </div>
              <div className="item-8">
                <div className="car-show-left-content">
                  <span
                    title="Audio input"
                    className="feature-audio-input"
                  ></span>
                  <span>Audio input</span>
                  <br />
                  <span title="GPS" className="feature-gps"></span>
                  <span>GPS</span>
                  <br />
                  <span
                    title="Longterm car"
                    className="feature-longterm-car"
                  ></span>
                  <span>Longterm car</span>
                  <br />
                  <span title="Toll pass" className="feature-toll-pass"></span>
                  <span>Toll pass</span>
                  <br />
                </div>
              </div>
              <div className="item-9">
                <div className="car-show-left-sec">Reviews</div>
              </div>
              <div className="item-10">
                <div className="car-show-left-content">
                  <div className="car-show-star-wrapper">
                    <div className="car-show-star-inner">
                      <div className="car-show-left-full-star"></div>
                      <div className="car-show-left-full-star"></div>
                      <div className="car-show-left-full-star"></div>
                      <div className="car-show-left-full-star"></div>
                      <div className="car-show-left-full-star"></div>
                      ∙&nbsp;{Math.floor(Math.random()*10)} rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="car-show-right-container">
            <span className="car-show-usd">&euro;</span>
            <span className="car-show-price">{post.tags}</span>&nbsp;
            <span className="car-show-per-day">per day</span>
            <div className="car-show-distance-container">
              <div className="car-show-rental">


            {user?.result ? (
              (post?.likes?.length === 0)  ? ( 
                <div className="datemain">    
                    <DateRangePicker
                        onClose={()=> setPostData({
                          ...postData,
                          startDate: startdatefinal,
                          endDate: enddatefinal,
                          days: days,
                        }
                        )}
                        startDatePlaceholderText="Start"
                        startDate={startDate}
                        onDatesChange={handleOnDateChange}
                        endDatePlaceholderText="End"
                        endDate={endDate}
                        numberOfMonths={1}
                        hideKeyboardShortcutsPanel
                        focusedInput={focus}
                        onFocusChange={focus => setFocus(focus)}
                        startDateId="startDateMookh"
                        endDateId="endDateMookh"
                        minimumNights={1}
                    />
                    <button className="rental-cancel-btn" disabled={!user?.result} onClick={(e) => dispatch(likePost(post._id),updatePost(post._id,postData))} >BookCar</button>
                </div>
              ) : (
                <>
                <div>Car Booked</div>
                <Link to="/rental">
                 <button>Check Your Rentals</button>
                </Link>
                </>
              )
                
            ):

                <div className="rental-form-login">
                <Link to="/auth">
                    <button>Please Login to Rent!</button>
                </Link>
                </div>
            }
                

              </div>
              <div className="car-show-distance-header">Distance included</div>
              <div className="car-show-distance">
                <div className="car-show-distance-time">
                  Day
                  <br />
                  Week
                  <br />
                  Month
                </div>
                <div className="car-show-distance-mi">
                  200 mi
                  <br />
                  1000 mi
                  <br />
                  2250 mi
                </div>
              </div>
            </div>
            <div className="car-show-insurance-container">
              <div className="car-show-insurance-header">
                Insurance provided via
              </div>
              <div className="car-show-insurance-co">Wiener Vienna Insurance</div>
            </div>
            <button className="car-show-add-fav-btn">
              <img alt="" className="car-show-add-fav-icon" src="https://github.com/fsiino/thuro/blob/master/app/assets/images/add-fav-transp.png?raw=true"/>
              &nbsp;Add to favorites
            </button>
            <br />
          </div>
        </div>
        <br />
      </div>
      )
      )}
  </div>
  )

}

export default Car;
