import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import "./form.css";

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId, showModal, setShowModal }) => {
  const [postData, setPostData] = useState({ name: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ name: '', title: '', message: '', tags: '', selectedFile: '', doors:'', seats:'', transmision:'' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  const modalRef = useRef();


  const closeModal = () => {
      setShowModal(prev => !prev);
      clear();
  };
 
  return (
    <>
    {showModal ? (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="btnClose">
          <button className="closeBtn" onClick={closeModal}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <h6 style={{textAlign:"center"}}>{currentId ? `Editing "${post.title}"` : 'List your car'}</h6>
          <label>Owner Name</label>
          <input type="text" name="name" style={{width:"100%"}} placeholder="Name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
          <label>Car Model</label>
          <input type="text" name="title" style={{width:"100%"}} placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <label>Description</label>
          <textarea name="description" cols="22" rows="4"  placeholder="Description" style={{resize: "none", width:"100%"}} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
          
          <label>Location</label>
          <input type="text" name="city" style={{width:"100%"}} placeholder="City" value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
          
          <label>Transmision:</label>
          <select name="transmision">
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
          
          <div className="dsp">
            <div>
              <label>Doors</label>
              <input type="number" name="doors" min="2" max="5" value={postData.doors} onChange={(e) => setPostData({ ...postData, doors: e.target.value})} />
            </div>
            <div>
              <label>Seats</label>
              <input type="number" name="seats" min="2" max="7" value={postData.seats} onChange={(e) => setPostData({ ...postData, seats: e.target.value})} />
            </div>
            <div>
              <label>Price</label>
              <input type="number" name="price" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />&euro;
            </div>
          </div>
          <label>Upload image</label>
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <br/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>

      </div>
  </div>     
    ):null}
    </>
  );
};

export default Form;