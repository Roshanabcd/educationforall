import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SidebarContainer = styled.div`
  background: rgba(26, 32, 39, 0.95);
  width: 250px;
  height: 100vh;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 200px;
    padding: 15px;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }

  @media (max-width: 480px) {
    width: 180px;
    padding: 10px;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  font-size: 16px;
  
  &:hover {
    background: rgba(108, 99, 255, 0.1);
  }
  
  ${props => props.isActive && `
    background: var(--primary);
    &:hover {
      background: var(--primary);
    }
  `}

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  color: white;
  margin-bottom: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const MobileToggle = styled.button`
  display: none;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1000;
  background: var(--primary);
  border: none;
  border-radius: 5px;
  padding: 8px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const user = useSelector(state => state.auth.user);

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <MobileToggle onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </MobileToggle>
      <SidebarContainer isOpen={isOpen}>
        <Logo>EduForAll</Logo>
        <NavItem to="/dashboard" isActive={isActive('/dashboard')} onClick={closeSidebar}>
          Dashboard
        </NavItem>
        <NavItem to="/courses" isActive={isActive('/courses')} onClick={closeSidebar}>
          Courses
        </NavItem>
        <NavItem to="/jobs" isActive={isActive('/jobs')} onClick={closeSidebar}>
          Jobs
        </NavItem>
        <NavItem to="/qa" isActive={isActive('/qa')} onClick={closeSidebar}>
          Q&A
        </NavItem>
        <NavItem to="/chat" isActive={isActive('/chat')} onClick={closeSidebar}>
          Chat
        </NavItem>
        <NavItem to="/projects" isActive={isActive('/projects')} onClick={closeSidebar}>
          Projects
        </NavItem>
        <NavItem to="/certificates" isActive={isActive('/certificates')} onClick={closeSidebar}>
          Certificates
        </NavItem>
        <NavItem to="/code-editor" isActive={isActive('/code-editor')} onClick={closeSidebar}>
          Code Editor
        </NavItem>
        {user?.role === 'admin' && (
          <NavItem to="/admin" isActive={isActive('/admin')} onClick={closeSidebar}>
            Admin Dashboard
          </NavItem>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;