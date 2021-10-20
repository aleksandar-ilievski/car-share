import React, { useEffect, useState } from "react";
import Nav from "../NavBar/Nav"
import { getPosts } from '../../actions/posts';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Post from '../Posts/Post/Post';
import "./Car.css";

function CarList (){
    // const dispatch = useDispatch();
    // const posts = useSelector((state) => state.posts);

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [dispatch]);

    const [posts, setposts] = useState({});
    const [pageNumber, setPageNumber] = useState(0);
    const [totalpages, setTotalpages] = useState(0);
    const pages = new Array(totalpages).fill(null).map((v,i)=>i);
    useEffect(() => {
        fetch(`http://localhost:5000/posts?page=${pageNumber}`)
            .then((response)=>response.json())
            .then(({numberPages,data})=>{
                setposts(data)
                setTotalpages(numberPages);
                    }
                );
    }, [pageNumber])
    
    const previous = () => {
        setPageNumber(Math.max(0,pageNumber-1))
    }
    const next = () => {
        setPageNumber(Math.min(totalpages-1,pageNumber+1))
    }

    return(
        <div className="crlsbg">
            <Nav />
            {!posts.length ? <CircularProgress /> : (
                
                <div className="carListing">
                {posts.map((post) => (
                    <Post post={post} key={post._id} />
                ))}</div>
            )}
            
            <div className="navBtns">
                <button className="navBtn" onClick={previous}>Previous</button>
                {pages.map((pageIndex)=>(
                    <button className="navBtn" key={pageIndex} onClick={() => setPageNumber(pageIndex)}> 
                        {pageIndex + 1}
                    </button>
                ))}
                <button className="navBtn" onClick={next}>Next</button>
            </div>
            <footer>copyright</footer>
        </div>
    );
}

export default CarList;