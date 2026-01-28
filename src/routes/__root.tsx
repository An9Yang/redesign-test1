/// <reference types="vite/client" />
import { Outlet, createRootRoute, Scripts } from '@tanstack/react-router';

import globalCss from '@/styles/global.css?url';
import { TrpcProvider } from '@/client/trpc/provider';

export const Route = createRootRoute({
  component: RootDocument,
});

function RootDocument() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Create professional storyboards instantly with AI. Free forever, no account needed, complete privacy. Perfect for films, ads, and video content."
        />
        <meta
          name="keywords"
          content="AI storyboard generator, free storyboard tool, storyboard creator, AI storyboard maker, online storyboard software"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="AI Storyboard Generator - Free, Private, No Sign-Up Required"
        />
        <meta
          property="og:description"
          content="Create professional storyboards instantly with AI. Free forever, no account needed, complete privacy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-storyboard.com/" />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://ai-storyboard.com/" />
        <link
          rel="icon"
          href="https://static.step1.dev/1yp0xd/assets/b8745024e8b1.png"
          type="image/png"
          sizes="512x512"
        />
        <link rel="stylesheet" href="/home/styles/style_16aa9e3258a5.css" />
        <link rel="stylesheet" href="/home/styles/style_f8dd154fe41d.css" />
        <link rel="stylesheet" href="/home/styles/style_180036e5910f.css" />
        <link rel="stylesheet" href="/home/styles/style_44662de83434.css" />
        <link rel="stylesheet" href="/home/styles/merged_styles.css" />
        <title>
          AI Storyboard Generator - Free, Private, No Sign-Up Required
        </title>
        <link rel="stylesheet" href={globalCss} />
        <link rel="icon" href="favicon.png" />
      </head>
      <body>
        <TrpcProvider>
          <Outlet />
        </TrpcProvider>
        <Scripts />
      </body>
    </html>
  );
}
