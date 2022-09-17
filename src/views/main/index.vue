<template>
  <div class="font-montserrat antialiased" data-main-scroll>
    <Navbar />
    <div class="min-h-screen">
      <Home />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/layout/Navbar/index.vue";
import Home from "@/views/home/index.vue";
import Footer from "@/components/layout/Footer/index.vue";
</script>
