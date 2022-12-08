import React, {useEffect} from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import {useState} from 'react';
import ProfileModal from '../ProfileModal/ProfileModal.js';
import LogOut from "../Logout/LogOut";
import {useParams} from "react-router-dom";
import * as UserApi from "../../API/UserRequests.js";
import {useSelector} from "react-redux";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const {user} = useSelector((state) => state.authReducer.authData);
  const params = useParams();
  const profileUserId = user._id;
  const [profileUser, setProfileUser] = useState({user});

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  return (
    <div className="InfoCard">
      <div className='infoHead'>
        <h4>Your Information</h4>
        <div>
          <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)}/>
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data={user}
          />
        </div>
      </div>
      <div className='info'>
        <span><b>Status </b></span>
        <span>{user.relationship}</span>
      </div>
      <div className='info'>
        <span><b>Lives in </b></span>
        <span>{user.livesIn}</span>
      </div>
      <div className='info'>
        <span><b>Works at </b></span>
        <span>{user.country}</span>
      </div>
      <LogOut/>

    </div>
  )
}


export default InfoCard;