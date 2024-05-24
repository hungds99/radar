/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';

export default function Comments({ postId }: any) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments and abort
    const controller = new AbortController();
    const { signal } = controller;
    const fetchComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
        { signal },
      );
      const data = await response.json();
      setComments(data);
    };
    fetchComments();
    return () => controller.abort();
  }, [postId]);

  return (
    <div>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment: any) => (
            <li key={comment.id}>
              <p><em>{comment.email}:</em> {comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading comments...</h2>;
}
