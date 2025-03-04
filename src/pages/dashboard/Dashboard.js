import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled(motion.div)`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(108, 99, 255, 0.1);

  h3 {
    color: var(--primary);
    margin-bottom: 10px;
  }

  .value {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const RecentActivity = styled.div`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(108, 99, 255, 0.1);

  h2 {
    margin-bottom: 20px;
  }

  .activity-item {
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }

    .time {
      color: var(--primary);
      font-size: 0.9rem;
    }
  }
`;

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const stats = {
    coursesInProgress: 3,
    completedCourses: 2,
    certificates: 2,
    points: 450,
  };

  const recentActivities = [
    {
      id: 1,
      activity: 'Started React Development Course',
      time: '2 hours ago',
    },
    {
      id: 2,
      activity: 'Completed JavaScript Basics Quiz',
      time: '5 hours ago',
    },
    {
      id: 3,
      activity: 'Earned Certificate in Web Development',
      time: '1 day ago',
    },
  ];

  return (
    <DashboardContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-text"
        style={{ marginBottom: '30px' }}
      >
        Welcome back, {user?.firstName || 'User'}!
      </motion.h1>

      <StatsGrid>
        <StatCard
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Courses in Progress</h3>
          <div className="value">{stats.coursesInProgress}</div>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Completed Courses</h3>
          <div className="value">{stats.completedCourses}</div>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Certificates Earned</h3>
          <div className="value">{stats.certificates}</div>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Total Points</h3>
          <div className="value">{stats.points}</div>
        </StatCard>
      </StatsGrid>

      <RecentActivity>
        <h2>Recent Activity</h2>
        {recentActivities.map((activity) => (
          <motion.div
            key={activity.id}
            className="activity-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div>{activity.activity}</div>
            <div className="time">{activity.time}</div>
          </motion.div>
        ))}
      </RecentActivity>
    </DashboardContainer>
  );
};

export default Dashboard;