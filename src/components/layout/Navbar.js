import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const NavbarContainer = styled.div`
  height: 60px;
  background: rgba(26, 32, 39, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid rgba(108, 99, 255, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--primary);
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.image ? `url(${props.image})` : 'var(--primary)'};
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <Logo>EduForAll</Logo>
      <UserSection>
        {user && (
          <>
            <span>Welcome, {user.firstName}</span>
            <ProfileImage 
              image={user.profileImage}
              onClick={() => navigate('/profile')}
            />
          </>
        )}
        <Button onClick={handleLogout}>Logout</Button>
      </UserSection>
    </NavbarContainer>
  );
};

export default Navbar;