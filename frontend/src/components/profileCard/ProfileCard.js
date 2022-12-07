import React, {useState} from "react";
import Cover from "../../img/cover2.jpg";
import Profile from "../../img/profileImg.jpeg";
import "./ProfileCard.css";
import InfoCard from "../InfoCard/InfoCard";

const ProfileCard = () => {
  

  const ProfilePage = true;
  const [isProfileClick, setIsProfileClick] = useState(true);
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>KAROK TEAM</span>
        <span>Software Developers</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
         )} 
        </div>
        <hr />
      </div>
      <span onClick={()=>setIsProfileClick((prev)=>!prev)}>My Profile</span>
      {
        isProfileClick
        ?<InfoCard/>
          :''
      }

    </div>
  );
};

export default ProfileCard;