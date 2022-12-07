import React, {useEffect} from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import {useState} from 'react';
import ProfileModal from '../ProfileModal/ProfileModal.js';
import LogOut from "../Logout/LogOut";
import {useParams} from "react-router-dom";
import * as UserApi from "../../API/UserRequests.js";
import {useDispatch, useSelector} from "react-redux";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const {user} = useSelector((state) => state.authReducer.authData);

  useEffect(() => {

      const fetchProfileUser = async () => {
        if (profileUserId === user._id) {
          setProfileUser(user)
        }else{
          console.log("fetching");
          const profileUser = await UserApi.getUser(profileUserId);
          setProfileUser(profileUser);
        }
      }
    },[user] );

  return (
    <div className="InfoCard">
      <div className='infoHead'>
        <h4>Your Information</h4>
        <div>
          <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)}/>
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data ={user}
          />
        </div>
      </div>
      <div className='info'>
        <span><b>Status </b></span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className='info'>
        <span><b>Lives in </b></span>
        <span>{profileUser.liveIn}</span>
      </div>
      <div className='info'>
        <span><b>Works at </b></span>
        <span>{profileUser.worksAt}</span>
      </div>
      <LogOut/>

    </div>
  )
}


export default InfoCard;