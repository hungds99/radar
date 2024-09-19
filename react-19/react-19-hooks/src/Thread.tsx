import { useOptimistic, useRef, useState } from 'react';
import { deliverMessage } from './action';

interface Message {
  text: string;
  sending?: boolean;
  key?: number;
}

export default function Thread() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello there!', sending: false, key: 1 },
  ]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], string>(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }],
  );

  const formRef = useRef<HTMLFormElement>(null);

  async function sendMessage(formData: FormData) {
    const message = formData.get('message');
    if (typeof message === 'string') {
      addOptimisticMessage(message);
      formRef.current?.reset();
      const sentMessage = await deliverMessage(message);
      setMessages((messages) => [...messages, { text: sentMessage }]);
    }
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={sendMessage} ref={formRef}>
        <input type='text' name='message' placeholder='Hello!' />
        <button type='submit'>Send</button>
      </form>
    </>
  );
}
