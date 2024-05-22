import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
// import OpenAI from 'openai';

// cors issues :(
export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log("event", event);

  // const openai = new OpenAI({ apiKey });
  // const { name, job, userName, resume } = event.queryStringParameters;//
  // const resp = await openai.chat.completions.create({
  //   messages: [
  //     { role: 'system', content: 'You are a seasoned HR specialist that helps creating cover letters. Create a cover letter based on next answers. It should be not more than 400 words and 3-4 paragraphs. Output a cover letter content without contact information.' },
  //     { "role": "assistant", "content": "What is your name?" },
  //     { "role": "user", "content": userName },
  //     { "role": "assistant", "content": "Provide your resume?" },
  //     { "role": "user", "content": resume },
  //     { "role": "assistant", "content": "What is the job name?" },
  //     { "role": "user", "content": name },
  //     { "role": "assistant", "content": "What is the job description?" },
  //     { "role": "user", "content": job },
  //   ],
  //   model: 'gpt-4o',
  // });
  return {
    statusCode: 200,
    // Modify the CORS settings below to match your specific requirements
    headers: {
      "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
      "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
    },
    body: JSON.stringify("Hello from api-function!"),
  };
};