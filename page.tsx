import Image from "next/image";
import { ArrowRight, BarChart3, Megaphone, Play, Users } from "lucide-react";

const services = [
  {
    icon: Play,
    title: "Video Production",
    description: "Promotional videos, brand storytelling and high-converting visual campaigns for modern businesses.",
  },
  {
    icon: BarChart3,
    title: "Video Editing",
    description: "Polished editing for reels, adverts, YouTube content, interviews, podcasts and commercial campaigns.",
  },
  {
    icon: Users,
    title: "Social Media Content",
    description: "Scroll-stopping content designed to increase reach, build trust and drive engagement across platforms.",
  },
];

const portfolio = ["Brand Launch Video", "Social Reels Campaign", "Podcast Edit Package", "Product Promo Video"];
const stats = [["120+", "videos and edits delivered"], ["42%", "average reach increase"], ["3.8x", "average engagement lift"]];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4 text-xl font-bold">
          <Image src="/logo.jpeg" alt="LVG Creative Logo" width={80} height={80} className="h-14 w-auto rounded-xl bg-white object-contain p-1" priority />
          <span>LVG Creative</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="mailto:leah@lvgcreative.co.uk" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200">Book a call</a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Creative digital marketing for ambitious brands
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Video content that makes brands impossible to ignore.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            LVG Creative helps businesses grow through powerful video production, professional editing and scroll-stopping social media content.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:leah@lvgcreative.co.uk" className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-4 font-semibold text-white hover:bg-purple-500">
              Start your project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 font-semibold text-white hover:bg-white/10">
              View services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
          <div className="rounded-[1.5rem] bg-slate-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Creative performance</p>
                <h2 className="text-2xl font-semibold">Content growth</h2>
              </div>
              <Megaphone className="h-8 w-8 text-purple-300" />
            </div>
            {[82, 64, 91, 73].map((value, index) => (
              <div key={index} className="mb-4">
                <div className="mb-2 flex justify-between text-sm text-slate-300">
                  <span>{["Video Campaigns", "Reels", "Brand Content", "Social Growth"][index]}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-3 rounded-full bg-white/10"><div className="h-3 rounded-full bg-purple-600" style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Services</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold">Everything you need to grow with video and social content.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600"><Icon className="h-6 w-6" /></div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {stats.map(([number, label]) => (
            <div key={label} className="rounded-3xl bg-slate-950 p-8 text-center">
              <div className="text-5xl font-bold text-purple-300">{number}</div>
              <p className="mt-3 text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Portfolio</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold">Showreels, reels, edits and content campaigns.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl">
              <div className="mb-5 flex aspect-video items-center justify-center rounded-2xl bg-slate-900 text-center text-slate-400">Video Placeholder</div>
              <h3 className="font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-300">Replace this with an embedded video or client result.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[2rem] bg-purple-600 p-10 text-center text-white md:p-16">
          <h2 className="text-4xl font-bold">Ready to create content that gets noticed?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100">
            Contact LVG Creative to discuss video production, video editing or social media content for your brand.
          </p>
          <a href="mailto:leah@lvgcreative.co.uk" className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800">
            Email leah@lvgcreative.co.uk <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <div className="mt-6 text-lg font-medium">www.lvgcreative.co.uk</div>
        </div>
      </section>
    </main>
  );
}
