import HeaderComponent from "../components/HeaderComponent";

export default function About() {
  return (
    <main>
      <HeaderComponent />
      <section className="px-8 py-16">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mt-4 text-lg">A little bit about me.</p>
      </section>
    </main>
  );
}
