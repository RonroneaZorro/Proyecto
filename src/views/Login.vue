<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

const { login } = useAuth()
const router = useRouter()

async function onSubmit() {
  errorMessage.value = ''
  loading.value = true

  try {
    await login(email.value, password.value)
    router.push('/admin')
  } catch (err) {
    errorMessage.value = 'Correo o contraseña incorrectos'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login container text-center">
    <h1>Login</h1>

    <form @submit.prevent="onSubmit" class="d-flex flex-column gap-3 w-50 mx-auto">
      <input v-model="email" type="email" placeholder="Ingrese su correo" required class="form-control">
      <input v-model="password" type="password" placeholder="Ingrese su contraseña" required class="form-control">
      
      <button type="submit" class="btn btn-primary" :disabled="loading">
        {{ loading ? 'Ingresando...' : 'Login' }}
      </button>
    </form>

    <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.login {
  padding-top: 100px;
  height: auto;
}
</style>