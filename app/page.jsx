'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Megaphone, Play, Sparkles, Target, Users, Video } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional promotional videos, brand storytelling, and high-converting visual campaigns tailored for modern businesses.',
  },
  {
    icon: BarChart3,
    title: 'Video Editing',
    description: 'Fast, polished editing for reels, ads, YouTube content, interviews, podcasts, and commercial campaigns.',
  },
  {
    icon: Users,
    title: 'Social Media Content',
    description: 'Engaging social-first content designed to increase reach, build audience trust, and drive conversions across every platform.',
  },
];

const stats = [
  ['3.8x', 'average engagement lift'],
  ['120+', 'videos and edits delivered'],
  ['42%', 'average social content reach increase'],
];

const portfolio = ['Brand Launch Video', 'Social Reels Campaign', 'Podcast Edit Package', 'Product Promo Video'];

const seoServices = [
  ['Video Production in the UK', 'Creative video production for businesses that need promotional videos, brand stories, launch content, and campaign assets.'],
  ['Professional Video Editing', 'Reliable editing for reels, YouTube videos, podcasts, interviews, adverts, event footage, and social media campaigns.'],
  ['Social Media Content Creation', 'Scroll-stopping content packages for Instagram, TikTok, LinkedIn, Facebook, and YouTube Shorts.'],
];

const testimonials = [
  ['LVG Creative made our brand look polished, modern, and ready for social media.', 'Small Business Client'],
  ['The video edits were fast, clean, and exactly what we needed for our campaign.', 'Marketing Lead'],
  ['Our content finally feels consistent across Instagram, TikTok, and LinkedIn.', 'Founder'],
];

function Button({ children, variant = 'primary', className = '', href = '#contact' }) {
  const styles = variant === 'secondary'
    ? 'border border-white/20 bg-transparent text-white hover:bg-white/10'
    : 'bg-purple-600 text-white hover:bg-purple-500';
  return <a href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${styles} ${className}`}>{children}</a>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-4 text-xl font-bold">
          <Image src="/lvg-logo.jpeg" alt="LVG Creative logo" width={72} height={72} className="h-14 w-auto rounded-xl bg-white p-1 object-contain" priority />
          <span className="tracking-wide">LVG Creative</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <Button href="#contact" className="hidden sm:inline-flex">Book a call</Button>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Creative digital marketing for ambitious brands
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Turn attention into memorable content.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We help businesses grow through powerful video production, professional editing, and scroll-stopping social media content that builds attention and drives engagement.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Start your project <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button href="#services" variant="secondary">View services</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
          <div className="rounded-[1.5rem] bg-slate-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Content performance</p>
                <h2 className="text-2xl font-semibold">Creative growth</h2>
              </div>
              <Target className="h-8 w-8 text-purple-300" />
            </div>
            <div className="space-y-4">
              {[82, 64, 91, 73].map((value, index) => (
                <div key={index}>
                  <div className="mb-2 flex justify-between text-sm text-slate-300">
                    <span>{['Video Campaigns', 'Reels', 'Brand Content', 'Social Growth'][index]}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10"><div className="h-3 rounded-full bg-purple-600" style={{ width: `${value}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Services</p><h2 className="mt-3 text-4xl font-bold">Everything you need to look sharp online.</h2></div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-xl"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold">{service.title}</h3><p className="mt-3 leading-7 text-slate-300">{service.description}</p></div>;
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-16"><div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">{stats.map(([number, label]) => <div key={label} className="rounded-3xl bg-slate-950 p-8 text-center"><div className="text-5xl font-bold text-purple-300">{number}</div><p className="mt-3 text-slate-300">{label}</p></div>)}</div></section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Portfolio</p><h2 className="mt-3 text-4xl font-bold">Showreels, reels, edits, and content campaigns.</h2><p className="mt-4 text-slate-300">Add your best client work, sample videos, or showreel here when ready.</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{portfolio.map((item) => <div key={item} className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl"><div className="mb-5 flex aspect-video items-center justify-center rounded-2xl bg-slate-900 text-center text-slate-400 group-hover:bg-purple-600 group-hover:text-white"><Play className="h-8 w-8" /></div><h3 className="font-semibold">{item}</h3><p className="mt-2 text-sm text-slate-300">Replace this with an embedded video, case study, or client result.</p></div>)}</div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-20"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Social Content</p><h2 className="mt-3 text-4xl font-bold">Built for Instagram, TikTok, LinkedIn, and YouTube Shorts.</h2></div><div className="grid gap-6 md:grid-cols-3">{['Instagram Reel Embed', 'TikTok Embed', 'YouTube Short Embed'].map((embed) => <div key={embed} className="rounded-3xl bg-slate-950 p-6"><div className="flex aspect-[9/16] items-center justify-center rounded-2xl border border-dashed border-white/20 text-center text-slate-400">{embed}</div></div>)}</div></div></section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Process</p><h2 className="mt-3 text-4xl font-bold">A simple system for standout content.</h2></div><div className="grid gap-4">{['Plan your content goals', 'Shoot or source your footage', 'Edit for each platform', 'Publish, review, and improve'].map((step, index) => <div key={step} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-bold text-slate-950">{index + 1}</div><div><h3 className="font-semibold">{step}</h3><p className="mt-1 text-slate-300">Clear creative direction, polished delivery, and content made for the platforms your audience uses.</p></div></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20"><div className="mb-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-widest text-purple-300">SEO Services</p><h2 className="mt-3 text-4xl font-bold">Clear service pages for Google visibility.</h2></div><div className="grid gap-6 md:grid-cols-3">{seoServices.map(([title, description]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-xl"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{description}</p></div>)}</div></section>

      <section className="border-y border-white/10 bg-white/5 py-20"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Testimonials</p><h2 className="mt-3 text-4xl font-bold">Trusted by growing brands and creators.</h2></div><div className="grid gap-6 md:grid-cols-3">{testimonials.map(([quote, name]) => <div key={name} className="rounded-3xl bg-slate-950 p-8"><p className="text-lg leading-8 text-slate-200">“{quote}”</p><p className="mt-6 font-semibold text-purple-300">{name}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20"><div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-widest text-purple-300">Book a Call</p><h2 className="mt-3 text-4xl font-bold">Book a discovery call with LVG Creative.</h2><p className="mt-4 text-slate-300">Add your Calendly, booking link, or preferred scheduling tool here.</p></div><div className="flex min-h-56 items-center justify-center rounded-3xl border border-dashed border-white/20 text-center text-slate-400">Booking Calendar Placeholder</div></div></div></section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24"><div className="rounded-[2rem] bg-purple-600 p-10 text-center text-white md:p-16"><Sparkles className="mx-auto mb-5 h-10 w-10" /><h2 className="text-4xl font-bold">Ready to make your content stand out?</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100">Book a free strategy call and we’ll show you where your biggest content opportunities are hiding. Reach us directly anytime at leah@lvgcreative.co.uk.</p><form className="mx-auto mt-8 grid max-w-2xl gap-4 text-left"><input className="rounded-2xl border border-purple-200 px-5 py-4 text-slate-950 outline-none" placeholder="Your name" /><input className="rounded-2xl border border-purple-200 px-5 py-4 text-slate-950 outline-none" placeholder="Your email" type="email" /><textarea className="min-h-32 rounded-2xl border border-purple-200 px-5 py-4 text-slate-950 outline-none" placeholder="Tell us what you need help with" /><a href="mailto:leah@lvgcreative.co.uk" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">Send enquiry to leah@lvgcreative.co.uk <ArrowRight className="ml-2 h-4 w-4" /></a></form><div className="mt-6 text-lg font-medium text-purple-100">www.lvgcreative.co.uk</div></div></section>
    </main>
  );
}
