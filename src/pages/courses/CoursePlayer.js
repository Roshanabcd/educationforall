import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  height: calc(100vh - 80px);
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const VideoSection = styled.div`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.1);

  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    padding: 20px;
  }
`;

const PlaylistSection = styled.div`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 20px;
  overflow-y: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.1);
`;

const PlaylistItem = styled(motion.div)`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  background: ${props => props.active ? 'rgba(108, 99, 255, 0.2)' : 'transparent'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'transparent'};

  &:hover {
    background: rgba(108, 99, 255, 0.1);
  }

  .duration {
    font-size: 14px;
    color: #888;
    margin-top: 5px;
  }
`;

const CoursePlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const playlist = [
    {
      title: 'Introduction to the Course',
      url: 'https://example.com/video1.mp4',
      duration: '10:15',
    },
    {
      title: 'Getting Started with React',
      url: 'https://example.com/video2.mp4',
      duration: '15:30',
    },
    // Add more videos
  ];

  return (
    <PlayerContainer>
      <VideoSection>
        <div className="player-wrapper">
          <ReactPlayer
            url={playlist[currentVideo].url}
            className="react-player"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {playlist[currentVideo].title}
          </motion.h2>
        </div>
      </VideoSection>

      <PlaylistSection>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '20px' }}
        >
          Course Content
        </motion.h3>
        {playlist.map((video, index) => (
          <PlaylistItem
            key={index}
            active={currentVideo === index}
            onClick={() => setCurrentVideo(index)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div>{video.title}</div>
            <div className="duration">{video.duration}</div>
          </PlaylistItem>
        ))}
      </PlaylistSection>
    </PlayerContainer>
  );
};

export default CoursePlayer;