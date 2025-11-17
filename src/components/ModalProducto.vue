<template>
  <div class="modal-backdrop" @click.self="cerrar">
    <div class="modal-content p-4 bg-light rounded" ref="modalBox">
      <h4 class="mb-3">{{ producto ? 'Editar Producto' : 'Agregar Producto' }}</h4>
      <form @submit.prevent="guardar">
        <div class="mb-2">
          <input v-model="form.codigo" class="form-control" placeholder="Código" required />
        </div>
        <div class="mb-2">
          <input v-model="form.modelo" class="form-control" placeholder="Modelo del producto" required />
        </div>
        <div class="mb-2">
          <input v-model="form.nombre" class="form-control" placeholder="Nombre del producto" required />
        </div>
        <div class="mb-2">
          <input v-model="form.img" class="form-control" placeholder="URL de imagen" required />
          <img v-if="form.img" :src="form.img" alt="Vista previa" class="img-preview mt-2" style="max-width: 100px; max-height: 100px;" />
        </div>
        <div class="mb-2">
          <input v-model="form.precio" type="number" class="form-control" placeholder="Precio" required />
        </div>
        <div class="mb-2">
          <input v-model="form.categoria" class="form-control" placeholder="Categoría" required />
        </div>
        <div class="mb-2">
          <input v-model="form.stock" type="number" class="form-control" placeholder="Stock" required />
        </div>
        <div class="mb-2">
          <input v-model="form.version" class="form-control" placeholder="Versión" required />
        </div>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-secondary me-2" @click="cerrar">Cancelar</button>
          <button type="submit" class="btn btn-primary">{{ producto ? 'Actualizar' : 'Agregar' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useProducts } from '@/composables/useProducts'

const props = defineProps({ producto: Object })
const emit = defineEmits(['cerrar'])
const { agregarProducto, editarProducto } = useProducts()
const modalBox = ref(null)

const form = ref({
  codigo: '',
  modelo: '',
  nombre: '',
  img: '',
  precio: 0,
  version: '',
  categoria: '',
  stock: 0
})

if (props.producto) {
  form.value = { ...props.producto }
}

const guardar = async () => {
  if (props.producto) {
    await editarProducto(props.producto.id, form.value)
    alert('Producto actualizado correctamente')
  } else {
    await agregarProducto(form.value)
    alert('Producto agregado correctamente')
  }
  emit('cerrar')
}

const cerrar = () => {
  emit('cerrar')
}

onMounted(() => {
  gsap.from(modalBox.value, { scale: 0.8, opacity: 0, duration: 0.5 })
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal-content {
  width: 100%;
  max-width: 500px;
}
.img-preview {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>