<template>
  <section class="py-24 bg-brand-bg relative overflow-hidden transition-all duration-700">
    <div class="container mx-auto px-6">
      <div class="bg-brand-surface rounded-[4rem] overflow-hidden relative shadow-2xl border border-brand-gold/10 group">
        <div class="grid lg:grid-cols-2 items-center">
          
          <!-- Text Column -->
          <div class="p-16 lg:p-24 relative z-10">
            <h2 class="text-5xl md:text-7xl font-serif font-bold text-brand-text mb-8 leading-tight cta-reveal">
              Ready to <br>
              <span class="text-brand-gold italic">Experience</span> <br>
              the Best Coffee?
            </h2>
            <p class="text-brand-muted text-xl mb-12 max-w-md italic cta-reveal leading-relaxed opacity-0">
               Taste the distinction made by devotion and craftsmanship in every single cup we brew.
            </p>
            <a href="#products" class="inline-block px-12 py-5 bg-brand-gold text-brand-bg font-bold rounded-full hover:bg-brand-goldHover transition-all duration-500 shadow-xl shadow-brand-gold/20 transform hover:-translate-y-1 cta-reveal opacity-0">
              Check Products
            </a>
          </div>

          <!-- Image Column -->
          <div class="h-[600px] relative overflow-hidden cta-reveal opacity-0">
             <div class="absolute inset-0 bg-gradient-to-r from-brand-surface via-transparent to-transparent z-10 lg:block hidden"></div>
             <img src="/images/cta_machine.png" alt="Premium Espresso Machine" 
                  class="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]">
          </div>
        </div>

        <!-- Decorative Elements inside CTA -->
        <div class="absolute top-10 right-10 w-24 h-24 border border-brand-gold/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-[2s]"></div>
        <div class="absolute bottom-10 left-[45%] w-16 h-16 border border-brand-gold/5 rounded-full pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to(".cta-reveal", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".cta-reveal",
      start: "top 85%"
    }
  })
})
</script>
