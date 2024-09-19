export async function deliverMessage(message: string): Promise<string> {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
