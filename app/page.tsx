const posts = [
  {
    title: "Designing a Money Transfer Platform",
    description: "How to think about payments, idempotency, Kafka, and reliability.",
  },
  {
    title: "Kafka Topics vs Events",
    description: "A practical explanation for backend engineers preparing for interviews.",
  },
  {
    title: "Saga Pattern Explained",
    description: "Orchestration, choreography, retries, failures, and recovery.",
  },
];

const projects = [
  "Payment Orchestration Platform",
  "Money Transfer System",
  "AI Blog Assistant",
];

const skills = [
  "Java",
  "Spring Boot",
  "Kafka",
  "AWS",
  "Kubernetes",
  "PostgreSQL",
  "Distributed Systems",
  "Payments",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
        <nav className="mb-16 flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
          <div className="font-bold tracking-tight">Eyyup Sehmec</div>

          <div className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
            <a href="#blog" className="hover:text-blue-700">Blog</a>
            <a href="#projects" className="hover:text-blue-700">Projects</a>
            <a href="#about" className="hover:text-blue-700">About</a>
          </div>
        </nav>

        <div className="grid items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Senior Backend Engineer
            </p>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Building reliable backend systems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I write about Java, Spring Boot, Kafka, AWS, Kubernetes,
              distributed systems, payments, and senior engineering interviews.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#blog"
                className="rounded-full bg-blue-700 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Read Blog
              </a>

              <a
                href="#projects"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <div className="rounded-2xl bg-slate-950 p-5 font-mono text-sm text-slate-100">
              <p className="text-emerald-400">$ whoami</p>
              <p className="mt-3">Eyyup Sehmec</p>
              <p className="mt-5 text-emerald-400">$ focus</p>
              <p className="mt-3">Backend systems, payments, Kafka, reliability</p>
              <p className="mt-5 text-emerald-400">$ currently_building</p>
              <p className="mt-3">Technical blog + engineering portfolio</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Writing
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Latest Articles</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold group-hover:text-blue-700">
                {post.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{post.description}</p>
              <p className="mt-6 text-sm font-semibold text-blue-700">
                Coming soon →
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Featured Projects</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                ⚙️
              </div>
              <h3 className="text-lg font-bold">{project}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Architecture, implementation notes, trade-offs, and lessons learned.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            I build systems that need to be reliable.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            My focus is backend engineering: Java, Spring Boot, event-driven
            architecture, Kafka, cloud deployments, production troubleshooting,
            and payment infrastructure.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 sm:px-8">
        © 2026 Eyyup Sehmec. Built with Next.js.
      </footer>
    </main>
  );
}