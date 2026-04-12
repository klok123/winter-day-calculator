This is the source for [Winter Day Calculator](https://www.winterdaycalculator.com), a Next.js app focused on snow day estimates, local winter forecast pages, and school-closure planning guides for the United States and Canada.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Google Analytics

The site is wired for Google Analytics 4 using Next.js' recommended `@next/third-parties/google` integration.

To enable it locally, create a `.env.local` file with:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

To enable it on Vercel, add the same environment variable in the project settings and redeploy.

If the variable is missing, Google Analytics will not load.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
