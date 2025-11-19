<template>
  <div class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/assets/img/carousel/kit mantencion.webp" class="d-block w-100" alt="Imagen 1">
      </div>
      <div class="carousel-item">
        <img src="/assets/img/carousel/kit embrague.webp" class="d-block w-100" alt="Imagen 2">
      </div>
      <div class="carousel-item">
        <img src="/assets/img/carousel/lubricante.png" class="d-block w-100" alt="Imagen 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<style scoped>
.carousel,
.carousel-inner,
.carousel-item {
  height: 60vh;
  min-height: 300px;
}

.carousel-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 768px) {
  .carousel,
  .carousel-inner,
  .carousel-item {
    height: 35vh;
    min-height: 200px;
  }
  .carousel-item img {
    object-fit: cover;
  }

}
</style>