<script setup lang="ts">
import {
  ArrowRightIcon,
  CameraIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  PresentationChartLineIcon,
} from '@heroicons/vue/24/outline'
import { addOnOptions, packageInclusions, stats, testimonials } from '~/data/siteContent'

useSeoMeta({
  title: 'B Creative Agency | Social Media Management',
  description:
    'Warm, strategic social media management by Bethany Coston. Content creation, planning, community management and reporting for growing brands.',
})

const heroReveal = useScrollReveal()
const statsReveal = useScrollReveal()
const servicesReveal = useScrollReveal()
const aboutReveal = useScrollReveal()
const processReveal = useScrollReveal()
const packageReveal = useScrollReveal()
const testimonialsReveal = useScrollReveal()
const ctaReveal = useScrollReveal()

const feedReady = ref(false)
onMounted(() => {
  setTimeout(() => { feedReady.value = true }, 350)
})

const services = [
  {
    name: 'Content shot at yours, edited and posted for you',
    description: 'Monthly on-site visits to capture real footage and photography — then turned into reels, carousels and graphics that feel right for your feed. No stock images, no guesswork.',
    deliverables: ['Monthly on-site content shoot', 'Reels, carousels, statics and branded graphics', '12–15 posts planned, captioned and published'],
    platforms: ['Instagram', 'TikTok'],
    icon: CameraIcon,
    featured: true,
  },
  {
    name: 'A strategy built around your goals, not a generic template',
    description: 'Content pillars, competitor mapping and a monthly calendar that keeps everything intentional.',
    deliverables: ['Initial audit and strategy document', 'Monthly content calendar', 'Competitor and trend research'],
    platforms: ['All platforms'],
    icon: ChartBarIcon,
  },
  {
    name: 'Your comments, DMs and community — handled',
    description: 'Daily engagement so your audience always feels heard and your brand stays warm and responsive.',
    deliverables: ['Comment and DM management', 'Audience engagement', 'UGC spotting and sharing'],
    platforms: ['Instagram', 'Facebook'],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Monthly reports that actually make sense',
    description: 'Plain-English performance reviews with data-led adjustments so you always know what is working.',
    deliverables: ['Reach, engagement and enquiry tracking', 'Monthly review', 'Strategy refinements from data'],
    platforms: ['All platforms'],
    icon: PresentationChartLineIcon,
  },
]

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We get to know your brand, your audience and your goals.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'I build a tailored plan around what will actually move the needle.',
  },
  {
    number: '03',
    title: 'Growth',
    description: 'Consistent, quality content — and the results to back it up.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="site-container min-h-[calc(100vh-6rem)] py-16 md:py-24">
      <div
        :ref="heroReveal.setTarget"
        :class="['reveal-section grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]', heroReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-2xl">
          <div class="flex items-center gap-3">
            <div class="editorial-line !w-6" />
            <SectionLabel>Now accepting new clients</SectionLabel>
          </div>
          <h1 class="mt-8 font-display text-5xl leading-[1.08] text-dark sm:text-6xl lg:text-7xl">
            Your brand deserves to be seen.
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-8 text-mid">
            I help businesses grow on social media through strategic content, community building and real results — not vanity metrics.
          </p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <BaseButton to="/contact" size="lg">Let's work together</BaseButton>
            <BaseButton to="/work" variant="outline" size="lg">See my work</BaseButton>
          </div>
        </div>

        <!-- Mock social feed preview -->
        <div class="relative" :class="{ 'feed-ready': feedReady }">
          <div class="grid-accent p-5 sm:p-6">
            <!-- Mock profile header -->
            <div
              class="feed-el mb-4 flex items-center gap-3 border-b border-border pb-4"
              style="--delay: 0s"
            >
              <div class="h-9 w-9 rounded-full bg-accent/30" />
              <div class="space-y-1.5">
                <div class="h-2.5 w-28 rounded-full bg-dark/15" />
                <div class="h-2 w-20 rounded-full bg-dark/10" />
              </div>
              <div class="ml-auto rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-mid">Follow</div>
            </div>

            <!-- 3x2 post grid — staggered -->
            <div class="grid grid-cols-3 gap-1.5">
              <div class="feed-el aspect-square rounded-xl bg-accent-light" style="--delay: 0.12s" />
              <div class="feed-el aspect-square rounded-xl bg-border/80" style="--delay: 0.2s" />
              <div class="feed-el aspect-square rounded-xl bg-accent/20" style="--delay: 0.28s" />
              <div class="feed-el aspect-square rounded-xl bg-border/60" style="--delay: 0.22s" />
              <div class="feed-el aspect-square rounded-xl bg-accent-light/70" style="--delay: 0.3s" />
              <div class="feed-el aspect-square rounded-xl bg-accent/15" style="--delay: 0.38s" />
            </div>

            <!-- Mock engagement bar -->
            <div
              class="feed-el mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-mid"
              style="--delay: 0.48s"
            >
              <span>2,847 followers</span>
              <div class="flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>8.4% avg engagement</span>
              </div>
            </div>
          </div>

          <!-- Floating pill -->
          <div
            class="feed-el absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-full border border-border bg-surface/95 px-5 py-3 text-sm text-mid shadow-md"
            style="--delay: 0.6s"
          >
            <span class="h-2 w-2 shrink-0 rounded-full bg-accent" />
            Thoughtful content, clear strategy, steady growth.
          </div>
        </div>
      </div>
    </section>

    <!-- Stats strip -->
    <section class="border-y border-border bg-surface/50">
      <div
        :ref="statsReveal.setTarget"
        :class="['site-container reveal-section grid grid-cols-2 py-10 lg:grid-cols-4', statsReveal.isVisible && 'reveal-visible']"
      >
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="flex flex-col items-center gap-1 px-4 py-4 text-center"
          :class="i < stats.length - 1 ? 'border-r border-border' : ''"
        >
          <span class="font-display text-3xl text-dark sm:text-4xl">{{ stat.value }}</span>
          <span class="text-xs leading-5 text-mid">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="page-section">
      <div
        :ref="servicesReveal.setTarget"
        :class="['site-container reveal-section space-y-12', servicesReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-2xl space-y-4">
          <SectionLabel>What I Do</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">Social media that actually works for your business.</h2>
        </div>

        <div class="space-y-4">
          <!-- Featured service — full width -->
          <article class="rounded-[1.75rem] border border-border bg-accent-light/30 p-8 transition duration-200 hover:shadow-md sm:p-10 md:flex md:gap-10">
            <div class="shrink-0 md:pt-1">
              <component :is="services[0].icon" class="h-8 w-8 text-accent" />
            </div>
            <div class="mt-5 md:mt-0">
              <h3 class="font-display text-2xl leading-snug text-dark sm:text-3xl">{{ services[0].name }}</h3>
              <p class="mt-3 max-w-2xl text-base leading-7 text-mid">{{ services[0].description }}</p>
              <ul class="mt-5 space-y-2">
                <li
                  v-for="d in services[0].deliverables"
                  :key="d"
                  class="flex items-center gap-2.5 text-sm text-mid"
                >
                  <span class="h-px w-4 shrink-0 bg-accent/60" />
                  {{ d }}
                </li>
              </ul>
              <div class="mt-6 flex flex-wrap items-center gap-3">
                <span
                  v-for="p in services[0].platforms"
                  :key="p"
                  class="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-mid"
                >{{ p }}</span>
                <NuxtLink to="/services" class="ml-auto inline-flex items-center gap-1.5 text-sm text-dark hover:text-accent">
                  See full breakdown <ArrowRightIcon class="h-3.5 w-3.5" />
                </NuxtLink>
              </div>
            </div>
          </article>

          <!-- 3 supporting services -->
          <div class="grid gap-4 md:grid-cols-3">
            <article
              v-for="service in services.slice(1)"
              :key="service.name"
              class="rounded-[1.75rem] border border-border bg-surface p-7 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <component :is="service.icon" class="h-6 w-6 text-accent" />
              <h3 class="mt-4 text-lg font-medium leading-snug text-dark">{{ service.name }}</h3>
              <p class="mt-3 text-sm leading-6 text-mid">{{ service.description }}</p>
              <ul class="mt-4 space-y-1.5">
                <li
                  v-for="d in service.deliverables"
                  :key="d"
                  class="flex items-start gap-2 text-xs text-mid"
                >
                  <span class="mt-1.5 h-px w-3 shrink-0 bg-accent/50" />
                  {{ d }}
                </li>
              </ul>
              <div class="mt-5 flex flex-wrap gap-1.5">
                <span
                  v-for="p in service.platforms"
                  :key="p"
                  class="rounded-full border border-border px-2.5 py-0.5 text-xs text-mid"
                >{{ p }}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- About teaser -->
    <section class="page-section bg-surface/40">
      <div
        :ref="aboutReveal.setTarget"
        :class="['site-container reveal-section grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]', aboutReveal.isVisible && 'reveal-visible']"
      >
        <div class="flex aspect-[3/4] max-h-[520px] items-end justify-start rounded-[2rem] border border-border bg-gradient-to-br from-accent-light to-cream p-8">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.24em] text-mid">B Creative Agency</p>
            <p class="font-display text-3xl text-dark/80">Bethany Coston</p>
          </div>
        </div>

        <div class="space-y-6">
          <SectionLabel>About Me</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">
            Strategy, creativity and a genuine love for what I do.
          </h2>
          <div class="space-y-5 text-base leading-8 text-mid">
            <p>
              I started B Creative Agency because I know how much good businesses can be missed online when they simply do not have the time or headspace to show up consistently.
            </p>
            <p>
              My approach is hands-on, collaborative and personal. I get to know the people behind the brand, the customers they want to reach and the kind of content that will feel right for them.
            </p>
          </div>
          <NuxtLink to="/about" class="inline-flex items-center gap-2 text-sm font-medium text-dark hover:text-accent">
            More about me
            <ArrowRightIcon class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="page-section">
      <div
        :ref="processReveal.setTarget"
        :class="['site-container reveal-section space-y-12', processReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-2xl space-y-4">
          <SectionLabel>How It Works</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">Simple, collaborative, and built around you.</h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article
            v-for="step in steps"
            :key="step.number"
            class="relative rounded-[1.75rem] border border-border bg-surface p-8"
          >
            <p class="font-display text-6xl leading-none text-accent/30">{{ step.number }}</p>
            <h3 class="mt-4 text-xl font-medium text-dark">{{ step.title }}</h3>
            <p class="mt-3 text-base leading-7 text-mid">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Package -->
    <section class="page-section bg-surface/40">
      <div
        :ref="packageReveal.setTarget"
        :class="['site-container reveal-section space-y-10', packageReveal.isVisible && 'reveal-visible']"
      >
        <div class="mx-auto max-w-2xl space-y-4 text-center">
          <SectionLabel>Investment</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">One package, built to deliver.</h2>
        </div>

        <article class="mx-auto max-w-3xl rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
          <div class="space-y-2 border-b border-border pb-8 text-center">
            <h3 class="font-display text-4xl text-dark">Social Media Management</h3>
            <p class="text-3xl font-medium text-accent">£1,000<span class="text-lg font-normal text-mid">/month</span></p>
          </div>

          <div class="grid gap-4 py-8 sm:grid-cols-2">
            <div v-for="item in packageInclusions" :key="item" class="flex items-start gap-3">
              <CheckIcon class="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span class="text-base leading-7 text-mid">{{ item }}</span>
            </div>
          </div>

          <div class="space-y-6 border-t border-border pt-8 text-center">
            <p class="text-sm leading-7 text-mid">
              Every package is tailored to your specific goals. Let's talk.
            </p>
            <BaseButton to="/contact" size="lg">Get in touch</BaseButton>
          </div>
        </article>

        <div class="flex flex-wrap items-center justify-center gap-2">
          <p class="w-full text-center text-xs uppercase tracking-[0.2em] text-mid">Optional add-ons</p>
          <span
            v-for="item in addOnOptions"
            :key="item"
            class="rounded-full border border-border bg-accent-light/60 px-4 py-2 text-sm text-dark"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="page-section">
      <div
        :ref="testimonialsReveal.setTarget"
        :class="['site-container reveal-section space-y-12', testimonialsReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-2xl space-y-4">
          <SectionLabel>Kind Words</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">What clients say.</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <blockquote
            v-for="t in testimonials"
            :key="t.author"
            class="flex flex-col justify-between rounded-[1.75rem] border border-border bg-surface p-8"
          >
            <p class="font-display text-xl leading-8 text-dark">"{{ t.quote }}"</p>
            <footer class="mt-8 border-t border-border pt-6">
              <p class="text-sm font-medium text-dark">{{ t.author }}</p>
              <p class="mt-0.5 text-xs text-mid">{{ t.business }}</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-dark py-28 text-cream">
      <!-- Background glows -->
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div class="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />
        <div class="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/8 blur-[80px]" />
      </div>

      <div
        :ref="ctaReveal.setTarget"
        :class="['site-container reveal-section relative', ctaReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-3xl">
          <div class="mb-8 flex items-center gap-3">
            <div class="h-px w-6 bg-accent" />
            <span class="text-xs font-medium uppercase tracking-[0.28em] text-cream/50">Let's work together</span>
          </div>

          <h2 class="font-display text-5xl leading-[1.08] sm:text-6xl">
            Ready to grow your brand<br class="hidden sm:block" />
            <span class="text-accent">on social?</span>
          </h2>

          <p class="mt-6 max-w-lg text-base leading-7 text-cream/60">
            I work with a small number of clients at a time to keep things personal. If you're ready to invest in your social presence, let's have a conversation.
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BaseButton to="/contact" size="lg">Start a conversation</BaseButton>
            <NuxtLink
              to="/work"
              class="inline-flex items-center gap-2 text-sm text-cream/50 transition hover:text-cream"
            >
              See my work <ArrowRightIcon class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <div class="mt-16 flex items-center gap-3 border-t border-cream/10 pt-8">
          <span class="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span class="text-sm text-cream/40">Currently accepting new clients</span>
        </div>
      </div>
    </section>
  </div>
</template>
