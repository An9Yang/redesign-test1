import { createRouter, createRootRoute, Outlet, Scripts, createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createTRPCClient, loggerLink, splitLink, httpBatchLink } from "@trpc/client";
import { observable } from "@trpc/server/observable";
import superjson from "superjson";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { initTRPC } from "@trpc/server";
import z from "zod";
const globalCss = "/assets/global-CNtvpD2R.css";
const queryClient = new QueryClient();
const lazyServerLink = (runtime) => (ctx) => observable((observer) => {
  let sub;
  import("./link-Ct6Jbxvi.mjs").then(
    ({ serverLink }) => sub = serverLink(runtime)(ctx).subscribe(observer),
    (err) => observer.error(err)
  );
  return () => sub?.unsubscribe();
});
const trpcClient = createTRPCClient({
  links: [
    loggerLink({
      enabled: (op) => op.direction === "down" && op.result instanceof Error
    }),
    splitLink({
      condition: () => typeof window === "undefined",
      true: lazyServerLink,
      false: httpBatchLink({
        url: "/api/trpc",
        transformer: superjson
      })
    })
  ]
});
createTRPCOptionsProxy({
  client: trpcClient,
  queryClient
});
function TrpcProvider(props) {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, "data-cid": "kLxx_3DE", children: props.children });
}
const Route$2 = createRootRoute({
  component: RootDocument
});
function RootDocument() {
  return /* @__PURE__ */ jsxs("html", { "data-cid": "kKIWuf9G", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Create professional storyboards instantly with AI. Free forever, no account needed, complete privacy. Perfect for films, ads, and video content." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "AI storyboard generator, free storyboard tool, storyboard creator, AI storyboard maker, online storyboard software" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "AI Storyboard Generator - Free, Private, No Sign-Up Required" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Create professional storyboards instantly with AI. Free forever, no account needed, complete privacy." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://ai-storyboard.com/" }),
      /* @__PURE__ */ jsx("meta", { name: "referrer", content: "no-referrer" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://ai-storyboard.com/" }),
      /* @__PURE__ */ jsx("link", { rel: "icon", href: "https://static.step1.dev/1yp0xd/assets/b8745024e8b1.png", type: "image/png", sizes: "512x512" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "/home/styles/style_16aa9e3258a5.css" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "/home/styles/style_f8dd154fe41d.css" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "/home/styles/style_180036e5910f.css" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "/home/styles/style_44662de83434.css" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "/home/styles/merged_styles.css" }),
      /* @__PURE__ */ jsx("title", { children: "AI Storyboard Generator - Free, Private, No Sign-Up Required" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: globalCss }),
      /* @__PURE__ */ jsx("link", { rel: "icon", href: "favicon.png" })
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(TrpcProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-BF362iWd.mjs");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const createTRPCContext = ({ headers }) => {
  return {
    headers
  };
};
const t = initTRPC.context().create({
  transformer: superjson
});
const createTRPCRouter = t.router;
const authMiddleware = t.middleware(({ ctx, next }) => {
  return next({
    ctx: {}
  });
});
const loggingMiddleware = t.middleware(
  async ({ path, type, next, input }) => {
    const start = Date.now();
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const typeAbbr = type === "query" ? "Q" : type === "mutation" ? "M" : "S";
    const fmt = (msg) => `[${timestamp}][${typeAbbr}] ${msg}`;
    console.log(fmt(`${path} - Started`));
    try {
      const result = await next();
      const duration = Date.now() - start;
      if (result.ok) {
        console.log(fmt(`${path} - OK - ${duration}ms`));
      } else {
        console.error(fmt(`${path} - FAILED - ${duration}ms`));
        const error = result.error;
        console.error(fmt(`[Trpc] ${error.code}: ${error.message}`));
      }
      return result;
    } catch (error) {
      const duration = Date.now() - start;
      console.error(fmt(`${path} - FAILED - ${duration}ms`));
      if (error instanceof Error) {
        console.error(fmt(`Error: ${error.message}`));
        console.error(fmt(`Stack: ${error.stack}`));
      }
      throw error;
    }
  }
);
const publicProcedure = t.procedure.use(loggingMiddleware);
t.procedure.use(loggingMiddleware).use(authMiddleware);
const exampleRouter = {
  getServerTime: publicProcedure.query(() => {
    return (/* @__PURE__ */ new Date()).toLocaleString();
  }),
  greet: publicProcedure.input(z.object({ name: z.string() })).query(({ input }) => {
    return `Hello, ${input.name}!`;
  })
};
const appRouter = createTRPCRouter({
  example: exampleRouter
});
function handler({ request }) {
  return fetchRequestHandler({
    req: request,
    router: appRouter,
    endpoint: "/api/trpc",
    createContext: () => createTRPCContext(request)
  });
}
const Route = createFileRoute("/api/trpc/$")({
  server: {
    handlers: {
      GET: handler,
      POST: handler
    }
  }
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const ApiTrpcSplatRoute = Route.update({
  id: "/api/trpc/$",
  path: "/api/trpc/$",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ApiTrpcSplatRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-screen w-screen overflow-hidden", "data-cid": "hfbKL_Eh", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-bold", children: "404 - Not Found" }) });
}
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  appRouter as a,
  createTRPCContext as c,
  router as r
};
