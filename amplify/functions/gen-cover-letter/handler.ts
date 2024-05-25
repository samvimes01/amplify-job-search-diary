import { env } from '$amplify/env/genCoverLetter';
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
  InvokeModelCommandInput,
} from "@aws-sdk/client-bedrock-runtime";
import type { Schema } from "../../data/resource";

export const handler: Schema["generateCover"]["functionHandler"] = async (
  event,
) => {
  const client = new BedrockRuntimeClient({ region: "eu-west-3" });
  const dts = event.arguments.prompt;
  const {
    userName,
    cvText,
    name,
    description,
  } = JSON.parse(dts)
  const prompt = `You are a seasoned HR specialist who helps create cover letters. Create a cover letter based on the next answers.
  Position Name: ${name}
  Description: ${description}
  User CV: ${cvText}
  User name: ${userName}

  It should be not more than 400 words and 3-4 paragraphs. Output just content without contact information.`

  // Invoke model
  const input = {
    modelId: env.MODEL_ID,
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      prompt: `<s>[INST] ${prompt} [/INST]`,
      max_tokens: 2000,
      temperature: 0.5,
    }),
  } as InvokeModelCommandInput;

  const command = new InvokeModelCommand(input);

  const response = await client.send(command);

  const decodedResponseBody = new TextDecoder().decode(response.body);
  const data = JSON.parse(decodedResponseBody);

  return data.outputs[0].text;
};