<template>
  <section id="products" class="py-24 bg-brand-bg relative transition-all duration-700">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-6">Our Signature Coffees</h2>
        <div class="w-16 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p class="text-brand-muted max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold opacity-70">
           Curated for delicate coffee lovers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(product, idx) in products" :key="idx" 
             class="group relative h-[500px] rounded-[2.5rem] overflow-hidden product-card opacity-0 transform translate-y-12">
           <!-- Background Image -->
           <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110">
           
           <!-- Hover Overlay Gradient -->
           <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent transition-all duration-700 opacity-80 group-hover:opacity-100"></div>

           <!-- Glassmorphic Card Container -->
           <div class="absolute left-6 right-6 bottom-6 p-6 bg-brand-surface/90 backdrop-blur-2xl border border-brand-gold/20 rounded-[2.5rem] transition-all duration-700 transform group-hover:translate-y-[-0.5rem] group-hover:border-brand-gold/40 group-hover:bg-brand-bg/95 shadow-2xl z-10">
              <div class="flex justify-between items-center">
                 <h3 class="font-serif text-2xl md:text-3xl font-bold text-brand-gold uppercase tracking-tight">{{ product.name }}</h3>
                 <span class="text-brand-gold font-bold text-lg md:text-xl">{{ product.price }}</span>
              </div>
              
              <div class="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4 overflow-hidden">
                 <div class="min-h-0">
                    <p class="text-brand-text/70 text-sm leading-relaxed mb-6 italic">{{ product.desc || 'Premium coffee with rich aromatic profile.' }}</p>
                    <a href="#visit" class="w-full py-4 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-bold rounded-full transition-all duration-500 hover:bg-brand-gold hover:text-brand-bg hover:shadow-2xl hover:shadow-brand-gold/40 flex items-center justify-center gap-2">
                       Order Now
                       <i class="ph ph-arrow-right"></i>
                    </a>
                 </div>
              </div>
           </div>

           <!-- Favorite Icon -->
           <div class="absolute top-8 right-8 w-12 h-12 rounded-full bg-brand-bg/60 backdrop-blur-md flex items-center justify-center text-brand-gold opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <i class="ph ph-heart text-2xl"></i>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const products = [
  { name: 'Espresso Cloud', price: '$12.50', desc: 'Floating crema with nutty undertones', image: 'https://images.unsplash.com/photo-1705952285570-113e76f63fb0?q=80&w=800&auto=format&fit=crop' },
  { name: 'Velvet Mocha', price: '$14.00', desc: 'Indulgent chocolate with a velvet finish', image: 'https://images.unsplash.com/photo-1530629159325-9c378fc150b9?q=80&w=800&auto=format&fit=crop' },
  { name: 'Sweet Matcha', price: '$15.50', desc: 'Ceremonial grade with organic notes', image: 'https://images.unsplash.com/photo-1761023717430-e486492e80fd?q=80&w=800&auto=format&fit=crop' },
  { name: 'Espresso Macchiato', price: '$11.00', desc: 'Double shot with a dash of foam', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Spiced Morning', price: '$13.50', desc: 'Autumn notes with cinnamon warmth', image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dark Honey Ash', price: '$16.00', desc: 'Floral sweetness with a charred rim', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop' }
]

onMounted(() => {
  gsap.to(".product-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".product-card",
      start: "top 85%"
    }
  })
})
</script>
