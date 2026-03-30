<template>
  <nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-500" 
       :class="{'bg-brand-bg/90 backdrop-blur-2xl py-4 shadow-none': scrolled, 'py-8': !scrolled}">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 text-brand-gold text-2xl font-serif font-bold group">
        <div class="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-bg transition-all duration-500">
           <i class="ph ph-coffee text-2xl"></i>
        </div>
        <span class="tracking-widest uppercase text-lg">Vesper</span>
      </a>

      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center gap-10 text-sm tracking-[0.2em] font-semibold text-brand-text/80 uppercase">
        <a href="#story" class="hover:text-brand-gold transition-colors duration-300 relative group">
          About
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#products" class="hover:text-brand-gold transition-colors duration-300 relative group">
          Menu
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#testimonials" class="hover:text-brand-gold transition-colors duration-300 relative group">
          Reviews
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#visit" class="hover:text-brand-gold transition-colors duration-300 relative group">
          Visit Us
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <!-- Action CTA -->
      <div class="flex items-center gap-6">
        <a href="#products" 
           class="hidden md:flex items-center justify-center px-8 py-3 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold hover:text-brand-bg hover:border-brand-gold transition-all duration-500 transform hover:-translate-y-0.5 cursor-pointer z-[110]">
          Shop Collection
        </a>
        <!-- Mobile Menu Toggle -->
        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-brand-gold text-3xl transition-transform duration-300" :class="{'rotate-90': isMenuOpen}">
          <i class="ph" :class="isMenuOpen ? 'ph-x' : 'ph-list'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 top-[70px] bg-brand-bg/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col items-center justify-center gap-8 text-2xl font-serif">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false" class="text-brand-text hover:text-brand-gold transition-colors duration-300">
          {{ link.name }}
        </a>
        <div class="mt-8 flex gap-8 text-3xl text-brand-gold">
           <i class="ph ph-instagram-logo hover:scale-110 transition-transform"></i>
           <i class="ph ph-facebook-logo hover:scale-110 transition-transform"></i>
           <i class="ph ph-twitter-logo hover:scale-110 transition-transform"></i>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'About', href: '#story' },
  { name: 'Menu', href: '#products' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Visit Us', href: '#visit' },
  { name: 'Contact', href: '#' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

nav {
  /* Prevent layout shift */
  will-change: padding, background-color;
}
</style>
