<template>
  <footer class="footer">
    <div class="footer__social">
      <a href="https://short-url.org/GMGMercadoLibre" target="_blank"><i class="bi bi-shop-window"></i></a>
      <a href="https://www.facebook.com/GMGRepuestosS" target="_blank"><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/gmg_repuestos_chile/#" target="_blank"><i class="bi bi-instagram"></i></a>
      <a href="https://wa.me/56920338834" target="_blank"><i class="bi bi-whatsapp"></i></a>
    </div>
    <div class="footer__title">
      <p>&copy; 2024 GMG Repuestos. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  font-size: .7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  background-color: #212121;
  color: white;
  margin: 0;
}

.footer__title {
  font-size: .8rem;
  text-align: center;
  margin: auto;
}

.footer__social {
  display: flex;
  gap: 10px;
  margin: 0.5rem;
}

.footer__social a {
  color: white;
  text-decoration: none;
}

.footer__social i {
  width: 24px;
  height: 24px;
}
</style>