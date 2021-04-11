import React, { useEffect } from "react";
import Car from "./Car";
import Nav from "../NavBar/Nav"
import "./Car.css"
import { getPosts } from '../../actions/posts';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../Posts/Post/Post';

function CarList (){
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);


    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return(
        <div className="crlsbg">
            <Nav />
            <div className="carContent">
            {posts.map((post) => (
                <Post post={post} />
            ))}
            </div>
            <footer>copyright</footer>
        </div>
    );
}

export default CarList;