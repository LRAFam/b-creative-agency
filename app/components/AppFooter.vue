<script setup lang="ts">
const links = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
]
</script>

<template>
  <footer class="border-t border-border bg-surface/70">
    <div class="site-container py-16">
      <div class="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div class="space-y-4">
          <NuxtLink to="/" class="inline-block font-display text-3xl tracking-[0.12em] text-dark">
            B Creative Agency
          </NuxtLink>
          <p class="max-w-sm text-sm leading-7 text-mid">
            Social media that means something.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-sm font-medium uppercase tracking-[0.24em] text-mid">Explore</h2>
          <nav class="flex flex-col gap-3 text-sm text-dark">
            <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="hover:text-accent">
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <div class="space-y-4">
          <h2 class="text-sm font-medium uppercase tracking-[0.24em] text-mid">Connect</h2>
          <div class="flex flex-col gap-3 text-sm text-dark">
            <a href="mailto:hello@bcreativeagency.co.uk" class="hover:text-accent">
              hello@bcreativeagency.co.uk
            </a>
            <a v-for="social in socials" :key="social.label" :href="social.href" class="hover:text-accent">
              {{ social.label }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-border pt-6 text-sm text-mid">
        © {{ new Date().getFullYear() }} B Creative Agency. All rights reserved.
      </div>
    </div>
  </footer>
</template>
