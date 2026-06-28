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

  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const articlePath = path.join(blogDir, dirent.name, "article.json");

      if (!fs.existsSync(articlePath)) return null;

      const article = JSON.parse(fs.readFileSync(articlePath, "utf8"));

      return {
        ...article,
        slug: article.slug ?? dirent.name,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b!.date.localeCompare(a!.date)) as Post[];
}

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
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-950">
      {/* keep your existing hero/nav/projects/footer code */}

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
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {post.category}
              </p>

              <h3 className="text-xl font-bold group-hover:text-blue-700">
                {post.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{post.summary}</p>

              <p className="mt-6 text-sm font-semibold text-blue-700">
                {post.readTime} · Read article →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* keep the rest of your page */}
    </main>
  );
}