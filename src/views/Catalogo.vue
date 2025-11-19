<template>
  <p v-if="error" class="text-danger">{{ error }}</p>
  <section class="catalogo">
    <div class="container py-5">
      <h2>Catálogo de Productos</h2>

      <!-- Filtros -->
      <div class="filters mb-4">
        <div class="row g-3">
          <div class="col-md-3">
            <label class="form-label">Filtrar por modelo</label>
            <input v-model="filtroModelo" class="form-control" placeholder="Ej: Jimny" />
          </div>
          <div class="col-md-2">
            <label class="form-label">Filtrar por versión</label>
            <input v-model="filtroVersion" class="form-control" placeholder="Ej: A6N415" />
          </div>
          <div class="col-md-3">
            <label class="form-label">Filtrar por categoría</label>
            <input v-model="filtroCategoria" class="form-control" placeholder="Ej: Filtros" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Rango de precio</label>
            <div class="row g-1">
              <div class="col-5">
                <input v-model.number="precioMin" type="number" class="form-control" placeholder="Mín" />
              </div>
              <div class="col-2 text-center align-self-center">a</div>
              <div class="col-5">
                <input v-model.number="precioMax" type="number" class="form-control" placeholder="Máx" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Productos filtrados -->
      <div class="row">
        <div v-for="producto in productosFiltrados" :key="producto.id" class="col-md-4 mb-4">
          <CardElement :producto="producto" />
        </div>
      </div>
      <p v-if="productosFiltrados.length === 0" class="text-center">No hay productos disponibles o que coincidan con los
        filtros.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProducts } from '@/composables/useProducts'
import CardElement from '@/components/CardElement.vue'

const error = ref('')
onMounted(async () => {
  try {
    await cargarProductos()
  } catch (err) {
    error.value = 'Error al cargar productos: ' + err.message
    console.error(err)
  }
})

const { productos, cargarProductos } = useProducts()

// Filtros reactivos
const filtroModelo = ref('')
const filtroVersion = ref('')
const filtroCategoria = ref('')
const precioMin = ref(0)
const precioMax = ref(1000000)

// Productos filtrados
const productosFiltrados = computed(() => {
  return productos.value.filter(producto => {
    const coincideModelo = !filtroModelo.value || producto.modelo?.toLowerCase().includes(filtroModelo.value.toLowerCase())
    const coincideVersion = !filtroVersion.value || producto.version?.toLowerCase().includes(filtroVersion.value.toLowerCase())
    const coincideCategoria = !filtroCategoria.value || producto.categoria?.toLowerCase().includes(filtroCategoria.value.toLowerCase())
    const coincidePrecio = (producto.precio || 0) >= precioMin.value && (producto.precio || 0) <= precioMax.value
    return coincideModelo && coincideVersion && coincideCategoria && coincidePrecio
  })
})

onMounted(() => {
  cargarProductos()
})
</script>

<style scoped>
.catalogo {
  background: linear-gradient(135deg, #212121a9 0%, #333 50%, #d12a2aff 100%);

}

.filters {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #dee2e6;
}

.filters .form-label {
  font-weight: bold;
  color: #212121;
  margin-bottom: 0.5rem;
}

.filters .form-control {
  border-radius: 0;
}

.filters .row>div {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .filters .row>div {
    margin-bottom: 1rem;
  }

  .filters {
    padding: 0.5rem;
  }

  .filters .form-control {
    font-size: 0.9rem;
  }

  .row {
    flex-direction: column;
  }
}
</style>