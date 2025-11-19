<template>
  <div class="card text-dark mb-3">
    <img :src="producto?.img || '/assets/img/logos/SIN FONDO LETRAS COBRE.png'" class="card-img-top" alt="Imagen">
    <div class="card-body">
      <h5 class="card-title">{{ producto?.nombre || 'Sin nombre' }}</h5>
      <h6 v-if="producto?.modelo" class="card-title">Modelo: {{ producto.modelo }}</h6>
      <h6 v-if="producto?.version" class="card-title">Versión: {{ producto.version }}</h6>
      <h6 v-if="producto?.precio" class="card-text">Precio: ${{ producto.precio }}</h6>
      <h7 v-if="producto?.codigo" class="card-text">Sku: {{ producto.codigo }}</h7>
    </div>
  </div>
</template>

<script setup>
defineProps({
  producto: {
    type: Object,
    required: true,
    validator: (value) => value && typeof value === 'object'
  }
})
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 250px;
  margin: 0.5rem auto;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid #d12a2aff;
  background: linear-gradient(135deg, whitesmoke 0%, #f5f5f5 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}


.card-img-top {
  height: 120px;
  object-fit: contain;
  background-color: #212121;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
  color: #212121;
}

.card-text {
  font-size: 0.85rem;
  color: #555;
}

.card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 16px rgba(209, 42, 42, 0.3);
  border-color: #da4e4eff;
}

@media (max-width: 768px) {
  .card {
    width: 90%; 
    min-height: 200px; 
  }
  .card-title { font-size: 0.9rem; }
  .card-text { font-size: 0.8rem; }
}
</style>