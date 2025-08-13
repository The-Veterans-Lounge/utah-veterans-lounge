"use client";

export default function Home() {
  const events = [
    {
      title: "Thursday Night Poker Night",
      date: "Thursdays · 6:00–9:30 PM",
      location: "1825 Mountain Springs Pkwy, Springville, UT",
      desc: "Friendly Texas Hold&apos;em night. All skill levels welcome. Food & drinks provided.",
      cta: { label: "View Calendar", href: "/events" },
    },
    {
      title: "Friday Morning D&D",
      date: "Fridays · 8:15–9:30 AM",
      location: "Springville Lounge or Google Meet (request link)",
      desc: "Kick off the morning with an adventure. New players welcome—dice and guides on-site.",
      cta: { label: "View Calendar", href: "/events" },
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center font-bold">
              VL
            </div>
            <span className="sr-only">The Veteran&apos;s Lounge</span>
            <span className="hidden sm:block font-semibold">
              The Veteran&apos;s Lounge
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-black/70" href="#who">
              Who We Are
            </a>
            <a className="hover:text-black/70" href="#what">
              What We Do
            </a>
            <a className="hover:text-black/70" href="#events">
              Events
            </a>
            <a className="hover:text-black/70" href="#donate">
              Donate
            </a>
            <a className="hover:text-black/70" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={async () => {
                console.log("Button is being clicked");
                try {
                  // Dynamic environment detection on client-side
                  const isLocal = window.location.hostname === "localhost";
                  const apiPath = isLocal ? "/app/api" : "/test/api";

                  const response = await fetch(
                    `${apiPath}/stripe/checkout-session`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        amount: isLocal ? 2500 : 5000, // $25 local, $50 hosted
                      }),
                    }
                  );

                  if (!response.ok) {
                    throw new Error(
                      `HTTP ${response.status}: ${response.statusText}`
                    );
                  }

                  const data = (await response.json()) as { url: string };

                  if (!data.url) {
                    throw new Error("No checkout URL received from server");
                  }

                  window.location.href = data.url;
                } catch (error) {
                  console.error("Checkout error:", error);
                  alert(
                    "Payment system temporarily unavailable. Please try again in a moment."
                  );
                }
              }}
              className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 text-sm"
            >
              Donate with Stripe
            </button>
            <a
              href="/join"
              className="px-4 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-sm"
            >
              Join
            </a>
            <a
              href="/donate"
              className="px-4 py-2 rounded-xl bg-black text-white hover:bg-black/90 text-sm"
            >
              Donate
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              A safe, welcoming space for Veterans
            </h1>
            <p className="mt-5 text-lg text-neutral-700 max-w-prose">
              The Veteran&apos;s Lounge is a place to relax, connect, and
              belong. Designed by veterans for veterans—play games, watch
              movies, or just hang out without crowds, noise, or pressure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/join"
                className="px-5 py-3 rounded-2xl bg-black text-white hover:bg-black/90"
              >
                Become a Member
              </a>
              <a
                href="#events"
                className="px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-100"
              >
                See What&apos;s On
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-neutral-600">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/TheVetsLounge"
                className="underline-offset-4 hover:underline"
              >
                Facebook
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/the.veterans.lounge/"
                className="underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="aspect-video rounded-3xl bg-neutral-200 shadow-sm overflow-hidden">
            {/* Replace with your image/video */}
            <img
              alt="Veterans relaxing and playing games"
              src="/images/hero-vet-lounge.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who" className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Who we are</h2>
              <p className="mt-4 text-neutral-700">
                We exist to give veterans a calm place to gather, relax, and
                connect. Many vets—especially those who served in
                combat—struggle with typical hangout spots. Our lounge offers a
                low‑stress alternative built around camaraderie and safety.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden bg-neutral-200 aspect-[16/9]">
                <img
                  alt="Pool table and lounge area"
                  src="/images/who-we-are.jpg"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-6 text-neutral-700">
                Come for table games or consoles, stay for the community.
                Whether you&apos;re in the mood for movies, a few rounds of
                pool, or a quiet conversation, you’ll find a place here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">What we do</h2>
          <p className="mt-3 text-neutral-700 max-w-prose">
            We support veteran well‑being through entertainment, outreach, and
            outdoor recreation.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Entertainment",
                desc: "A welcoming place to hang out, relax, make friends, and have fun—no pressure, just good company.",
                img: "/images/entertainment.jpg",
              },
              {
                title: "Community Outreach",
                desc: "We connect vets with resources and help meet physical and emotional needs across our community.",
                img: "/images/outreach.jpg",
              },
              {
                title: "Recreation",
                desc: "From kayaking to hikes, we organize nearby adventures so veterans can enjoy the outdoors together.",
                img: "/images/recreation.jpg",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] bg-neutral-100 overflow-hidden">
                  <img
                    alt={card.title}
                    src={card.img}
                    className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 text-neutral-700">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">What&apos;s happening</h2>
              <p className="mt-2 text-neutral-700">
                Upcoming events and activities.
              </p>
            </div>
            <a
              href="/events"
              className="px-4 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-100"
            >
              View calendar
            </a>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <article
                key={e.title}
                className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm"
              >
                <div className="aspect-[16/9] bg-neutral-100">
                  <img
                    alt={e.title}
                    src="/images/event-placeholder.jpg"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{e.date}</p>
                  <p className="mt-1 text-sm text-neutral-600">{e.location}</p>
                  <p className="mt-3 text-neutral-700">{e.desc}</p>
                  <div className="mt-4">
                    <a
                      href={e.cta.href}
                      className="text-sm underline underline-offset-4 hover:no-underline"
                    >
                      {e.cta.label}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter + Donate */}
      <section id="donate" className="py-16 lg:py-24 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Support the mission</h2>
            <p className="mt-3 text-white/80 max-w-prose">
              Your gift helps us keep the doors open and programs running for
              veterans in our community. The Veteran&apos;s Lounge is a
              registered 501(c)(19) organization.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="/donate"
                className="px-5 py-3 rounded-2xl bg-white text-black hover:bg-white/90"
              >
                Donate
              </a>
              <a
                href="#newsletter"
                className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/10"
              >
                Join newsletter
              </a>
            </div>
          </div>
          <form
            id="newsletter"
            onSubmit={(e) => e.preventDefault()}
            className="bg-white text-neutral-900 rounded-3xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Join our newsletter</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Get updates on events, activities, and volunteer opportunities. We
              never share your email.
            </p>
            <div className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <button className="rounded-xl px-5 py-3 bg-black text-white hover:bg-black/90">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold">Contact us</h2>
              <p className="mt-2 text-neutral-700">
                Have questions or need the virtual meeting link? Reach out—we’ll
                get back to you soon.
              </p>
              <dl className="mt-6 space-y-3 text-neutral-700">
                <div>
                  <dt className="font-medium">Address</dt>
                  <dd>1825 Mountain Springs Parkway, Springville, UT 84663</dd>
                </div>
                <div>
                  <dt className="font-medium">Email</dt>
                  <dd>
                    <a
                      className="underline underline-offset-4"
                      href="mailto:support@thevetlounge.org"
                    >
                      support@thevetlounge.org
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Phone</dt>
                  <dd>
                    <a
                      className="underline underline-offset-4"
                      href="tel:13852731063"
                    >
                      (385) 273-1063
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between">
                  <p className="text-sm text-neutral-600">
                    By submitting, you agree to be contacted about your inquiry.
                  </p>
                  <button className="rounded-xl px-5 py-3 bg-black text-white hover:bg-black/90">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 items-center">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} The Veteran&apos;s Lounge. All rights
            reserved.
          </p>
          <div className="justify-self-end flex items-center gap-4 text-sm text-neutral-600">
            <a href="/about" className="hover:text-neutral-900">
              About
            </a>
            <a href="/join" className="hover:text-neutral-900">
              Join
            </a>
            <a href="/donate" className="hover:text-neutral-900">
              Donate
            </a>
            <a href="/contact" className="hover:text-neutral-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
