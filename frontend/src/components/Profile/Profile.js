import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import ProfileCars from './ProfileCars';
import Form from '../Form/Form';
import Nav from "../NavBar/Nav";
import "./profile.css";

const Profile = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
    <Nav />
    <div className="profbg">
    <Grow in>
      <Container>
            <Form currentId={currentId} setCurrentId={setCurrentId} showModal={showModal} setShowModal={setShowModal}/>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={8}>
            <ProfileCars setCurrentId={setCurrentId} openModal={openModal}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <button onClick={openModal} className="button-28">Add New Car</button>
          </Grid>
        </Grid>
      </Container>
    </Grow>
    </div>
    </>
  );
};

export default Profile;
