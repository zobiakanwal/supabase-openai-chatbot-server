import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const getGPTResponse = async (prompt: string): Promise<string> => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: prompt }],
  });

  return response.choices[0].message.content || '';
};