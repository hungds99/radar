import { useFormStatus } from 'react-dom';

export default function UseFormStatus() {
  const { pending } = useFormStatus();
  return <button type='submit' disabled={pending} />;
}
