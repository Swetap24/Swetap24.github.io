// Vercel serverless function example: /api/chat.js
module.exports = async (req, res) => {
  const OpenAI = require('openai-api');
  // Load your OpenAI API key from environment variables
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  const openai = new OpenAI(OPENAI_API_KEY);

  const { prompt } = req.body;

  try {
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt: prompt,
      maxTokens: 100,
      temperature: 0.5,
      topP: 1.0,
      presencePenalty: 0.0,
      frequencyPenalty: 0.0,
      bestOf: 1,
      n: 1
    });

    res.json({ response: gptResponse.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
