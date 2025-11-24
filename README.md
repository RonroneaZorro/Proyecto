# Proyecto Final – Landing Page con Firebase
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/build-passing-brightgreen)

Este repositorio contiene el desarrollo de un **producto digital** construido como parte del módulo de portafolio profesional. El objetivo del proyecto es demostrar competencias técnicas en **desarrollo frontend**, **gestión de repositorios**, **uso de servicios en la nube** y **documentación profesional**, siguiendo buenas prácticas de la industria TI.

---

## 🚀 Descripción del Proyecto

El proyecto consiste en una **Landing Page moderna y responsiva**, enfocada en la presentación de productos o servicios. Incluye integración con **Firebase** para gestionar datos y despliegue, además de una arquitectura clara y escalable.

La aplicación está desarrollada con **Vite**, **HTML/CSS**, **JavaScript**, y utiliza **Firebase Hosting**, **Firestore** y **Cloud Functions** según la configuración del proyecto.

---

## 🛠️ Tecnologías Utilizadas 🧰
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

- **Vite** – Empaquetador rápido para desarrollo moderno.
- **HTML5 / CSS3 / JavaScript**
- **Firebase**:
  - Firestore Database  
  - Firebase Hosting  
  - Firebase Functions  
- **GitHub Actions** (automatización mediante workflows)
- **NPM** para manejo de dependencias

---

## 🎯 Motivación del Proyecto

El propósito de este proyecto es:

- Construir un portafolio digital profesional.
- Aplicar buenas prácticas en estructura de repositorios.
- Utilizar servicios reales de hosting y backend.
- Preparar material demostrable para entrevistas técnicas.
- Consolidar lo aprendido en desarrollo frontend y herramientas cloud.

---

## 📦 Estructura del Repositorio
![Version](https://img.shields.io/badge/version-1.0.0-blue)

  ```pgsql
Proyecto/
│
├── .firebase/
├── .github/
│   └── workflows/
│
├── dist/                      # Archivos generados para producción (Vite)
├── functions/                 # Funciones de Firebase
├── node_modules/              # Dependencias
├── public/                    # Archivos estáticos
│   └── index.html             # Entrada principal
│
├── src/
│   ├── assets/                # Imágenes y recursos
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── CardElement.vue
│   │   ├── FooterBar.vue
│   │   ├── HeroSection.vue
│   │   ├── ModalProducto.vue
│   │   └── NavBar.vue
│   │
│   ├── composables/           # Lógica reutilizable
│   │   ├── useAuth.js
│   │   └── useProducts.js
│   │
│   ├── plugins/               # Configuración de Firebase
│   │   └── firebase.js
│   │
│   ├── router/                # Configuración de rutas de Vue Router
│   │   └── index.js
│   │
│   ├── views/                 # Páginas principales
│   │   ├── Admin.vue
│   │   ├── Catalogo.vue
│   │   ├── Home.vue
│   │   └── Login.vue
│   │
│   ├── App.vue                # Componente raíz
│   └── main.js                # Punto de arranque de la aplicación
│
├── .firebaserc
├── .gitignore
├── firebase.json
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

  ```

---

## ⚙️ Instalación y Uso

### 1️⃣ Requisitos previos
Asegúrate de tener instalado:

- Node.js (v16+)
- NPM
- Firebase CLI (opcional si quieres desplegar)

### 2️⃣ Clonar el repositorio
    ```bash
    git clone https://github.com/RonroneaZorro/Proyecto.git
    cd Proyecto
    ```
### 3️⃣ Instalar dependencias
    ```bash
    npm install
    ```
### 4️⃣ Ejecutar en entorno local
    ```bash
    npm run dev
    ```
### 5️⃣ Compilar para producción
    ```bash
    npm run build
    ```
---

## 🌐 Publicación del Producto Digital
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

El proyecto está publicado en Firebase Hosting.

---

🔗 Enlace al producto digital:

https://pruebagmg-a45d3.web.app/
usuario: admin@gmg.cl
contraseña: admingmg

---

## 📸 Funcionalidades Implementadas

- Diseño responsive
- Secciones moduladas (hero, productos, contacto, etc.)
- Carousel optimizado
- Layout con buenas prácticas HTML/CSS
- Integración con Firebase Hosting para despliegue
- Cloud Functions (estructura presente)
- Separación de assets y componentes frontend

---

## 👤 Autor

Daniel Paredes
Repositorio GitHub: https://github.com/RonroneaZorro
