import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";

dotenv.config();

export const run = async () => {
  const llm = new OpenAI({});
  const res = await llm.call("Tell me a joke");

  console.log(res);
};

run();
