<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => { mobileOpen.value = false })

const links = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-cream/90 backdrop-blur-sm">
    <div class="site-container flex h-20 items-center justify-between gap-6">
      <NuxtLink to="/" class="font-display text-2xl tracking-[0.14em] text-dark">
        B Creative
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative text-sm text-mid transition hover:text-dark"
          active-class="text-dark"
          exact-active-class="text-dark after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:bg-accent"
        >
          {{ link.label }}
        </NuxtLink>
        <BaseButton to="/contact" size="sm">Work with me</BaseButton>
      </nav>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-dark md:hidden"
        aria-label="Open navigation menu"
        @click="mobileOpen = true"
      >
        <Bars3Icon class="h-5 w-5" />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileOpen" class="fixed inset-0 bg-dark/30 md:hidden" @click="mobileOpen = false" />
    </Transition>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="mobileOpen"
        class="fixed right-0 top-0 flex h-screen w-[82vw] max-w-sm flex-col border-l border-border bg-surface p-6 shadow-xl md:hidden"
      >
        <div class="mb-10 flex items-center justify-between">
          <span class="font-display text-2xl tracking-[0.14em] text-dark">B Creative</span>
          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-dark"
            aria-label="Close navigation menu"
            @click="mobileOpen = false"
          >
            <XMarkIcon class="h-5 w-5" />
          </button>
        </div>

        <nav class="flex flex-1 flex-col gap-5">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-lg text-dark"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <BaseButton to="/contact" size="lg" class="w-full">Work with me</BaseButton>
      </aside>
    </Transition>
  </header>
</template>
