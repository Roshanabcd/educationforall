import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const JobsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchSection = styled.div`
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

const JobCard = styled(motion.div)`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.1);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;

    .company-logo {
      width: 60px;
      height: 60px;
      background: linear-gradient(45deg, var(--primary), var(--secondary));
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }
  }

  .tags {
    display: flex;
    gap: 10px;
    margin: 15px 0;

    span {
      padding: 5px 10px;
      background: rgba(108, 99, 255, 0.1);
      border-radius: 15px;
      font-size: 14px;
    }
  }

  button {
    padding: 12px 24px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [jobs] = useState([
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Remote',
      salary: '$120k - $150k',
      type: 'Full-time',
      skills: ['React', 'Redux', 'Node.js'],
      description: 'We are looking for an experienced React developer...',
    },
    // Add more jobs
  ]);

  return (
    <JobsContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-text"
        style={{ marginBottom: '30px' }}
      >
        Job Opportunities
      </motion.h1>

      <SearchSection>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Jobs</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>
      </SearchSection>

      {jobs.map((job, index) => (
        <JobCard
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="header">
            <div>
              <h2>{job.title}</h2>
              <div style={{ color: '#888' }}>{job.company} • {job.location}</div>
            </div>
            <div className="company-logo">
              {job.company[0]}
            </div>
          </div>
          
          <div>{job.description}</div>
          
          <div className="tags">
            {job.skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div style={{ color: '#888' }}>
              {job.type} • {job.salary}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </div>
        </JobCard>
      ))}
    </JobsContainer>
  );
};

export default Jobs;