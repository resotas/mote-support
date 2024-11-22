export const fetchAIResponse = async (inputText) => {
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer YOUR_OPENAI_API_KEY`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: inputText,
      max_tokens: 100,
    }),
  });

  const data = await response.json();
  return data.choices[0].text.trim();
};
