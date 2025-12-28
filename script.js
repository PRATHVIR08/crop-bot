// ================================
// Gemini API Configuration
// ================================

// ❗ DO NOT expose real API key in frontend
// Replace this with your key ONLY for testing,
// and REMOVE before production
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=" +
  GEMINI_API_KEY;

// ================================
// CHATBOT FUNCTION
// ================================
async function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  if (input.value.trim() === "") return;

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are CropBot, an agriculture AI.
Answer farmer questions about crop diseases, insects, weeds,
and prevention methods in simple language.

Question: ${input.value}`
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that.";

    chat.innerHTML += `<p><b>CropBot:</b> ${reply}</p>`;
    chat.scrollTop = chat.scrollHeight;

  } catch (error) {
    chat.innerHTML += `<p><b>CropBot:</b> Error connecting to AI.</p>`;
    console.error(error);
  }

  input.value = "";
}

// ================================
// IMAGE ANALYSIS FUNCTION (VISION)
// ================================
async function analyzeImage() {
  const fileInput = document.getElementById("imageInput");
  const result = document.getElementById("imageResult");

  if (!fileInput.files[0]) {
    result.innerText = "Please upload an image.";
    return;
  }

  result.innerText = "Analyzing image...";

  // TODO:
  // Convert image to Base64 and send to
  // Gemini Pro Vision API
  // Model: gemini-pro-vision

  result.innerText =
    "Image analysis will detect disease, insects, weeds, and prevention steps (Gemini Vision API goes here).";
}
