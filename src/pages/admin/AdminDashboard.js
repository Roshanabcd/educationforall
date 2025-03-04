import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const AdminContainer = styled.div`
  padding: 20px;
  margin-left: 250px;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 15px;
    padding-top: 60px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

const Tab = styled.button`
  padding: 12px 20px;
  background: ${(props) => (props.active ? 'var(--primary)' : 'rgba(108, 99, 255, 0.1)')};
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 13px;
    flex: 1;
    min-width: calc(50% - 5px);
  }
`;

const ContentCard = styled.div`
  background: rgba(26, 32, 39, 0.95);
  border-radius: 15px;
  padding: 25px;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    th,
    td {
      padding: 10px;
      font-size: 13px;
      min-width: 120px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Input = styled.input`
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
    min-height: 80px;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 13px;
    width: 100%;
  }
`;

const ProfileImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 2px solid var(--primary);

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const EditorContainer = styled.div`
  margin-top: 20px;
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
`;

const CodeEditor = styled.textarea`
  width: 100%;
  min-height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-family: 'Courier New', monospace;
  padding: 15px;
  margin-top: 10px;
`;

const QAContainer = styled.div`
  margin-top: 20px;
`;

const Question = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
`;

const InfoItem = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: var(--primary);
  }
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  background: ${(props) => (props.delete ? '#ff4444' : 'var(--primary)')};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState([
    { id: 1, title: 'React Basics', description: 'Learn React fundamentals', price: 99 },
  ]);
  const [users, setUsers] = useState([
    {
      id: 1,
      email: 'user@example.com',
      role: 'user',
      firstName: 'John',
      lastName: 'Doe',
      profileImage: 'https://ui-avatars.com/api/?name=John+Doe',
    },
  ]);
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
  ]);
  const [questions, setQuestions] = useState([
    { id: 1, title: 'How to use React Hooks?', author: 'John Doe', answers: 5 },
  ]);
  const [code, setCode] = useState('// Write your code here');
  const [adminProfile, setAdminProfile] = useState({
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@eduforall.com',
    role: 'Administrator',
    profileImage: 'https://ui-avatars.com/api/?name=Admin+User',
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdminProfile((prev) => ({
          ...prev,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <>
            <h2>Add New Course</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Course Title" />
              <TextArea placeholder="Course Description" />
              <Input type="number" placeholder="Price" />
              <Button type="submit">Add Course</Button>
            </Form>
            <h2>Existing Courses</h2>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.description}</td>
                    <td>${course.price}</td>
                    <td>
                      <ActionButton>Edit</ActionButton>
                      <ActionButton delete>Delete</ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );

      case 'users':
        return (
          <>
            <h2>User Management</h2>
            <Table>
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <ProfileImageContainer>
                        <ProfileImage src={user.profileImage} alt={`${user.firstName}'s profile`} />
                      </ProfileImageContainer>
                    </td>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <ActionButton>Edit</ActionButton>
                      <ActionButton delete>Delete</ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );

      case 'editor':
        return (
          <EditorContainer>
            <h2>Code Editor</h2>
            <p>Use this editor to create and edit code snippets for courses</p>
            <CodeEditor value={code} onChange={(e) => setCode(e.target.value)} />
            <Button style={{ marginTop: '10px' }}>Save Code</Button>
          </EditorContainer>
        );

      case 'qa':
        return (
          <QAContainer>
            <h2>Q&A Management</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Search questions..." />
            </Form>
            {questions.map((question) => (
              <Question key={question.id}>
                <h3>{question.title}</h3>
                <p>Posted by: {question.author}</p>
                <p>Answers: {question.answers}</p>
                <ActionButton>View Details</ActionButton>
                <ActionButton delete>Delete</ActionButton>
              </Question>
            ))}
          </QAContainer>
        );

      case 'profile':
        return (
          <>
            <h2>Admin Profile</h2>
            <Form>
              <ImageUploadContainer>
                <ProfileImageContainer>
                  <ProfileImage src={adminProfile.profileImage} alt="Admin profile" />
                </ProfileImageContainer>
                <input
                  type="file"
                  id="profileImage"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <label htmlFor="profileImage">
                  <Button as="span" style={{ marginTop: '10px' }}>
                    Change Profile Picture
                  </Button>
                </label>
              </ImageUploadContainer>
              <Input
                placeholder="First Name"
                value={adminProfile.firstName}
                onChange={(e) =>
                  setAdminProfile((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
              <Input
                placeholder="Last Name"
                value={adminProfile.lastName}
                onChange={(e) =>
                  setAdminProfile((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
              <Input
                placeholder="Email"
                value={adminProfile.email}
                onChange={(e) =>
                  setAdminProfile((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
              <Input placeholder="Role" value={adminProfile.role} disabled />
              <Button>Update Profile</Button>
            </Form>
          </>
        );

      case 'jobs':
        return (
          <>
            <h2>Job Listings</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Job Title" />
              <Input placeholder="Company Name" />
              <Input placeholder="Location" />
              <TextArea placeholder="Job Description" />
              <Button type="submit">Add Job</Button>
            </Form>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>
                      <ActionButton>Edit</ActionButton>
                      <ActionButton delete>Delete</ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <AdminContainer>
      <h1>Admin Dashboard</h1>
      <TabsContainer>
        <Tab active={activeTab === 'courses'} onClick={() => setActiveTab('courses')}>
          Manage Courses
        </Tab>
        <Tab active={activeTab === 'users'} onClick={() => setActiveTab('users')}>
          Manage Users
        </Tab>
        <Tab active={activeTab === 'editor'} onClick={() => setActiveTab('editor')}>
          Code Editor
        </Tab>
        <Tab active={activeTab === 'qa'} onClick={() => setActiveTab('qa')}>
          Q&A
        </Tab>
        <Tab active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>
          Profile
        </Tab>
        <Tab active={activeTab === 'jobs'} onClick={() => setActiveTab('jobs')}>
          Manage Jobs
        </Tab>
      </TabsContainer>
      <ContentCard>{renderContent()}</ContentCard>
    </AdminContainer>
  );
};

export default AdminDashboard;