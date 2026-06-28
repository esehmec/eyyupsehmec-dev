import fs from "fs";
import path from "path";
import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  date: string;
  readTime: string;
};

function getPosts(): Post[] {
  const blogDir = path.join(process.cwd(), "app", "blog");

  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => {
      const articlePath = path.join(blogDir, item.name, "article.json");

      if (!fs.existsSync(articlePath)) return null;

      const article = JSON.parse(fs.readFileSync(articlePath, "utf8"));

      return {
        ...article,
        slug: article.slug ?? item.name,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b!.date.localeCompare(a!.date)) as Post[];
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950 sm:px-8">
      <section className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900">
          ← Back home
        </Link>

        <header className="mt-12 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Blog
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            Articles
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Notes on backend engineering, distributed systems, Kafka, payments, and technical interviews.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {post.category}
              </p>

              <h2 className="text-xl font-bold group-hover:text-blue-700">
                {post.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {post.summary}
              </p>

              <p className="mt-6 text-sm font-semibold text-blue-700">
                {post.readTime} · Read article →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}