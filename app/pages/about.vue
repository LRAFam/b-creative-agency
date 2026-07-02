<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { aboutValues, platformTags } from '~/data/siteContent'

useSeoMeta({
  title: 'About | B Creative Agency',
  description:
    'Meet Bethany Coston, the social media manager behind B Creative Agency, working closely with businesses across lifestyle, hospitality and home improvement.',
})

const heroReveal = useScrollReveal()
const storyReveal = useScrollReveal()
const valuesReveal = useScrollReveal()
const skillsReveal = useScrollReveal()
</script>

<template>
  <div>
    <section class="site-container page-section">
      <div
        :ref="heroReveal.setTarget"
        :class="['reveal-section grid gap-10 lg:grid-cols-[1fr_0.82fr]', heroReveal.isVisible && 'reveal-visible']"
      >
        <div class="space-y-6">
          <SectionLabel>About</SectionLabel>
          <h1 class="font-display text-5xl text-dark sm:text-6xl">Bethany Coston</h1>
          <p class="text-xl text-mid">Social Media Manager & Content Strategist</p>
        </div>

        <div class="flex aspect-[3/4] items-end rounded-[2rem] border border-border bg-accent-light p-8">
          <span class="font-display text-4xl text-dark/80">B Creative Agency</span>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div
        :ref="storyReveal.setTarget"
        :class="['site-container reveal-section grid gap-10 lg:grid-cols-[0.92fr_1.08fr]', storyReveal.isVisible && 'reveal-visible']"
      >
        <div class="space-y-4">
          <SectionLabel>My Story</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">A personal, practical approach to social media.</h2>
        </div>
        <div class="space-y-5 text-base leading-8 text-mid">
          <p>
            I started B Creative Agency to help local businesses compete online without feeling like they have to become full-time content creators themselves.
          </p>
          <p>
            I love storytelling through content — the kind that makes people understand who you are, what you do and why they should trust you. That means spending time on-site, capturing real moments and building a plan that fits your business rather than forcing you into a formula.
          </p>
          <p>
            I work especially well with brands in home improvement, hospitality and lifestyle, and I care just as much about the relationship with my clients as I do about the final posts.
          </p>
        </div>
      </div>
    </section>

    <section class="page-section bg-surface/70">
      <div
        :ref="valuesReveal.setTarget"
        :class="['site-container reveal-section space-y-10', valuesReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-2xl space-y-4">
          <SectionLabel>Values</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">The way I like to work.</h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article v-for="value in aboutValues" :key="value.title" class="rounded-[1.75rem] border border-border bg-surface p-8">
            <h3 class="text-2xl font-medium text-dark">{{ value.title }}</h3>
            <p class="mt-4 text-base leading-7 text-mid">{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div
        :ref="skillsReveal.setTarget"
        :class="['site-container reveal-section space-y-8', skillsReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-2xl space-y-4">
          <SectionLabel>Platforms</SectionLabel>
          <h2 class="font-display text-4xl text-dark sm:text-5xl">Where I support clients.</h2>
        </div>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="platform in platformTags"
            :key="platform"
            class="rounded-full border border-border bg-accent-light/60 px-4 py-2 text-sm font-medium text-dark"
          >
            {{ platform }}
          </span>
        </div>

        <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-sm font-medium text-dark hover:text-accent">
          Want to work together?
          <ArrowRightIcon class="h-4 w-4" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
