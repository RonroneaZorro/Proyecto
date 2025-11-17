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
.carousel-item {
  width: 100%;
  aspect-ratio: 3 / 1;
  overflow: hidden;
  position: relative;
  padding-left: 50px;
  padding-right: 50px;

}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;      
  object-position: center; 
  display: block;
  
}

@media (max-width: 768px) {
  .carousel-item {
    height: 300px;
  }
}
</style>