export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-slate-950">
        <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
          <nav className="mb-16 flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
            <a href="/" className="font-bold tracking-tight">
              Eyyup Sehmec
            </a>
  
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <a href="/#blog" className="hover:text-blue-700">Blog</a>
              <a href="/#projects" className="hover:text-blue-700">Projects</a>
              <a href="/about" className="text-blue-700">About</a>
            </div>
          </nav>
  
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-blue-100 to-emerald-100 text-center text-slate-500">
                <div>
                  <p className="text-lg font-semibold">Photo coming soon</p>
                  <p className="mt-2 text-sm">Maybe me with the kids 🙂</p>
                </div>
              </div>
            </div>
  
            <div>
              <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                A little about me
              </p>
  
              <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
                Hey, I’m Eyyup.
              </h1>
  
              <p className="mt-6 text-xl leading-8 text-slate-600">
                I’m a backend engineer who enjoys building systems that are
                reliable, practical, and easy to reason about.
              </p>
  
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Most of my work is around Java, Spring Boot, Kafka, distributed
                systems, cloud infrastructure, and payment platforms. I like
                taking complicated backend problems and breaking them down into
                something clear.
              </p>
  
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Outside of engineering, I’m a dad, I like learning new things,
                and I’m always thinking about projects, business ideas, cars,
                and ways to build something useful.
              </p>
            </div>
          </div>
  
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["What I write about", "Backend engineering, Kafka, system design, payments, interviews, and lessons from building software."],
              ["How I think", "Keep things simple first. Make them reliable. Then scale carefully."],
              ["Why this site exists", "A place to share what I’m learning, document projects, and build a stronger engineering portfolio."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }