<template>
  <section id="visit" class="py-24 bg-brand-bg relative overflow-hidden transition-all duration-700">
    <!-- Subtle Background Decor -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
       <div class="absolute top-[20%] left-[-10%] w-[50%] h-[1px] bg-gradient-to-r from-brand-gold to-transparent"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Info Column -->
        <div class="visit-content opacity-0 transform -translate-x-12">
          <h2 class="text-4xl md:text-6xl font-serif font-bold text-brand-text mb-8">Visit Our <br> <span class="text-brand-gold italic">Sanctuary</span></h2>
          <div class="w-20 h-1 bg-brand-gold mb-12"></div>
          
          <div class="space-y-10 group">
            <div class="flex items-start gap-6 border-b border-white/5 pb-8 group-hover:border-brand-gold/20 transition-all duration-500">
              <div class="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                <i class="ph ph-map-pin text-2xl"></i>
              </div>
              <div>
                <h4 class="font-serif font-bold text-2xl mb-2 text-brand-gold">Location</h4>
                <p class="text-brand-text/80 text-lg leading-relaxed italic">123 Golden Bean Avenue, Suite 404<br>Vesper District, CM 80210</p>
              </div>
            </div>

            <div class="flex items-start gap-6 border-b border-white/5 pb-8">
              <div class="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                <i class="ph ph-clock text-2xl"></i>
              </div>
              <div>
                <h4 class="font-serif font-bold text-2xl mb-2 text-brand-gold">Opening Hours</h4>
                <div class="grid grid-cols-2 gap-x-12 gap-y-1 text-brand-text/80 text-lg italic uppercase tracking-widest text-xs font-bold">
                  <span>Mon – Fri</span> <span class="text-right">7:00 – 19:00</span>
                  <span>Sat – Sun</span> <span class="text-right">8:00 – 21:00</span>
                </div>
              </div>
            </div>

            <div class="flex items-start gap-6">
              <div class="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                <i class="ph ph-phone text-2xl"></i>
              </div>
              <div>
                <h4 class="font-serif font-bold text-2xl mb-2 text-brand-gold">Contact</h4>
                <p class="text-brand-text/80 text-lg leading-relaxed italic">+1 (555) 012-3456<br>hello@vespercoffee.com</p>
              </div>
            </div>
          </div>

          <a href="mailto:hello@vespercoffee.com" class="inline-block mt-16 px-12 py-5 border border-brand-gold text-brand-gold font-bold rounded-full hover:bg-brand-gold hover:text-brand-bg transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/40 transform hover:-translate-y-1">
            Book a Table
          </a>
        </div>

        <!-- Map Column -->
        <div class="relative visit-map-container opacity-0 transform translate-x-12">
          <div class="aspect-square bg-[#1A1410] rounded-[2.5rem] border border-brand-gold/10 overflow-hidden relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] p-1 group">
            <div class="absolute inset-0 bg-brand-gold/5 blur-[100px] rounded-[inherit] group-hover:opacity-10 transition-opacity"></div>
            <!-- Luxury Map Sanctuary -->
            <div class="p-4 w-full h-full relative z-10 overflow-hidden rounded-[2.3rem]">
              <div class="w-full h-full bg-[#0C0806] relative group/map rounded-[inherit] overflow-hidden">
                <!-- Generated Cinematic Map Image -->
                <img src="/images/map_sanctuary.png" alt="Vesper Sanctuary Map" class="w-full h-full object-cover grayscale-[0.3] brightness-90 contrast-110 group-hover/map:brightness-110 transition-all duration-1000 rounded-[inherit]">
                
                <div class="absolute inset-0 bg-brand-bg/20 pointer-events-none"></div>
                
                <div class="relative z-10 w-full h-full flex items-center justify-center">
                   <div class="flex flex-col items-center">
                      <div class="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center animate-bounce shadow-2xl shadow-brand-gold/40 cursor-pointer hover:scale-110 transition-transform">
                          <i class="ph ph-map-pin text-brand-bg text-4xl"></i>
                      </div>
                      <div class="mt-6 bg-[#1A1410]/90 border border-brand-gold/30 px-8 py-4 rounded-2xl text-brand-gold font-bold shadow-2xl backdrop-blur-md uppercase tracking-[0.2em] text-xs">
                         Vesper Sanctuary
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Decorative Frame -->
          <div class="absolute -inset-6 border border-brand-gold/5 rounded-[4.5rem] -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to(".visit-content", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".visit-content",
        start: "top 80%"
    }
  })

  gsap.to(".visit-map-container", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".visit-map-container",
        start: "top 80%"
    }
  })
})
</script>
