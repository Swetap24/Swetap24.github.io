const apiKey = "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"; 

async function sendToChatGPT() {
    const userInput = document.getElementById('userInput').value;
    const responseContainer = document.getElementById('response');

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "text-davinci-003", // Use an appropriate model
                prompt: userInput,
                max_tokens: 100
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        responseContainer.innerHTML = `GPT-3 says: ${data.choices[0].text}`;
    } catch (error) {
        console.error('Error:', error);
        responseContainer.innerHTML = `Failed to get response: ${error}`;
    }
}
