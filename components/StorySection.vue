<template>
  <section id="story" class="py-24 bg-brand-bg relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Text Column -->
        <div class="story-content order-2 lg:order-1 transition-all">
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-8 story-stagger opacity-0">Our Story</h2>
          <div class="w-16 h-1 bg-brand-gold mb-12 story-stagger opacity-0"></div>
          
          <div class="space-y-6 text-brand-muted text-lg leading-relaxed story-stagger opacity-0">
            <p>
              Vesper Coffee was founded on a singular obsession: to capture the profound, silent moment when the world slows down. Our beans are sourced from extreme altitudes where the air is thin and the flavor is concentrated.
            </p>
            <p>
              Roasting at Vesper is a ritual. We utilize time-honored techniques to unveil the hidden notes of dark chocolate, stone fruit, and smoke—tailoring each profile to the unique character of the land.
            </p>
          </div>

          <div class="mt-12 p-10 bg-brand-surface border-l-4 border-brand-gold rounded-r-3xl story-stagger opacity-0">
             <p class="italic text-2xl font-serif text-brand-text leading-snug">
               "We invite you to experience the quality and care behind every cup we brew."
             </p>
             <a href="#products" class="inline-block mt-8 px-8 py-3 bg-brand-gold text-brand-bg font-bold rounded-full hover:bg-brand-goldHover transition-all transform hover:-translate-y-1">
               Shop Now
             </a>
          </div>
        </div>

        <!-- Image Column -->
        <div class="relative order-1 lg:order-2 story-img-container opacity-0 transform translate-x-12">
          <div class="absolute -inset-4 border border-brand-gold/10 rounded-[3rem] -z-10 animate-pulse-slow"></div>
          <div class="h-[700px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
             <div class="absolute inset-0 bg-brand-gold/10 group-hover:bg-brand-gold/0 transition-all duration-700"></div>
             <img src="/images/story_hands.png" alt="Hands with Coffee Beans" 
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to(".story-stagger", {
    opacity: 1,
    y: -20,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".story-content",
      start: "top 80%"
    }
  })

  gsap.to(".story-img-container", {
    opacity: 1,
    x: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".story-img-container",
      start: "top 80%"
    }
  })
})
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.05); opacity: 0.3; }
}
.animate-pulse-slow { animation: pulse-slow 6s infinite; }
</style>
