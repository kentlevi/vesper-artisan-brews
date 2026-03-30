<template>
  <section class="relative min-h-screen bg-brand-bg flex flex-col justify-center overflow-hidden pt-32 pb-20">
    <!-- Background Video -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video autoplay loop muted playsinline class="hero-video w-full h-full object-cover grayscale-[0.2] brightness-[0.4] scale-110">
        <source src="/videos/Video_Generation_With_Physics_Simulation.mp4" type="video/mp4">
      </video>
      <!-- Deep Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-tr from-brand-bg via-brand-bg/60 to-transparent"></div>
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
      <!-- Text Column -->
      <div class="hero-content max-w-4xl">
        <span class="inline-block text-brand-gold font-bold tracking-[0.6em] uppercase text-xs mb-8 hero-stagger opacity-0">
          Vesper — The Artisan Collection
        </span>
        <h1 class="text-5xl sm:text-7xl md:text-9xl font-serif font-bold text-brand-text leading-[1.05] mb-12 hero-stagger opacity-0">
          The Depth <br>
          <span class="text-brand-gold italic">Of Darkness</span> <br>
          Refined.
        </h1>
        <p class="text-brand-muted text-lg md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed hero-stagger opacity-0">
          Handpicked beans from the world's most renown regions, roasted in small batches to preserve their unique profile and rich aroma.
        </p>
        
        <div class="flex flex-wrap gap-10 items-center justify-center hero-stagger opacity-0">
          <a href="#products" class="inline-flex items-center justify-center px-16 py-6 bg-brand-gold text-brand-bg font-bold rounded-full hover:bg-brand-goldHover transition-all duration-500 hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] transform hover:-translate-y-1 text-lg cursor-pointer">
            Explore Menu
          </a>
          <a href="#story" class="flex items-center gap-4 text-brand-gold font-bold group cursor-pointer text-lg">
            <span class="border-b border-brand-gold/30 group-hover:border-brand-gold transition-all duration-300">Our Heritage</span>
            <div class="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-bg transition-all duration-500">
              <i class="ph ph-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>

      <!-- Feature Bar (under Hero) -->
      <div class="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 hero-stagger opacity-0 w-full max-w-6xl">
        <div v-for="(item, idx) in features" :key="idx" 
             class="bg-brand-surface/10 backdrop-blur-3xl p-10 rounded-[2.5rem] flex items-center gap-8 group border border-transparent hover:border-brand-gold/20 transition-all duration-700 hover:bg-brand-surface/20 shadow-2xl hover:shadow-brand-gold/5">
          <div class="w-20 h-20 rounded-3xl bg-brand-bg/80 flex items-center justify-center text-brand-gold text-4xl group-hover:bg-brand-gold group-hover:text-brand-bg transition-all duration-700 border border-brand-gold/10 shadow-inner">
             <i :class="item.icon"></i>
          </div>
          <div class="text-left">
            <h4 class="font-serif font-bold text-2xl text-brand-text mb-2">{{ item.name }}</h4>
            <div class="flex items-center gap-3">
              <div class="flex text-brand-gold text-sm">
                <i class="ph-fill ph-star" v-for="i in 5" :key="i"></i>
              </div>
              <span class="text-brand-gold font-bold text-lg leading-none">{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group cursor-pointer hero-scroll opacity-0">
       <span class="text-brand-gold/40 text-[10px] uppercase tracking-[0.4em] group-hover:text-brand-gold transition-colors duration-500">Scroll to Explore</span>
       <div class="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full bg-brand-gold animate-scroll-line"></div>
       </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const features = [
  { name: 'House Blend', icon: 'ph ph-package', price: '$12.00' },
  { name: 'Specialty Mug', icon: 'ph ph-coffee', price: '$15.00' },
  { name: 'Gold Series Bag', icon: 'ph ph-shopping-bag', price: '$22.00' }
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } })
  
  // Reveal video first
  tl.to(".hero-video", {
    opacity: 1,
    duration: 2,
  })

  // Animate text elements to full visibility (to opacity: 1)
  tl.to(".hero-stagger", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.out"
  }, "-=1.5")
  
  tl.to(".hero-scroll", {
    opacity: 1,
    duration: 1.5
  }, "-=1")
})
</script>

<style scoped>
.hero-video {
  opacity: 0;
}
@keyframes scroll-line {
  0% { transform: translateY(-100%); }
  50% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}
.animate-scroll-line {
  animation: scroll-line 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
</style>
