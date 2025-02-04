import { createRequestHandler } from "@react-router/express";
import express from "express";
const app = express();
app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import("./assets/server-build-CHur1lkf.js"),
    getLoadContext() {
      return {
        VALUE_FROM_EXPRESS: "Hello from Express"
      };
    }
  })
);
export {
  app
};
