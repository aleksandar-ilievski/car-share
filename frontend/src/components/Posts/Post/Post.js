import React, { useState } from 'react';
import { Button } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import moment from 'moment';

import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId, openModal }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  
  return (
<div className="cardBody">
        <div className="cardBody1">
            <div className="cardBody2">
                <div className="cardBody3">
                    <div className="cardBody4" style={{backgroundImage: `url(${post.selectedFile})` ||'url(https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png)'}}>
                        <div className="cardBody5">
                        {(user?.result?._id === post?.creator && window.location.pathname ==="/profile" ) && <div className="cardBtn" onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
                            <svg onClick={openModal} className="cardBody6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M3.936,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021S5.957,11.116,5.957,10
								S5.052,7.979,3.936,7.979z M3.936,11.011c-0.558,0-1.011-0.452-1.011-1.011s0.453-1.011,1.011-1.011S4.946,9.441,4.946,10
								S4.494,11.011,3.936,11.011z M16.064,7.979c-1.116,0-2.021,0.905-2.021,2.021s0.905,2.021,2.021,2.021s2.021-0.905,2.021-2.021
								S17.181,7.979,16.064,7.979z M16.064,11.011c-0.559,0-1.011-0.452-1.011-1.011s0.452-1.011,1.011-1.011S17.075,9.441,17.075,10
								S16.623,11.011,16.064,11.011z M10,7.979c-1.116,0-2.021,0.905-2.021,2.021S8.884,12.021,10,12.021s2.021-0.905,2.021-2.021
								S11.116,7.979,10,7.979z M10,11.011c-0.558,0-1.011-0.452-1.011-1.011S9.442,8.989,10,8.989S11.011,9.441,11.011,10
								S10.558,11.011,10,11.011z"></path>
                            </svg>
                            </div>}
                        </div>
                    </div>
                    <Link style={{ textDecoration: 'none'}} to={{pathname: `/car/${post._id}`}}>
                    <div className="cardBody7">
                        <p className="cardBody8">{post.title}</p>
                        <p className="cardBody9">&euro;{post.tags} /day</p>
                        <p className="cardBody10">Posted {moment(post.createdAt).fromNow()}</p>
                    </div>
                    </Link>
                    <div className="cardBody12">
                        <div className="cardBody13">
                            <svg className="cardBody11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.75 100.749">
                              <g>
                                <path d="M75.651,9.501H42.317c-0.472,0-0.917,0.222-1.2,0.6L21.122,36.772c-0.195,0.26-0.3,0.576-0.3,0.9v27.224   c0,0.828,0.671,1.5,1.5,1.5c24.817,0,25.163,23.6,25.165,24.604c0.002,0.827,0.673,1.498,1.5,1.498h26.665   c0.828,0,1.5-0.672,1.5-1.5V11.001C77.151,10.172,76.479,9.501,75.651,9.501z M74.151,89.498H50.398   c-0.507-5.636-3.906-25.246-26.577-26.075V38.172l19.245-25.671h31.084V89.498z"/>
                                <path d="M30.049,38.163c0.253,0.51,0.774,0.833,1.343,0.833h37.216c0.828,0,1.5-0.671,1.5-1.5V18.136c0-0.829-0.672-1.5-1.5-1.5   h-22.55c-0.47,0-0.912,0.22-1.196,0.594L30.196,36.589C29.853,37.043,29.795,37.653,30.049,38.163z M46.804,19.636h20.305v16.359   H34.41L46.804,19.636z"/>
                                <path d="M68.608,44.646h-8.884c-0.828,0-1.5,0.671-1.5,1.5s0.672,1.5,1.5,1.5h8.884c0.828,0,1.5-0.671,1.5-1.5   S69.437,44.646,68.608,44.646z"/>
                              </g>
                            </svg>
                            <p><span className="cardBody14">{post.doors} </span> doors</p>
                        </div>
                        <div className="cardBody13">
                        <svg className="cardBody11" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 240.235 240.235" >
                          <path d="M211.744,6.089C208.081,2.163,203.03,0,197.52,0h-15.143c-11.16,0-21.811,8.942-23.74,19.934l-0.955,5.436  c-0.96,5.47,0.332,10.651,3.639,14.589c3.307,3.938,8.186,6.106,13.74,6.106h19.561c2.714,0,5.339-0.542,7.778-1.504l-2.079,17.761  c-2.001-0.841-4.198-1.289-6.507-1.289h-22.318c-9.561,0-18.952,7.609-20.936,16.961l-19.732,93.027l-93.099-6.69  c-5.031-0.36-9.231,1.345-11.835,4.693c-2.439,3.136-3.152,7.343-2.009,11.847l10.824,42.618  c2.345,9.233,12.004,16.746,21.53,16.746h78.049h1.191h39.729c9.653,0,18.336-7.811,19.354-17.411l15.272-143.981  c0.087-0.823,0.097-1.634,0.069-2.437l5.227-44.648c0.738-1.923,1.207-3.967,1.354-6.087l0.346-4.97  C217.214,15.205,215.407,10.016,211.744,6.089z"/>
                        </svg>
                            <p><span className="cardBody14">{post.seats} </span> seats</p>
                        </div>
                    </div>
                    <div className="cardBody15">
                        <div className="cardBody16">HOSTED BY</div>
                        <div className="cardBody17">
                            <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{backgroundImage: "url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)"}}>
                            </div>
                            <div>
                                <p className="cardBody14">{post.name}</p>
                                <p className="cardBody18" id="txt18">{post.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardEnd" style={{display:"flex"}}>                    
                      {(user?.result?._id === post?.creator) && (
                      <Button variant="contained" size="small" color="secondary" style={{width: "100%"}} onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" /> Delete
                      </Button>
                      )}
                      </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Post;
