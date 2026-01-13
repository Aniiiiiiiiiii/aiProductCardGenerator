// console.log("API KEY:", import.meta.env.VITE_OPENAI_API_KEY);

const API_URL = "https://api.openai.com/v1/responses";

export async function generateProductDetails(productName, category) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: `
Generate product card content.

Product Name: ${productName}
Category: ${category}

Rules for shortDescription:
- Must be EXACTLY 4–5 lines
- Each line should be concise and user-friendly
- Lines should be separated using "\\n"
- Do NOT use bullet points
- Do NOT exceed 80 characters per line

Return STRICT JSON only in this format:
{
  "title": "",
  "shortDescription": "",
  "tags": []
}
      `,
    }),
  });

  const data = await response.json();
  console.log("FULL API RESPONSE:", data);

  if (!response.ok) {
    throw new Error("OpenAI API failed");
  }

  // Extract text from Responses API
  const outputText = data.output[0].content[0].text;

    const cleanText = outputText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

    console.log("AI RAW RESPONSE:", cleanText);
    return JSON.parse(cleanText);



//   return JSON.parse(outputText);
}
