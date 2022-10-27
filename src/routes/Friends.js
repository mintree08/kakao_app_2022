import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProfileList from '../components/ProfileList';
import profileImage from '../data/friendsList.json';
import '../styles/friends.scss';

function Friends() {
  const [profiles, setProfiles] = useState([]);
  const [loading, isLoading] = useState(false);

  const fetchUsers = async () => {
    isLoading(true);
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setProfiles(response.data);
    isLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>; 

  return (
    <>
      <Header
        heading = "Friends"
        num = {1}
        leftItem = "Manage"
        rightItem = {<i className="fa-solid fa-gear"></i>}
      />
      <main>
        <form className="search_box">
          <fieldset className="search_inner">
            <legend className="blind">검색창</legend>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" name="search" id="search" placeholder="Find Friends, Chats, Plus Friends" />
          </fieldset>
        </form>
        <section className="main_section">
          <header><h2>My Profile</h2></header>
          <ul>
            {profiles.map((profile, idx) => {
              if (idx == 0) {
                return (
                  <ProfileList
                    key = {profile.id}
                    name = {profile.name}
                    email = {profile.email}
                    img = {profileImage[idx].image}
                    bg = {profileImage[idx].bg}
                  />
                )
              }
            })}
          </ul>
        </section>
        <section className="main_section">
          <header><h2>Friends</h2></header>
          <ul>
            {profiles.map((profile, idx) => {
              if (idx !== 0) {
                return (
                  <ProfileList
                    key = {profile.id}
                    name = {profile.name}
                    email = {profile.email}
                    img = {profileImage[idx].image}
                    bg = {profileImage[idx].bg}
                  />
                )
              }
            })}
          </ul>
        </section>
      </main>
      <Navigation />
    </>
  );
}

export default Friends;