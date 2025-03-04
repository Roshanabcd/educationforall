import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificatesContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertificateCard = styled(motion.div)`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(108, 99, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      course: 'React Development',
      issueDate: '2025-02-15',
      grade: 'A',
    },
    // Add more certificates
  ];

  return (
    <CertificatesContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-text"
        style={{ marginBottom: '30px' }}
      >
        My Certificates
      </motion.h1>

      {certificates.map((cert, index) => (
        <CertificateCard
          key={cert.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div>
            <h2>{cert.course}</h2>
            <p>Issued: {cert.issueDate}</p>
            <p>Grade: {cert.grade}</p>
          </div>
          <motion.button
            className="gaming-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download
          </motion.button>
        </CertificateCard>
      ))}
    </CertificatesContainer>
  );
};

export default Certificates;