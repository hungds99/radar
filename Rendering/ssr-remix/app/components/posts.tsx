/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from '@remix-run/react';

const Posts = ({ posts }: any) => {
  return (
    <div>
      <h3>Render List Post in client...</h3>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
