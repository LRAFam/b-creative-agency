import type { ComponentPublicInstance } from 'vue'

export const useScrollReveal = () => {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  const stop = useIntersectionObserver(
    target,
    ([entry]) => {
      if (!entry?.isIntersecting) return
      isVisible.value = true
      stop()
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  )

  // Ensure elements already in viewport on mount are visible
  onMounted(() => {
    if (!target.value) return
    const rect = target.value.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isVisible.value = true
    }
  })

  const setTarget = (element: Element | ComponentPublicInstance | null) => {
    target.value = (element as HTMLElement | null) ?? null
  }

  return { isVisible, setTarget }
}
