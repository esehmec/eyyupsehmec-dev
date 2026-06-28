const posts = [
  "Designing a Money Transfer Platform",
  "Kafka Topics vs Events",
  "Saga Pattern Explained",
];

const projects = [
  "Payment Orchestration Platform",
  "Money Transfer System",
  "AI Blog Assistant",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <nav className="mb-24 flex items-center justify-between">
          <div className="text-lg font-semibold">Eyyup Sehmec</div>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
        </nav>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Senior Backend Engineer
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
            Building reliable backend systems.
          </h1>

          <p className="mb-10 text-xl leading-8 text-zinc-400">
            I write about Java, Spring Boot, Kafka, AWS, Kubernetes,
            distributed systems, payments, and senior engineering interviews.
          </p>

          <div className="flex gap-4">
            <a
              href="#blog"
              className="rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200"
            >
              Read Blog
            </a>

            <a
              href="#projects"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white hover:border-zinc-400"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Latest Articles</h2>

        <div className="grid gap-4">
          {posts.map((post) => (
            <article
              key={post}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-600"
            >
              <h3 className="text-xl font-semibold">{post}</h3>
              <p className="mt-2 text-zinc-400">
                Coming soon — technical notes and practical engineering lessons.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="font-semibold">{project}</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Architecture, implementation notes, and lessons learned.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">About</h2>

        <p className="max-w-3xl text-lg leading-8 text-zinc-400">
          I’m a backend engineer focused on building scalable services,
          event-driven systems, and reliable payment infrastructure.
        </p>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-500">
        © 2026 Eyyup Sehmec. Built with Next.js.
      </footer>
    </main>
  );
}