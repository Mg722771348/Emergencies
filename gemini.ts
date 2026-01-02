import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the MSSG Emergencies AI Assistant. You are an expert on gas safety and heating systems in Fareham, Hampshire.

YOUR CORE TASKS:
1. Identify if the customer is in an emergency (No heating, no hot water, gas smell).
2. If they smell gas: Tell them to exit immediately, call 0800 111999, and then contact Matt at 07415120877.
3. Provide local advice for Fareham (PO14, PO15, PO16).
4. Encourage them to fill out the contact form or call Matt directly for an emergency 60-90 minute response.
5. Be professional, reassuring, and concise.

LOCAL COVERAGE: Fareham, Whiteley, Botley, Hedge End, Bishops Waltham, Southampton, Portsmouth, and Funtley.
`;

export async function getGeminiResponse(history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  // Using process.env.API_KEY directly as required for standard deployment setups
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === '') {
    return "The assistant is currently initializing. For emergency boiler repair in Fareham, please call Matt directly on 07415120877.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having trouble connecting. Please call Matt directly at 07415120877 for help.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is temporarily offline. For emergency boiler repair in Fareham, please call Matt on 07415120877.";
  }
}