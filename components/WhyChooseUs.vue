<template>
  <section class="py-24 bg-brand-surface relative">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-6">Why Choose Us</h2>
        <div class="w-16 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p class="text-brand-muted text-lg max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">
           Craftsmanship in every grain.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="(item, idx) in features" :key="idx" 
             class="text-center feature-card opacity-0 transform translate-y-8 group">
          <div class="w-32 h-32 mx-auto rounded-full bg-brand-bg flex items-center justify-center p-6 border border-brand-gold/10 group-hover:border-brand-gold/40 transition-all duration-700 relative mb-8 overflow-hidden shadow-2xl">
              <!-- Animated Background Decor for Icons -->
              <div class="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <i :class="[item.icon, 'text-5xl z-10 text-brand-gold transition-transform duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100']"></i>
          </div>
          <h4 class="text-2xl font-serif font-bold text-brand-gold mb-3">{{ item.title }}</h4>
          <p class="text-brand-muted text-sm leading-relaxed max-w-xs mx-auto">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const features = [
  {
    title: 'Quality',
    description: '100% Arabica beans sourced from ethically managed farms.',
    icon: 'ph ph-coffee-bean'
  },
  {
    title: 'Freshness',
    description: 'Roasted in small batches daily to ensure peak aromatic intensity.',
    icon: 'ph ph-timer'
  },
  {
    title: 'Variety',
    description: 'A curated selection of single origin and house-crafted blends.',
    icon: 'ph ph-tray'
  },
  {
    title: 'Sustainability',
    description: 'Eco-friendly packaging and fair trade partnerships across the globe.',
    icon: 'ph ph-leaf'
  }
]

onMounted(() => {
  gsap.to(".feature-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".feature-card",
      start: "top 90%"
    }
  })
})
</script>
