import React from "react";
import env from "react-dotenv";

export function MyComponent() {
  return <div>{env.API_URL}</div>;
}