import React from "react";
import Nav from "../NavBar/Nav";
import { useSelector } from "react-redux";
import { likePost } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import "./rentals.css";

const Rental = () => {
  const posts = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      {posts.map((post) => {
        return (
          post.likes?.find((like) => like === user?.result?._id) && (
            <div className="rental-index-container">
              <h2>Your Rentals</h2>
              <div className="rental-index-tile">
                <div className="car-tile-container">
                    <div className="car-index-photo-wrapper">
                    <img className="car-index-photo" alt="car" src={post.selectedFile} />
                      <div className="car-price">
                        &euro;{post.tags}<span className="price-per-day"> /day</span>
                      </div>
                    </div>
                  <div className="car-make-model-year-container">
                    <span className="car-make-model">{post.title}</span>
                  </div>
                </div>
                <div className="rental-index-tile-details">
                  <ul className="rental-index-ul">
                    <li>Status:</li>
                    <li>Pickup:</li>
                    <li>Dropoff:</li>
                    <li># of Days:</li>
                    <li>Daily Rate:</li>
                    <li style={{ fontWeight: "700" }}>Total:</li>
                  </ul>
                  <ul className="rental-index-ul">
                    <li>Pending</li>
                    <li>{post.startDate}</li>
                    <li>{post.endDate}</li>
                    <li>{post.days} days</li>
                    <li>&euro;{post.tags} per day</li>
                    <li style={{ fontWeight: "700" }}>&euro;{post.days*post.tags}</li>
                  </ul>
                </div>
                <div className="rental-index-tile-btns">
                  <br />
                  <button className="rental-cancel-btn" onClick={(e) => dispatch(likePost(post._id))} >Cancel Rental</button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Rental;
