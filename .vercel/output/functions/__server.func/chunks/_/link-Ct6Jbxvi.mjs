import { unstable_localLink } from "@trpc/client";
import superjson from "superjson";
import { a as appRouter, c as createTRPCContext } from "./router-Wq8RsI7L.mjs";
import { g as getRequestHeaders } from "./server.mjs";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-query";
import "@trpc/server/observable";
import "@trpc/tanstack-react-query";
import "@trpc/server/adapters/fetch";
import "@trpc/server";
import "zod";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "@tanstack/router-core/ssr/server";
import "node:async_hooks";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
const serverLink = unstable_localLink({
  router: appRouter,
  transformer: superjson,
  async createContext() {
    const headers = await getRequestHeaders();
    return createTRPCContext({ headers });
  }
});
export {
  serverLink
};
