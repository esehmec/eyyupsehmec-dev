import Image from "next/image";
import Link from "next/link";
import orderFlowImage from "./order-flow.png";
import kafkaComparisonImage from "./with-vs-without-kafka.png";

const content = [
  "When people hear that I work on distributed systems, they usually picture me writing code all day. The reality is that a lot of my job is figuring out how different parts of a system communicate without getting in each other’s way. Imagine you’re ordering food through a delivery app. Your payment goes through, the restaurant gets notified, the driver gets assigned, your receipt is emailed, and the app updates your order status. Those are all separate systems working together. In a small application, one service might simply call all the others directly. That works for a while, but as the product grows, every new feature adds another dependency. Eventually one service knows too much about everyone else, and a problem in one place starts slowing down everything.",
  "That’s where Kafka starts to make sense. Instead of one service calling five others every time something happens, it simply announces what happened: “An order was placed” or “A payment was completed.” Any service that’s interested can react to that event. The payment system doesn’t need to know whether one service is listening or twenty. If six months later another team builds a fraud detection service, they can start listening to those same events without asking the payment team to change their code. That separation makes large systems easier to grow because teams become less dependent on each other.",
  "Of course, Kafka isn’t a magic solution. It trades one kind of complexity for another. Once systems communicate through events instead of direct conversations, you have to think differently about timing, failures, and duplicate messages. A notification might arrive a few seconds later than expected, or a consumer might process the same event twice after recovering from a crash. Those aren’t bugs in Kafka—they’re realities of distributed systems. The value Kafka provides is that it gives engineers reliable tools to handle those situations while allowing applications to scale far beyond what tightly connected services usually can.",
];

export default function KafkaArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#f8faf8] px-5 py-10 text-slate-900 sm:px-8 lg:px-16">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          ← Back home
        </Link>

        <header className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Distributed Systems
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Kafka Explained to a Non-Technical Person
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Kafka helps software systems communicate without creating a tangled web of direct dependencies. This article explains why engineers use it, what problems it solves, and why it also introduces its own challenges.
          </p>
        </header>

        <section className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4 sm:px-8">
            <p className="text-sm font-medium text-slate-500">A simple order flow</p>
          </div>
          <div className="p-4 sm:p-8">
            <Image
              src={orderFlowImage}
              alt="A simple order flow showing order, payment, restaurant, delivery, and receipt steps."
              width={680}
              height={170}
              priority
              className="mx-auto h-auto w-full max-w-2xl rounded-2xl"
            />
          </div>
        </section>

        <section className="mb-12 space-y-7 text-lg leading-9 text-slate-700">
          {content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4 sm:px-8">
            <p className="text-sm font-medium text-slate-500">Direct calls vs. event-driven communication</p>
          </div>
          <div className="p-4 sm:p-8">
            <Image
              src={kafkaComparisonImage}
              alt="A side-by-side comparison of an order service calling several services directly without Kafka versus publishing an event to Kafka that multiple services can consume."
              width={1490}
              height={948}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">The way I think about it</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Without Kafka, services usually talk to each other directly. That feels simple at first, but the connections pile up. With Kafka, services communicate through events. That makes the system easier to extend, but now engineers have to be serious about retries, duplicates, ordering, monitoring, and delayed processing.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            So I do not see Kafka as something that makes architecture automatically cleaner. I see it as a tool that helps teams manage growth when direct service-to-service communication starts becoming a problem.
          </p>
        </section>
      </article>
    </main>
  );
}