<script setup lang="ts">
import {
  CalendarDaysIcon,
  CameraIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  MegaphoneIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/vue/24/outline'
import { addOnOptions, detailedServices } from '~/data/siteContent'

useSeoMeta({
  title: 'Services | B Creative Agency',
  description:
    'Explore B Creative Agency services, including content creation, planning, community management, on-site content capture and monthly reporting.',
})

const heroReveal = useScrollReveal()
const servicesReveal = useScrollReveal()
const addOnsReveal = useScrollReveal()

const icons = [
  CalendarDaysIcon,
  CameraIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
]

const serviceSections = detailedServices.map((service, index) => ({
  ...service,
  icon: icons[index],
}))

const optionalAddOns = [
  {
    title: 'Paid Advertising Management',
    description: 'Support with paid campaigns when organic content needs an extra push.',
  },
  {
    title: 'Additional content visits',
    description: 'Extra filming and photography sessions for busier months or launch periods.',
  },
  {
    title: 'Additional weekly posts',
    description: 'More regular publishing when your content mix calls for it.',
  },
  {
    title: 'Websites, SEO & app support',
    description:
      "If you need help beyond social, I have a trusted software developer on hand for SEO support, website builds and improvements, landing pages, and app work — so everything stays aligned.",
  },
]
</script>

<template>
  <div>
    <section class="site-container page-section">
      <div
        :ref="heroReveal.setTarget"
        :class="['reveal-section max-w-3xl space-y-6', heroReveal.isVisible && 'reveal-visible']"
      >
        <p class="text-sm text-mid">Home / Services</p>
        <SectionLabel>Services</SectionLabel>
        <h1 class="font-display text-5xl text-dark sm:text-6xl">Everything I offer to help your brand show up well online.</h1>
        <p class="text-lg leading-8 text-mid">
          My work blends strategy, content creation and day-to-day social media support, so you can stay visible without carrying it all yourself.
        </p>
      </div>
    </section>

    <section class="pb-24">
      <div
        :ref="servicesReveal.setTarget"
        :class="['site-container reveal-section space-y-6', servicesReveal.isVisible && 'reveal-visible']"
      >
        <article
          v-for="(service, index) in serviceSections"
          :key="service.title"
          class="grid gap-6 rounded-[2rem] border border-border bg-surface p-8 sm:p-10 lg:grid-cols-[0.24fr_0.76fr]"
          :class="index !== serviceSections.length - 1 ? 'mb-6' : ''"
        >
          <div class="space-y-5">
            <component :is="service.icon" class="h-9 w-9 text-accent" />
            <h2 class="font-display text-3xl text-dark">{{ service.title }}</h2>
          </div>

          <div class="space-y-5">
            <p class="text-base leading-8 text-mid">{{ service.summary }}</p>
            <ul class="grid gap-3 text-base leading-7 text-mid sm:grid-cols-2">
              <li v-for="bullet in service.bullets" :key="bullet" class="flex gap-3 rounded-2xl bg-cream px-4 py-4">
                <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section class="page-section bg-dark text-cream">
      <div
        :ref="addOnsReveal.setTarget"
        :class="['site-container reveal-section space-y-10', addOnsReveal.isVisible && 'reveal-visible']"
      >
        <div class="max-w-2xl space-y-4">
          <SectionLabel>Optional Add-ons</SectionLabel>
          <h2 class="font-display text-4xl sm:text-5xl">Extra support when you need more from your socials.</h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article v-for="item in optionalAddOns" :key="item.title" class="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
            <component :is="item.title === 'Websites, SEO & app support' ? WrenchScrewdriverIcon : MegaphoneIcon" class="h-8 w-8 text-accent-light" />
            <h3 class="mt-6 text-2xl font-medium text-cream">{{ item.title }}</h3>
            <p class="mt-3 text-base leading-7 text-cream/70">{{ item.description }}</p>
          </article>
        </div>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="item in addOnOptions"
            :key="item"
            class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cream/80"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
