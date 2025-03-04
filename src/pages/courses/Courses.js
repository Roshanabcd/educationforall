import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CoursesContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchBar = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 15px;

  input {
    flex: 1;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(108, 99, 255, 0.2);
    border-radius: 8px;
    color: var(--text);
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }

  select {
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(108, 99, 255, 0.2);
    border-radius: 8px;
    color: var(--text);
    min-width: 150px;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const CourseCard = styled(motion.div)`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.1);
  cursor: pointer;

  .thumbnail {
    height: 180px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
  }

  .content {
    padding: 20px;

    h3 {
      margin-bottom: 10px;
    }

    .info {
      color: #888;
      font-size: 14px;
      margin-bottom: 15px;
    }

    .progress {
      width: 100%;
      height: 6px;
      background: rgba(108, 99, 255, 0.1);
      border-radius: 3px;
      margin-top: 15px;

      .bar {
        height: 100%;
        background: var(--primary);
        border-radius: 3px;
        transition: width 0.3s ease;
      }
    }
  }
`;

const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [courses] = useState([
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'John Smith',
      duration: '20 hours',
      level: 'Intermediate',
      progress: 75,
    },
    {
      id: 2,
      title: 'Node.js Backend Development',
      instructor: 'Jane Doe',
      duration: '15 hours',
      level: 'Advanced',
      progress: 30,
    },
    // Add more courses
  ]);

  return (
    <CoursesContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-text"
        style={{ marginBottom: '30px' }}
      >
        Available Courses
      </motion.h1>

      <SearchBar>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </SearchBar>

      <CourseGrid>
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="thumbnail">
              {course.title.split(' ').map(word => word[0]).join('')}
            </div>
            <div className="content">
              <h3>{course.title}</h3>
              <div className="info">
                <div>Instructor: {course.instructor}</div>
                <div>Duration: {course.duration}</div>
                <div>Level: {course.level}</div>
              </div>
              <div className="progress">
                <div
                  className="bar"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </CourseCard>
        ))}
      </CourseGrid>
    </CoursesContainer>
  );
};

export default Courses;