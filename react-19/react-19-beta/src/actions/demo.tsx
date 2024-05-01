import { useState, useTransition } from 'react';

const updateName = async (name: string) => {
  return new Promise((resolve) =>
    setTimeout(() => (name === 'error' ? resolve('error') : resolve('success')), 1000),
  );
};

export default function ActionDemo() {
  return (
    <>
      <OldActionDemo />
      <NewActionDemo />
    </>
  );
}

export function OldActionDemo() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const response = await updateName(name);
    setIsPending(false); // -> Issue 1: Set pending state call 2 times
    if (response === 'error') {
      setError('There was an error!');
      return;
    }
    alert('Name updated successfully!');
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export function NewActionDemo() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  //   const [isPending, setIsPending] = useState(false);
  const [isPending, startTransition] = useTransition(); // -> Solve Issue 1: Use transition hook for pending state

  const handleSubmit = async () => {
    startTransition(async () => {
      // setIsPending(true);
      const response = await updateName(name);
      // setIsPending(false);
      if (response === 'error') {
        setError('There was an error!');
        return;
      }
      alert('Name updated successfully!');
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
