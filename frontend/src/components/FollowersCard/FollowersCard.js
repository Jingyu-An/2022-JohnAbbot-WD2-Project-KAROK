import React, {useEffect, useState} from 'react'
import './FollowersCard.css'
import KAROK from '../../img/KAROK.png';
import {UilSearch} from '@iconscout/react-unicons'; // icon library

import {Followers} from '../../Data/FollowersData';
import {useSelector} from "react-redux";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const {user} = useSelector((state) => state.authReducer.authData);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   const fetchPersons = async () => {
  //     const {data} = await getAllUser();
  //     setPersons(data);
  //   };
  //   fetchPersons();
  // }, []);


  const inputChangeHandler = (e) =>{
    setSearch(e.target.value);
    persons.map(user =>{
      if(user.username.includes(search)){
        console.log("find", user.username);
      }
    })
  }

  return (
    <div className="FollowersCard">
      <div className="LogoSearch">
        <img className='logoPic' src={KAROK} alt=""/>
        <div className="Search">
          <input type="text" placeholder='Find your friend' onChange={inputChangeHandler} value={search}/>
          <div className="s-icon">
            <UilSearch/>
          </div>
        </div>

      </div>

      {Followers.map((follower, id) => {
        if(follower.username.includes(search)){
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className='followerImage'/>
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button'>
              Follow
            </button>
          </div>
        )}
      })}
    </div>
  )
}

export default FollowersCard;

