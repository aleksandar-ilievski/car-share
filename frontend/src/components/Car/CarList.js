import React, { useEffect, useState } from "react";
import Nav from "../NavBar/Nav"

import { CircularProgress } from '@material-ui/core';
import Post from '../Posts/Post/Post';
import "./Car.css";

function CarList (){
    const [posts, setposts] = useState([{}]);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalpages, setTotalpages] = useState(0);
    const [search, setSearch] = useState(null);
    const [sort, setSort] = useState('-createdAt');
    const pages = new Array(totalpages).fill(null).map((v,i)=>i);
    useEffect(() => {
        fetch(`http://localhost:5000/posts?page=${pageNumber}&&sorts=${sort}`)
            .then((response)=>response.json())
            .then(({numberPages,data})=>{
                setposts(data)
                setTotalpages(numberPages);
                    }
                );
    }, [pageNumber,sort])
    
    const previous = () => {
        setPageNumber(Math.max(0,pageNumber-1))
    }
    const next = () => {
        setPageNumber(Math.min(totalpages-1,pageNumber+1))
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleSearchClick = () => {
        fetch(`http://localhost:5000/posts?page=${pageNumber}&&search=${search}&&sorts=${sort}`)
            .then((response)=>response.json())
            .then(({numberPages,data})=>{
                setposts(data)
                setTotalpages(numberPages);
                    }
                );
    }
    
    const pressEnter = (e) => {
        if(e.keyCode === 13)
            handleSearchClick();
    }

    const handleSort = (e) => {
        if(e.target.value === "newest")
            setSort("-createdAt");
        if(e.target.value === "oldest")
            setSort("createdAt");
        if(e.target.value === "asc")
            setSort("tags");
        if(e.target.value === "desc")
            setSort("-tags");
    }

    return(
        <div className="crlsbg">
            <Nav />
            <div className="filters">
                <div className="searchtab">
                    <input onChange={handleSearch} onKeyDown={pressEnter} className="searchbar" type="text" placeholder="City"></input>
                    <button className="searchbtn" onClick={handleSearchClick}>Search</button>
                </div>
                <div className="searchtab">
                    <label className="searchsort" for="sort">Sort by:</label>
                    <select name="sort" id="sort" onChange={handleSort}>
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                        <option value="asc">Price ascending</option>
                        <option value="desc">Price descending</option>
                    </select>
                </div>
            </div>
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