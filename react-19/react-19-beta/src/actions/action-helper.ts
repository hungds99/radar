export const updateName = async (name: string) => {
    return new Promise((resolve) =>
      setTimeout(() => (name === 'error' ? resolve('error') : resolve('success')), 1000),
    );
  };