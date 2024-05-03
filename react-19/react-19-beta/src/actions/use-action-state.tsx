/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateName } from './action-helper';

export default function UseActionStateDemo() {
  return <div>UseActionState</div>;
}

export function AfterUseActionStateDemo() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: any, formData: any) => {
      const error = await updateName(formData.get('name'));
      if (error) {
        return error;
      }
      return null;
    },
    null,
  );

  return (
    <form action={submitAction}>
      <input type='text' name='name' />
      <button type='submit' disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
