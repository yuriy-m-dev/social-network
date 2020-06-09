import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img className={s.user} src={profile.photos.large || userPhoto} alt='' />
        <div>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;
