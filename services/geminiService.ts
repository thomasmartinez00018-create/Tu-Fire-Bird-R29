import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Guidelines: Always initialize the GoogleGenAI instance using the process.env.API_KEY.
  // We avoid storing the client as a class property to ensure the latest environment variables are used.

  async getBikeAdvice(userInput: string): Promise<string> {
    // Initialize the AI client directly inside the method using the hard-coded requirement for process.env.API_KEY.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemInstruction = `
      Actúa como un experto vendedor de bicicletas Fire Bird de Argentina. 
      Usa modismos locales (che, boludo -con respeto-, vos, viste).
      Tu objetivo es asesorar sobre talles y modelos de MTB Fire Bird Rodado 29.
      Si el usuario pregunta por el talle, usá esta guía:
      - 1.50m a 1.65m: Talle S (15")
      - 1.65m a 1.75m: Talle M (17")
      - 1.75m a 1.85m: Talle L (19")
      - Más de 1.85m: Talle XL (21")
      
      Sé directo, amigable y cerrá siempre invitándolos a hablar con Iván al WhatsApp.
      Mantené el foco en: Cuadro de Aluminio, Frenos a Disco, Rodado 29.
      No seas demasiado técnico, hablá de "poder ir a laburar cómodo" o "salir a pedalear con amigos".
    `;

    try {
      // Use ai.models.generateContent to query GenAI with the model name and contents.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userInput,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      // The text is extracted via the .text property, not a method.
      return response.text || "Che, se me cortó la cadena. ¿Me repetís la pregunta?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Hubo un drama con la conexión, pero metele al WhatsApp de Iván que él te soluciona todo.";
    }
  }
}