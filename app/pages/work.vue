<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { caseStudies } from '~/data/siteContent'

useSeoMeta({
  title: 'Work | B Creative Agency',
  description:
    'A selection of brands Bethany Coston has supported with warm, strategic social media management and content creation.',
})

const heroReveal = useScrollReveal()
const gridReveal = useScrollReveal()
</script>

<template>
  <div>
    <section class="site-container page-section">
      <div
        :ref="heroReveal.setTarget"
        :class="['reveal-section max-w-3xl space-y-6', heroReveal.isVisible && 'reveal-visible']"
      >
        <SectionLabel>Client Work</SectionLabel>
        <h1 class="font-display text-5xl text-dark sm:text-6xl">Work</h1>
        <p class="text-lg leading-8 text-mid">
          A selection of brands I've helped grow on social.
        </p>
      </div>
    </section>

    <section class="pb-24">
      <div
        :ref="gridReveal.setTarget"
        :class="['site-container reveal-section', gridReveal.isVisible && 'reveal-visible']"
      >
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="study in caseStudies"
            :key="study.name"
            class="overflow-hidden rounded-[1.75rem] border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex aspect-video items-end justify-between bg-accent-light/70 p-6">
              <span class="font-display text-3xl text-dark/80">{{ study.name }}</span>
              <ArrowTopRightOnSquareIcon class="h-5 w-5 text-dark/50" />
            </div>
            <div class="space-y-5 p-6">
              <div>
                <p class="text-sm uppercase tracking-[0.18em] text-mid">{{ study.category }}</p>
                <h2 class="mt-2 text-2xl font-medium text-dark">{{ study.result }}</h2>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="platform in study.platforms"
                  :key="platform"
                  class="rounded-full border border-border bg-cream px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-mid"
                >
                  {{ platform }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <p class="mt-10 text-sm text-mid">More work available on request.</p>
      </div>
    </section>
  </div>
</template>
