/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from '@remix-run/react';

const Users = ({ users }: any) => {
  return (
    <div>
      <h3>Render List Users in client...</h3>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
