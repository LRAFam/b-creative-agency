<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'outline' | 'outline-dark' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    href?: string
    to?: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
  },
)

const attrs = useAttrs()

const baseClasses =
  'inline-flex items-center justify-center rounded-full border font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-cream'

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'outline':
      return 'border-border bg-transparent text-dark hover:border-accent hover:text-accent'
    case 'outline-dark':
      return 'border-cream/30 bg-transparent text-cream hover:border-accent hover:text-accent'
    case 'ghost':
      return 'border-transparent bg-transparent text-dark hover:text-accent'
    default:
      return 'border-accent bg-accent text-white hover:border-dark hover:bg-dark'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-7 py-3.5 text-base'
    default:
      return 'px-5 py-3 text-sm'
  }
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    v-bind="attrs"
    :class="[baseClasses, variantClasses, sizeClasses]"
  >
    <slot />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    v-bind="attrs"
    :class="[baseClasses, variantClasses, sizeClasses]"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    v-bind="attrs"
    :class="[baseClasses, variantClasses, sizeClasses]"
  >
    <slot />
  </button>
</template>
