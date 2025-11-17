<script setup>
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const { user, logout } = useAuth()  
const router = useRouter()

const onSubmit = async () => {
  await logout()
  router.push('/login')   
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid">
        <img src="/assets/img/logos/SIN FONDO LETRAS COBRE HOR2.png" class="icono" alt="icono">  
        <div id="navbarText" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" :class="{ active: $route.path === '/' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/catalog" :class="{ active: $route.path === '/catalog' }">Catálogo</router-link>
            </li>
            <li class="nav-item" v-if="!user">
              <router-link class="nav-link" to="/login" :class="{ active: $route.path === '/login' }">Ingresar</router-link>
            </li>
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" to="/admin" :class="{ active: $route.path === '/admin' }">Administrar</router-link>
            </li>
            <li class="nav-item">
              <button v-if="user" class="nav-link" @click="onSubmit">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #212121;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icono {
  width: 80px;
  height: auto;
  border-radius: 40%;
  margin-left: 20px;
}

.navbar-nav {
  margin-right: 20px;
}

.nav-link.active {
  color: #da4e4eff !important;
  font-weight: bold;
  background-color: rgba(218, 78, 78, 0.1);
  border-radius: 5px;
}

.nav-link:hover {
  color: #da4e4eff !important;
}
</style>