import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from '../Posts/Post/Post';
import useStyles from '../Posts/styles';

const ProfileCars = ({ setCurrentId, openModal }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    !posts.length ? <CircularProgress /> : (
      
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          (user?.result?._id === post?.creator) && 
            <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} openModal={openModal} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default ProfileCars;
