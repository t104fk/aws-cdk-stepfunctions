import { createResponse } from "../utils/response";

export const handler = (event: any) => {
  console.log("Start hello function", event);
  const name = event["name"];
  return createResponse({
    statusCode: 200,
    body: { message: name ? `Hello ${name}!` : "Hello anonymous!" },
  });
};
