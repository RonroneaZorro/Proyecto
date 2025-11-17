<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'


const isReady = ref(false)

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  })
})
</script>

<template>
  <div>
    <div v-if="!isReady" class="loading">
      <p>Cargando...</p>
    </div>
    <div v-else>
      <NavBar />
      <router-view />
      <FooterBar />
    </div>
  </div>
      <!-- Botón WhatsApp -->
    <a href="https://wa.me/56920338834" class="whatsapp-button" target="_blank" aria-label="WhatsApp">
        <i class="bi bi-whatsapp"></i> <!-- Icono de WhatsApp -->
    </a>
</template>

<style scoped>
.loading {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  color: #811313ff;
}
</style>