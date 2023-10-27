import React, { useState } from 'react';
import Navbar from './Navbar';
import UserCard from './UserCard';
import Loader from './Loader';
import './App.css';
import getUsers from './Api';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar getUsers={getUsersData} />
      <div className="user-card-grid">
        {loading && <Loader />}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
