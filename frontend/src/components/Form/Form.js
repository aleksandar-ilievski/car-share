import React, { useState, useEffect } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
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

  return (
    <Paper className={classes.paper} style={{display:"flex", alignItems:"center", textAlign:"center", overflow:"hidden"}}>
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'List your car'}</Typography>
      <label>Owner Name</label>
      <input type="text" name="name" style={{width:"100%"}} placeholder="Name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
      <label>Car Model</label>
      <input type="text" name="title" style={{width:"100%"}} placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <label>Description</label>
      <textarea name="description" cols="22" rows="4"  placeholder="Description" style={{resize: "none", width:"100%"}} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
      <label>Transmision:</label>
      <select name="transmision">
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>
      <label>Doors</label>
      <input type="number" name="doors" style={{width:"100%"}} value={postData.doors} onChange={(e) => setPostData({ ...postData, doors: e.target.value})} />
      <label>Seats</label>
      <input type="number" name="seats" style={{width:"100%"}} value={postData.seats} onChange={(e) => setPostData({ ...postData, seats: e.target.value})} />
      <label>Price</label>
      <input type="number" name="price" style={{width:"100%"}} value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
    </Paper>
  );
};

export default Form;