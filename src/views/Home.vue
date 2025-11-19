<script setup>
import Herosection from '@/components/HeroSection.vue';
import CardElement from '@/components/CardElement.vue';

const modelos = [
  {
    img: '/assets/img/modelos/Alto.png',
    nombre: 'Alto',
  },
  {
    img: '/assets/img/modelos/Baleno.png',
    nombre: 'Baleno',
  },
  {
    img: '/assets/img/modelos/Celerio.png',
    nombre: 'Celerio',
  },
  {
    img: '/assets/img/modelos/Fronx.png',
    nombre: 'Fronx',
  },
  {
    img: '/assets/img/modelos/Grand Vitara.png',
    nombre: 'Grand Vitara',
  },
  {
    img: '/assets/img/modelos/Jimny.png',
    nombre: 'Jimny',
  },
  {
    img: '/assets/img/modelos/S-presso.png',
    nombre: 'S-presso',
  },
  {
    img: '/assets/img/modelos/Swift SP.png',
    nombre: 'Swift SP',
  },
  {
    img: '/assets/img/modelos/Swift.png',
    nombre: 'Swift',
  }
]
</script>
<template>
  <main>
    <section class="hero">
      <h1>GMG Repuestos</h1>
      <Herosection />
    </section>
    <section class="quienesSomos-section">
      <h2 id="quienesSomos">Quienes Somos</h2>
      <div class="quienesSomos">
        <div class="quienesSomos__content">
          <h3 class="quienesSomos__subtitle">🚗 GMG Repuestos</h3>
          <p class="quienesSomos__text">
            Tu aliado confiable en el mundo automotriz en Chile. Somos una empresa apasionada por los
            repuestos y componentes de calidad, especializada en la marca Suzuki. Estamos comprometidos con ofrecer
            soluciones óptimas para tu vehículo, ya sea
            para mantención, reparación o puesta a punto.
          </p>
          <h3 class="quienesSomos__subtitle">👥 Nuestro Equipo</h3>
          <p class="quienesSomos__text">
            Estamos formados por un grupo de profesionales y entusiastas del mundo automotriz que entiende la
            importancia de cada pieza para que un vehículo funcione correctamente. Nos mueve la pasión por el
            rendimiento, la durabilidad y la excelencia técnica.
          </p>
          <h3 class="quienesSomos__subtitle">🌐 Visión a Futuro</h3>
          <p class="quienesSomos__text">
            Queremos consolidarnos como un referente en el mercado chileno de repuestos automotrices, expandiendo
            nuestra presencia, mejorando nuestra logística y elevando permanentemente nuestros estándares de servicio.
            Aspiramos a ser la primera opción para talleres, mecánicos, y usuarios particulares que buscan repuestos
            confiables con respaldo profesional.
          </p>
          <img src="/assets/img/nosotros/GMG banner2.png" class="quienesSomos__img" alt="Logo GMG Repuestos">
        </div>
      </div>
    </section>
    <section class="modelos-section">
      <h2 id="modelos">Modelos</h2>
      <div class="modelos__content">
        <div class="modelos__cards">
          <CardElement v-for="(modelo, index) in modelos" :key="index" :producto="modelo" />
        </div>
      </div>
    </section>
    <section class="contacto-section">
      <h2 id="contacto">Contacto</h2>
      <div class="contacto">
        <div class="contacto__content">
          <div class="contacto__info">
            <div class="contacto__image">
              <img src="/assets/img/contacto/ubicacion.png" alt="Ubicación GMG Repuestos">
            </div>
            <div class="contacto__details">
              <h3><i class="bi bi-pin-angle-fill"></i> Ubícanos</h3>
              <p><i class="bi bi-pin-map-fill"></i><strong> Dirección:</strong> Gran Avenida 6844, La Cisterna</p>
              <p><i class="bi bi-stopwatch"></i><strong> Horario de atención:</strong></p>
              <ul>
                <li>Lunes a Jueves: 9:30 a 17:30 hs</li>
                <li>Viernes: 9:30 a 16:30 hs</li>
                <li>Sábado: 9:30 a 12:30 hs</li>
              </ul>
              <p><i class="bi bi-telephone"></i><strong> Télefono:</strong> +56 9 2033 8834</p>
              <p><i class="bi bi-envelope-at-fill"></i><strong> Correo:</strong> contacto@gmgrepuestos.cl</p>
            </div>
          </div>

          <div class="contacto__footer">
            <p>
              📩 Si tienes consultas o necesitas asesoría, no dudes en comunicarte con nosotros.
              Estamos a metros del metro <strong>Lo Ovalle</strong> — ¡te esperamos!
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero con gradiente */
.hero {
  background: linear-gradient(135deg, #212121 0%, #333 50%, #d12a2aff 100%);
  border-radius: 0px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

h1,
h2 {
  color: whitesmoke;
  text-shadow: 2px 2px 4px rgba(114, 25, 25, 0.5);
}

/* ---------- Quienes Somos ---------- */
.quienesSomos-section {
  background: linear-gradient(135deg, #212121 0%, #2c2c2c 100%);
}

.quienesSomos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #212121;
}

.quienesSomos__content {
  background-color: whitesmoke;
  border: 2px solid darkgoldenrod;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.quienesSomos__img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgb(92, 14, 14);
}

.quienesSomos__subtitle {
  font-size: bolder;
  color: #333;
  font-size: 1rem;
}

.quienesSomos__text {
  color: #333;
  font-size: 1rem;
  margin-bottom: 1rem;
}

/* ---------- Modelos ---------- */
.modelos-section {
  background: linear-gradient(135deg, #212121 0%, #333 100%);
  padding-bottom: 2rem;
}

.modelos__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: whitesmoke;
  padding: 1rem;
  border: 2px solid silver;
  margin-bottom: 1rem;
  width: 85%;
  border-radius: 10px;
  margin: auto;
}

.modelos__cards {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* ---------- Contacto ---------- */
.contacto-section {
  background: linear-gradient(135deg, #212121 0%, #2a2a2a 100%);
  padding: 0rem 1rem;
  color: whitesmoke;
  text-align: center;
}

.contacto__content {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid silver;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
}

.contacto__info {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.contacto__image {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
}

.contacto__image img {
  width: 100%;
  max-width: 380px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
}

.contacto__details {
  flex: 1 1 400px;
  text-align: center;
}

.contacto__details h3 {
  color: #a42a2a;
  margin-bottom: 1rem;
}

.contacto__details p,
.contacto__details li {
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.contacto__details ul {
  padding-left: 1.2rem;
}

.contacto__footer {
  border-top: 1px solid #ccc;
  margin-top: 1rem;
  padding-top: 1rem;
  font-style: italic;
  color: #444;
}

/* Responsive */
@media (max-width: 768px) {

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  .hero {
    margin: 1rem;
    padding: 0.5rem;
  }

  .quienesSomos__content {
    padding: 1rem;
  }

  .modelos__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .contacto__content {
    padding: 1rem;
  }
  .contacto__image img {
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .contacto__info {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contacto__details {
    text-align: center;
  }

  .contacto__details ul {
    list-style: none;
    padding: 0;
  }
}
</style>
