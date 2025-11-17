import { ref } from 'vue'
import { db } from '@/plugins/firebase'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const productos = ref([])

export function useProducts() {
  const cargarProductos = async () => {
    const querySnapshot = await getDocs(collection(db, 'productos'))
    productos.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }

  const agregarProducto = async (producto) => {
    await addDoc(collection(db, 'productos'), producto)
    await cargarProductos()
  }

  const editarProducto = async (id, producto) => {
    await updateDoc(doc(db, 'productos', id), producto)
    await cargarProductos()
  }

  const eliminarProducto = async (id) => {
    await deleteDoc(doc(db, 'productos', id))
    await cargarProductos()
  }

  return {
    productos,
    cargarProductos,
    agregarProducto,
    editarProducto,
    eliminarProducto
  }
}