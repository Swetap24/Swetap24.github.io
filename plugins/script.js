async function sendToChatGPT() {
    const userInput = document.getElementById('userInput').value;
    const responseContainer = document.getElementById('response');

    try {
        // This URL should be replaced with the endpoint of your serverless function
        const vercelFunctionURL = 'https://your-vercel-project-url.vercel.app/api/chat';

        const response = await fetch(vercelFunctionURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: userInput })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        responseContainer.innerHTML = `Response: ${data.response}`;
    } catch (error) {
        console.error('Error:', error);
        responseContainer.innerHTML = `Failed to get response: ${error}`;
    }
}
