import HeaderComponent from "../components/HeaderComponent";

export default function About() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[var(--background)] font-sans">
      <HeaderComponent />
      <section className="w-full max-w-3xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
        <p className="mt-4 text-base sm:text-lg">A little bit about me.</p>
      </section>
    </main>
  );
}
