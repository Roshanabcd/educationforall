import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/authSlice';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileCard = styled.div`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

const ImageSection = styled.div`
  width: 200px;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${props => props.image ? `url(${props.image})` : 'var(--primary)'};
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;

const UploadButton = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

const InfoSection = styled.div`
  flex: 1;
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 5px;
    color: var(--primary);
  }
  
  input {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
  }
`;

const SaveButton = styled.button`
  padding: 12px 30px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  float: right;
`;

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    profileImage: user?.profileImage || null
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    dispatch(loginSuccess({
      ...user,
      ...profileData
    }));
  };

  return (
    <ProfileContainer>
      <h1>Profile</h1>
      <ProfileCard>
        <ImageSection>
          <ProfileImage image={profileData.profileImage} />
          <input
            type="file"
            id="profileImage"
            hidden
            accept="image/*"
            onChange={handleImageUpload}
          />
          <label htmlFor="profileImage">
            <UploadButton as="span">Upload Photo</UploadButton>
          </label>
        </ImageSection>
        <InfoSection>
          <InfoItem>
            <label>First Name</label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => setProfileData(prev => ({
                ...prev,
                firstName: e.target.value
              }))}
            />
          </InfoItem>
          <InfoItem>
            <label>Last Name</label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => setProfileData(prev => ({
                ...prev,
                lastName: e.target.value
              }))}
            />
          </InfoItem>
          <InfoItem>
            <label>Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData(prev => ({
                ...prev,
                email: e.target.value
              }))}
            />
          </InfoItem>
          <SaveButton onClick={handleSave}>Save Changes</SaveButton>
        </InfoSection>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;