import Link from 'next/link';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // await sleep(10000);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Users = async () => {
  const users = await getUsers();

  return (
    <>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
