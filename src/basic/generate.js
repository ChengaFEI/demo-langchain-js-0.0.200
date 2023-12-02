import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";

dotenv.config();

export const run = async () => {
  const llm = new OpenAI({});
  const res = await llm.generate([
    "Tell me a joke",
    "Tell me a poem",
    "Tell me a fact about yourself",
  ]);
  console.log(res.generations);
  console.log(res.llmOutput);
};

run();
