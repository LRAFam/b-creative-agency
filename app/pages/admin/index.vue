<script setup lang="ts">
import { PrinterIcon } from '@heroicons/vue/24/outline'
import { addOnOptions, detailedServices, proposalServiceOptions } from '~/data/siteContent'

definePageMeta({
  layout: 'admin',
})

useSeoMeta({
  title: 'Proposal Generator | B Creative Agency',
  description: 'Internal proposal generator for B Creative Agency.',
  robots: 'noindex, nofollow',
})

type ProposalForm = {
  clientName: string
  businessName: string
  date: string
  packagePrice: string
  services: string[]
  addOns: string[]
  customNotes: string
  contactEmail: string
  contactPhone: string
}

const password = ref('')
const authError = ref('')
const isAuthenticated = ref(false)
const previewReady = ref(false)
const previewError = ref('')

const form = reactive<ProposalForm>({
  clientName: '',
  businessName: '',
  date: new Date().toISOString().split('T')[0] ?? '',
  packagePrice: '£1,000',
  services: [...proposalServiceOptions],
  addOns: [],
  customNotes: '',
  contactEmail: 'bethany@bcreativeagency.co.uk',
  contactPhone: '07400 000000',
})

const selectedServices = computed(() => detailedServices.filter((service) => form.services.includes(service.title)))

const unlock = () => {
  if (password.value === 'bcreative2025') {
    isAuthenticated.value = true
    authError.value = ''
    return
  }

  authError.value = 'Incorrect password.'
}

const generatePreview = () => {
  if (!form.clientName.trim() || !form.businessName.trim()) {
    previewError.value = 'Please complete the client and business name fields.'
    previewReady.value = false
    return
  }

  previewError.value = ''
  previewReady.value = true
}

const printProposal = () => {
  if (import.meta.client) {
    window.print()
  }
}
</script>

<template>
  <div class="mx-auto min-h-screen w-full max-w-7xl px-6 py-12 sm:px-10">
    <div v-if="!isAuthenticated" class="mx-auto max-w-md rounded-[2rem] border border-border bg-cream p-8">
      <div class="space-y-4">
        <SectionLabel>Internal Tool</SectionLabel>
        <h1 class="font-display text-4xl text-dark">Proposal Generator</h1>
        <p class="text-base leading-7 text-mid">Enter the password to access the generator.</p>
      </div>

      <div class="mt-8 space-y-4">
        <input
          v-model="password"
          type="password"
          class="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent"
          placeholder="Password"
          @keyup.enter="unlock"
        >
        <p v-if="authError" class="text-sm text-accent">{{ authError }}</p>
        <BaseButton size="lg" class="w-full" @click="unlock">Open tool</BaseButton>
      </div>
    </div>

    <div v-else class="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
      <section class="proposal-form rounded-[2rem] border border-border bg-cream p-8">
        <div class="space-y-3">
          <SectionLabel>Proposal Generator</SectionLabel>
          <h1 class="font-display text-4xl text-dark">Create a proposal preview</h1>
        </div>

        <div class="mt-8 space-y-6">
          <div class="grid gap-6 sm:grid-cols-2">
            <label class="space-y-2 text-sm text-dark">
              <span>Client Name</span>
              <input v-model="form.clientName" type="text" class="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent">
            </label>
            <label class="space-y-2 text-sm text-dark">
              <span>Business Name</span>
              <input v-model="form.businessName" type="text" class="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent">
            </label>
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <label class="space-y-2 text-sm text-dark">
              <span>Date</span>
              <input v-model="form.date" type="date" class="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent">
            </label>
            <label class="space-y-2 text-sm text-dark">
              <span>Package price</span>
              <input v-model="form.packagePrice" type="text" class="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent">
            </label>
          </div>

          <fieldset class="space-y-3">
            <legend class="text-sm text-dark">Services to include</legend>
            <div class="grid gap-3">
              <label
                v-for="service in proposalServiceOptions"
                :key="service"
                class="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-dark"
              >
                <input v-model="form.services" :value="service" type="checkbox" class="h-4 w-4 rounded border-border text-accent focus:ring-accent">
                <span>{{ service }}</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="space-y-3">
            <legend class="text-sm text-dark">Add-ons included</legend>
            <div class="grid gap-3 sm:grid-cols-2">
              <label
                v-for="item in addOnOptions"
                :key="item"
                class="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-dark"
              >
                <input v-model="form.addOns" :value="item" type="checkbox" class="h-4 w-4 rounded border-border text-accent focus:ring-accent">
                <span>{{ item }}</span>
              </label>
            </div>
          </fieldset>

          <label class="space-y-2 text-sm text-dark">
            <span>Custom notes</span>
            <textarea v-model="form.customNotes" rows="5" class="w-full rounded-[1.5rem] border border-border bg-white px-4 py-3 outline-none transition focus:border-accent" />
          </label>

          <div class="grid gap-6 sm:grid-cols-2">
            <label class="space-y-2 text-sm text-dark">
              <span>Bethany email</span>
              <input v-model="form.contactEmail" type="email" class="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent">
            </label>
            <label class="space-y-2 text-sm text-dark">
              <span>Bethany phone</span>
              <input v-model="form.contactPhone" type="text" class="w-full rounded-2xl border border-border bg-white px-4 py-3 outline-none transition focus:border-accent">
            </label>
          </div>

          <p v-if="previewError" class="text-sm text-accent">{{ previewError }}</p>

          <div class="flex flex-col gap-4 sm:flex-row">
            <BaseButton size="lg" @click="generatePreview">Generate Preview</BaseButton>
            <BaseButton variant="outline" size="lg" @click="printProposal">
              <span class="inline-flex items-center gap-2">
                <PrinterIcon class="h-5 w-5" />
                Print / Save as PDF
              </span>
            </BaseButton>
          </div>
        </div>
      </section>

      <section class="print-area rounded-[2rem] border border-border bg-white p-8 sm:p-10">
        <div v-if="previewReady" class="space-y-8 text-dark">
          <header class="space-y-4 border-b border-border pb-8">
            <p class="text-sm uppercase tracking-[0.2em] text-mid">B Creative Agency x {{ form.businessName }}</p>
            <h2 class="font-display text-5xl">Social Media Proposal</h2>
            <div class="grid gap-2 text-sm text-mid sm:grid-cols-2">
              <p>Prepared for {{ form.clientName }}</p>
              <p>Date: {{ form.date }}</p>
            </div>
          </header>

          <section class="space-y-4">
            <h3 class="font-display text-3xl">Overview</h3>
            <p class="text-base leading-8 text-mid">
              Thank you for considering B Creative Agency. This proposal outlines a warm, practical social media package designed to help {{ form.businessName }} stay visible, consistent and memorable online.
            </p>
          </section>

          <section class="space-y-5">
            <h3 class="font-display text-3xl">What's included</h3>
            <article v-for="service in selectedServices" :key="service.title" class="rounded-[1.5rem] border border-border bg-cream p-6">
              <h4 class="text-xl font-medium text-dark">{{ service.title }}</h4>
              <p class="mt-2 text-sm leading-7 text-mid">{{ service.summary }}</p>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-mid">
                <li v-for="bullet in service.bullets" :key="bullet">• {{ bullet }}</li>
              </ul>
            </article>
          </section>

          <section v-if="form.addOns.length" class="space-y-4">
            <h3 class="font-display text-3xl">Add-ons included</h3>
            <div class="flex flex-wrap gap-3">
              <span v-for="item in form.addOns" :key="item" class="rounded-full border border-border bg-accent-light/60 px-4 py-2 text-sm text-dark">
                {{ item }}
              </span>
            </div>
          </section>

          <section class="space-y-3 rounded-[1.5rem] border border-border bg-dark px-6 py-8 text-cream">
            <h3 class="font-display text-3xl">Investment</h3>
            <p class="text-2xl font-medium text-accent-light">{{ form.packagePrice }} per month</p>
          </section>

          <section v-if="form.customNotes.trim()" class="space-y-4">
            <h3 class="font-display text-3xl">Notes</h3>
            <p class="text-base leading-8 text-mid">{{ form.customNotes }}</p>
          </section>

          <footer class="border-t border-border pt-8 text-sm leading-7 text-mid">
            <p>I'd love to support {{ form.businessName }} and build something thoughtful, consistent and effective together.</p>
            <p class="mt-4">Bethany Coston</p>
            <p>{{ form.contactEmail }}</p>
            <p>{{ form.contactPhone }}</p>
          </footer>
        </div>

        <div v-else class="flex h-full min-h-[24rem] items-center justify-center rounded-[1.5rem] border border-dashed border-border bg-cream px-8 text-center text-mid">
          Complete the form and generate a preview to see the proposal here.
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@media print {
  body {
    background: #fff;
  }

  .proposal-form {
    display: none !important;
  }

  .print-area {
    border: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    max-width: 100% !important;
  }
}
</style>
