import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.1);

  .header {
    padding: 20px;
    border-bottom: 1px solid rgba(108, 99, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      h3 {
        margin-bottom: 5px;
      }

      .tech {
        color: #888;
        font-size: 14px;
      }
    }

    .stats {
      display: flex;
      gap: 15px;
      color: #888;
      font-size: 14px;

      span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }

  .content {
    padding: 20px;

    p {
      margin-bottom: 20px;
      color: #888;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;

      span {
        padding: 5px 10px;
        background: rgba(108, 99, 255, 0.1);
        border-radius: 15px;
        font-size: 14px;
      }
    }

    .actions {
      display: flex;
      gap: 10px;

      button {
        flex: 1;
        padding: 12px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &.primary {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          color: white;
        }

        &.secondary {
          background: rgba(108, 99, 255, 0.1);
          color: var(--primary);
        }

        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }
`;

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [projects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with React and Node.js',
      tech: 'React, Node.js, MongoDB',
      stars: 45,
      forks: 12,
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      difficulty: 'Intermediate',
    },
    {
      id: 2,
      title: 'Chat Application',
      description: 'Real-time chat application using Socket.io',
      tech: 'React, Socket.io, Express',
      stars: 32,
      forks: 8,
      tags: ['React', 'Socket.io', 'Express', 'Real-time'],
      difficulty: 'Advanced',
    },
    // Add more projects
  ]);

  return (
    <ProjectsContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-text"
        style={{ marginBottom: '30px' }}
      >
        Project Repository
      </motion.h1>

      <SearchBar>
        <input
          type="text"
          placeholder="Search projects..."
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

      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="header">
              <div className="title">
                <h3>{project.title}</h3>
                <div className="tech">{project.tech}</div>
              </div>
              <div className="stats">
                <span>⭐ {project.stars}</span>
                <span>🔄 {project.forks}</span>
              </div>
            </div>
            <div className="content">
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="actions">
                <motion.button
                  className="primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.button>
                <motion.button
                  className="secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.button>
              </div>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;