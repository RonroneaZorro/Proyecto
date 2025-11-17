<script setup>
import { ref, onMounted } from 'vue'
import { useProducts } from '@/composables/useProducts'
import ModalProducto from '@/components/ModalProducto.vue'

const { productos, cargarProductos, eliminarProducto } = useProducts()
const showModal = ref(false)
const productoSeleccionado = ref(null)

onMounted(() => {
    cargarProductos()
})

const abrirModal = (producto = null) => {
    productoSeleccionado.value = producto
    showModal.value = true
}

const cerrarModal = () => {
    showModal.value = false
    productoSeleccionado.value = null
}
</script>

<template>
    <div class="container py-5">
        <h2 class="mb-4">Administrar Catálogo de Productos</h2>
        <button class="btn btn-outline-dark mb-3" @click="abrirModal()">Agregar Producto</button>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Stock</th>
                    <th>Versión</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productos" :key="producto.id">
                    <td>{{ producto.modelo }}</td>
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>{{ producto.categoria }}</td>
                    <td>{{ producto.stock }}</td>
                    <td>{{ producto.version }}</td>
                    <td>
                        <button class="btn btn-sm btn-warning me-2" @click="abrirModal(producto)">Editar</button>
                        <button class="btn btn-sm btn-danger" @click="eliminarProducto(producto.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <ModalProducto v-if="showModal" :producto="productoSeleccionado" @cerrar="cerrarModal" />
    </div>
</template>

<style scoped>
.modal-backdrop {
  align-items: center;
  background-color: #0009;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.modal-content {
  max-width: 500px;
  width: 100%;
}

.img-preview {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>