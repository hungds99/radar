'use client';

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState<any>([]);

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users?.map((user: any) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default UserList;
