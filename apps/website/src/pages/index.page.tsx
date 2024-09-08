import Head from "next/head";
import { Container } from "ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Turbo Monorepo — Next.js & Tailwind CSS Monorepo Template</title>
        <meta
          name="description"
          content="A monorepo template using TypeScript, Next.js, Tailwind CSS, Storybook, Jest, Playwright, Lighthouse, ESLint, CommitLint, and Prettier."
        />
      </Head>

      <Container>
        <main className="pb-8 pt-16 sm:pt-24">
          <h1 className="mx-auto text-center text-6xl font-extrabold text-neutral-900 sm:text-7xl lg:text-8xl dark:text-white">
            Infra Packages
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text py-8 text-transparent">
              Turbo Monorepo
            </span>
          </h1>
        </main>
      </Container>
    </>
  );
}
