<script setup lang="ts">
import { ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { budgetOptions, contactServiceOptions, discoveryOptions } from '~/data/siteContent'

useSeoMeta({
  title: 'Contact | B Creative Agency',
  description:
    'Get in touch with B Creative Agency to chat about social media management, content creation and monthly support for your brand.',
})

type ContactForm = {
  name: string
  email: string
  business: string
  phone: string
  services: string[]
  budget: string
  referralSource: string
  message: string
}

const createInitialForm = (): ContactForm => ({
  name: '',
  email: '',
  business: '',
  phone: '',
  services: [],
  budget: budgetOptions[1],
  referralSource: discoveryOptions[0],
  message: '',
})

const form = reactive<ContactForm>(createInitialForm())
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const heroReveal = useScrollReveal()
const formReveal = useScrollReveal()

const validateForm = () => {
  if (!form.name.trim()) {
    return 'Please add your name.'
  }

  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return 'Please add a valid email address.'
  }

  if (!form.business.trim()) {
    return 'Please add your business name.'
  }

  if (!form.message.trim()) {
    return 'Please tell me a little about your business.'
  }

  return ''
}

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = validateForm()

  if (errorMessage.value) {
    return
  }

  isSubmitting.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        business: form.business,
        phone: form.phone,
        services: form.services,
        budget: form.budget,
        referralSource: form.referralSource,
        message: form.message,
      },
    })

    Object.assign(form, createInitialForm())
    successMessage.value = "Thank you! I'll be in touch within 24 hours."
  }
  catch (error) {
    console.error(error)
    errorMessage.value = 'Something went wrong while sending your enquiry. Please try again or email hello@bcreativeagency.co.uk.'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <section class="site-container page-section">
      <div
        :ref="heroReveal.setTarget"
        :class="['reveal-section max-w-3xl space-y-6', heroReveal.isVisible && 'reveal-visible']"
      >
        <SectionLabel>Contact</SectionLabel>
        <h1 class="font-display text-5xl text-dark sm:text-6xl">Get in Touch</h1>
        <p class="text-lg leading-8 text-mid">
          Whether you're ready to start or just exploring options, I'd love to hear from you.
        </p>
      </div>
    </section>

    <section class="pb-24">
      <div
        :ref="formReveal.setTarget"
        :class="['site-container reveal-section grid gap-10 lg:grid-cols-[1.2fr_0.8fr]', formReveal.isVisible && 'reveal-visible']"
      >
        <div class="rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
          <form class="space-y-6" @submit.prevent="submitForm">
            <div class="grid gap-6 sm:grid-cols-2">
              <label class="space-y-2 text-sm text-dark">
                <span>Full name</span>
                <input v-model="form.name" type="text" class="w-full rounded-2xl border border-border bg-cream px-4 py-3 outline-none transition focus:border-accent" required>
              </label>

              <label class="space-y-2 text-sm text-dark">
                <span>Email address</span>
                <input v-model="form.email" type="email" class="w-full rounded-2xl border border-border bg-cream px-4 py-3 outline-none transition focus:border-accent" required>
              </label>
            </div>

            <div class="grid gap-6 sm:grid-cols-2">
              <label class="space-y-2 text-sm text-dark">
                <span>Business name</span>
                <input v-model="form.business" type="text" class="w-full rounded-2xl border border-border bg-cream px-4 py-3 outline-none transition focus:border-accent" required>
              </label>

              <label class="space-y-2 text-sm text-dark">
                <span>Phone number</span>
                <input v-model="form.phone" type="tel" class="w-full rounded-2xl border border-border bg-cream px-4 py-3 outline-none transition focus:border-accent">
              </label>
            </div>

            <fieldset class="space-y-3">
              <legend class="text-sm text-dark">Services interested in</legend>
              <div class="grid gap-3 sm:grid-cols-2">
                <label
                  v-for="service in contactServiceOptions"
                  :key="service"
                  class="flex items-center gap-3 rounded-2xl border border-border bg-cream px-4 py-3 text-sm text-dark"
                >
                  <input v-model="form.services" :value="service" type="checkbox" class="h-4 w-4 rounded border-border text-accent focus:ring-accent">
                  <span>{{ service }}</span>
                </label>
              </div>
            </fieldset>

            <div class="grid gap-6 sm:grid-cols-2">
              <label class="space-y-2 text-sm text-dark">
                <span>Monthly budget</span>
                <select v-model="form.budget" class="w-full rounded-2xl border border-border bg-cream px-4 py-3 outline-none transition focus:border-accent">
                  <option v-for="option in budgetOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </label>

              <label class="space-y-2 text-sm text-dark">
                <span>How did you hear about me?</span>
                <select v-model="form.referralSource" class="w-full rounded-2xl border border-border bg-cream px-4 py-3 outline-none transition focus:border-accent">
                  <option v-for="option in discoveryOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </label>
            </div>

            <label class="space-y-2 text-sm text-dark">
              <span>Message / Tell me about your business</span>
              <textarea
                v-model="form.message"
                rows="6"
                class="w-full rounded-[1.5rem] border border-border bg-cream px-4 py-3 outline-none transition focus:border-accent"
                required
              />
            </label>

            <div class="space-y-4">
              <p v-if="errorMessage" class="rounded-2xl border border-accent/30 bg-accent-light/50 px-4 py-3 text-sm text-dark">
                {{ errorMessage }}
              </p>
              <p v-if="successMessage" class="rounded-2xl border border-border bg-cream px-4 py-3 text-sm text-dark">
                {{ successMessage }}
              </p>
              <BaseButton :disabled="isSubmitting" type="submit" size="lg" class="w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70">
                {{ isSubmitting ? 'Sending enquiry...' : 'Send Enquiry' }}
              </BaseButton>
            </div>
          </form>
        </div>

        <aside class="space-y-6 rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
          <div class="flex items-start gap-4">
            <MapPinIcon class="mt-1 h-6 w-6 shrink-0 text-accent" />
            <div>
              <h2 class="text-lg font-medium text-dark">Location</h2>
              <p class="mt-2 text-base leading-7 text-mid">Based in the UK — working with businesses nationwide</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <ClockIcon class="mt-1 h-6 w-6 shrink-0 text-accent" />
            <div>
              <h2 class="text-lg font-medium text-dark">Response time</h2>
              <p class="mt-2 text-base leading-7 text-mid">I aim to respond within 24 hours</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <EnvelopeIcon class="mt-1 h-6 w-6 shrink-0 text-accent" />
            <div class="space-y-2">
              <h2 class="text-lg font-medium text-dark">Contact</h2>
              <a href="mailto:hello@bcreativeagency.co.uk" class="block text-base text-mid hover:text-accent">hello@bcreativeagency.co.uk</a>
              <a href="#" class="block text-base text-mid hover:text-accent">Instagram: @bcreativeagency</a>
              <a href="#" class="block text-base text-mid hover:text-accent">LinkedIn: B Creative Agency</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
