import { NextRequest } from "next/server";
import ollama from "ollama";

export async function POST(req: NextRequest) {
  try {
    console.log(req.body)
    // const { message } = req.body;
    const response = await ollama.chat({
      model: "gpt-oss:20b",
      messages: [{ role: "user", content: "hello" }],
    });
    console.log(response.message.content);
    return new Response("", {
      status: 200,
      statusText: response.message.content
    })
  } catch (error) {
    console.error("Error communicating with Ollama:", error);
    return 
  }
}