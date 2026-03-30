<template>
  <footer class="bg-brand-bg py-32 border-t border-white/5 relative overflow-hidden transition-all duration-700">
    <div class="container mx-auto px-6 relative z-10">
      <!-- Newsletter "Inner Circle" -->
      <div class="mb-24 p-12 lg:p-20 bg-brand-surface rounded-[4rem] border border-brand-gold/10 relative overflow-hidden group">
         <div class="absolute inset-0 bg-brand-gold/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
         <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div class="lg:max-w-md">
               <h3 class="text-4xl font-serif font-bold text-brand-text mb-4 italic">Join our Inner Circle</h3>
               <p class="text-brand-muted text-lg tracking-wide">Be the first to experience rare seasonal micro-lots and artisan events.</p>
            </div>
            <div class="flex w-full lg:w-auto gap-4">
               <input type="email" placeholder="Enter your email" 
                      class="flex-1 lg:w-80 bg-brand-bg/50 border border-brand-gold/20 rounded-full px-8 py-5 text-brand-text focus:outline-none focus:border-brand-gold transition-all backdrop-blur-md">
               <button class="px-12 py-5 bg-brand-gold text-brand-bg font-bold rounded-full hover:bg-brand-goldHover transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/40">
                  Subscribe
               </button>
            </div>
         </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <!-- Logo & Story -->
        <div class="lg:col-span-2 space-y-10 group">
          <div class="flex items-center gap-4 text-brand-gold text-4xl font-serif font-bold cursor-pointer transition-all duration-500 hover:tracking-widest">
            <div class="w-16 h-16 rounded-[1.5rem] bg-brand-surface border border-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-bg transition-all duration-700 shadow-2xl">
               <i class="ph ph-coffee"></i>
            </div>
            <span class="tracking-widest uppercase text-2xl">Vesper</span>
          </div>
          <p class="text-brand-muted text-xl max-w-lg leading-relaxed italic">
            Defining the art of the evening roast. Sourced from extreme altitudes and meticulously crafted since 2014.
          </p>
          <div class="flex gap-8 text-3xl text-brand-gold/40">
            <a href="#" class="hover:text-brand-gold hover:scale-125 transition-all duration-500 transform"><i class="ph ph-instagram-logo"></i></a>
            <a href="#" class="hover:text-brand-gold hover:scale-125 transition-all duration-500 transform"><i class="ph ph-facebook-logo"></i></a>
            <a href="#" class="hover:text-brand-gold hover:scale-125 transition-all duration-500 transform"><i class="ph ph-twitter-logo"></i></a>
            <a href="#" class="hover:text-brand-gold hover:scale-125 transition-all duration-500 transform"><i class="ph ph-linkedin-logo"></i></a>
          </div>
        </div>
        
        <!-- Navigation -->
        <div>
          <h4 class="font-serif font-bold text-2xl text-brand-text mb-10 tracking-widest uppercase text-xs">Menu</h4>
          <ul class="space-y-6 text-brand-muted font-bold tracking-[0.2em] uppercase text-xs">
            <li><a href="#top" class="hover:text-brand-gold transition-colors duration-300 relative group">Home <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all"></span></a></li>
            <li><a href="#products" class="hover:text-brand-gold transition-colors duration-300 relative group">Specialty <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all"></span></a></li>
            <li><a href="#process" class="hover:text-brand-gold transition-colors duration-300 relative group">Journey <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all"></span></a></li>
            <li><a href="#visit" class="hover:text-brand-gold transition-colors duration-300 relative group">Sanctuary <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all"></span></a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-serif font-bold text-2xl text-brand-text mb-10 tracking-widest uppercase text-xs">Reach Us</h4>
          <ul class="space-y-8 text-brand-muted italic text-lg leading-relaxed">
            <li class="flex items-start gap-5">
              <i class="ph ph-map-pin text-brand-gold text-xl"></i>
              <span>123 Golden Bean Ave,<br>Vesper District, CM 80210</span>
            </li>
            <li class="flex items-center gap-5">
              <i class="ph ph-envelope text-brand-gold text-xl"></i>
              <span>hello@vespercoffee.com</span>
            </li>
            <li class="flex items-center gap-5">
              <i class="ph ph-phone text-brand-gold text-xl"></i>
              <span>+1 (555) 012-3456</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="pt-16 border-t border-brand-gold/5 flex flex-col md:row justify-between items-center gap-8 text-brand-muted/40 font-bold uppercase tracking-[0.3em] text-[10px]">
        <p>&copy; 2026 Vesper Coffee. All rights reserved.</p>
        <div class="flex gap-12">
           <a href="#" class="hover:text-brand-gold transition-colors duration-300">Privacy Policy</a>
           <a href="#" class="hover:text-brand-gold transition-colors duration-300">Terms of Service</a>
           <a href="#" class="hover:text-brand-gold transition-colors duration-300">Cookies</a>
        </div>
      </div>
    </div>

    <!-- Decorative Corner (Bottom Right) -->
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
  </footer>
</template>

<script setup>
// Smooth footer interactivity
</script>
