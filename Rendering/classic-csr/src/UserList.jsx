/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }

  useEffect(() => fetchUsers().then((data) => setUsers(data)), []);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default UserList;
