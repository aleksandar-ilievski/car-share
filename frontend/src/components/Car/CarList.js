import React, { useEffect } from "react";
import Nav from "../NavBar/Nav"
import { getPosts } from '../../actions/posts';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Post from '../Posts/Post/Post';
import Root from "../Map/Map";
import "./Car.css";

function CarList (){
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);


    return(
        <div className="crlsbg">
            <Nav />
            {!posts.length ? <CircularProgress /> : (
                <div className="carContent">
                <div className="carListing">
                {posts.map((post) => (
                    <Post post={post} key={post._id} />
                ))}</div>
                <div className="map"><Root /></div>
                </div>
            )}
            <footer>copyright</footer>
        </div>
    );
}

export default CarList;