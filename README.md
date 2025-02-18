# Desarrollo de aplicaciones web con Vue.js

## Nuestra caja de herramientas

En el desarrollo moderno de aplicaciones web, especialmente con Vue.js, existen diversas herramientas y librerías que optimizan tanto el proceso de desarrollo como la calidad del código generado.

Nuestra recomendación:

- [Visual Studio Code VSC](https://code.visualstudio.com): editor de código fuente gratuito y de código abierto, ligero, potente y personalizable.
- [Vite](https://vite.dev): es una *build tool* que ofrece una experiencia de desarrollo optimizada.
- [Vue.js](https://vuejs.org): es un *framework* de JavaScript utilizado para construir interfaces de usuario interactivas.
- [Pinia](https://pinia.vuejs.org): es una librería, más moderna y oficial que Vuex, para el manejo del estado (datos) en aplicaciones Vue 3, facilitando la comunicación entre los diferentes componentes.
- [Vue Router](https://router.vuejs.org): es el "enrutador" oficial para Vue.js para gestionar la navegación y las rutas dentro de una aplicación, mapeando las URL del navegador a vistas o componentes específicos.
- [Vue Use](https://vueuse.org): es una colección de *composables* útiles para Vue 3 que ofrece funciones reutilizables para el manejo de eventos, la reactividad, el almacenamiento local, etc.
- [Vue I18n](https://vue-i18n.intlify.dev): es una librería para gestionar la internacionalización (i18n) de aplicaciones.
- [Tailwind](https://tailwindcss.com): es un *framework* de diseño de CSS que proporciona clases de utilidad predefinidas para construir interfaces de usuario, sin necesidad de escribir CSS adicional.
- Otras librerías recomendadas:
  - [Axios](https://axios-http.com/es/docs/intro): es una librería basada en promesas para hacer solicitudes HTTP, comúnmente utilizada para interactuar con nuestras API.
  - [FormKit](https://formkit.com): es un conjunto de componentes y herramientas para crear formularios accesibles, personalizados y validados.
  - [Quasar](https://quasar.dev): es una librería de componentes UI, listos para usar y con un alto nivel de personalización.
  - [Zod](https://zod.dev): es una librería para validar tipos y estructuras de datos de forma declarativa y segura.
- Dependencias de ayuda al desarrollador:
  - [ESLint](https://eslint.org): es una herramienta de análisis de código estático que permite identificar y corregir problemas en el código.
  - [Prettier](https://prettier.io): es un formateador de código que asegura que el código fuente tenga un formato consistente y limpio.

## Cómo crear nuestro primer proyecto Vue.js

### 1. Instalar Node.js, en su última versión LTS disponible en: [Node.js](https://nodejs.org/es)

```bash
node -v # Debería mostrar "v22.0.0" o superior
```

Si no hemos elegido PNPM como empaquetador por defecto con la instalación de Node.js, lo instalamos en "global":

```bash
npm install -g pnpm@latest
```

Asegúrate de tener instaladas las siguientes extensiones en tu [VSC](https://code.visualstudio.com) (o en el IDE que estés utilizando):

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar): soporte oficial para Vue 3.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): integración de ESLint.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): integración de Prettier.
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): resalta errores y advertencias en el código.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): autocompletado de clases de Tailwind CSS.

### 2. Habilitar [PNPM](https://pnpm.io/es)

Te recomiendo habilitar PNPM como "manejador" de paquetes por defecto, ya que PNPM es más **eficiente** y **rápido** que otras opciones como NPM o YARN:

```bash
corepack enable pnpm
pnpm -v # Debería mostrar "10.0.0" o superior
```

Si posteriormente necesitamos actualizar PNPM podemos:

```bash
pnpm self-update
# o con corepack: corepack prepare pnpm@latest --activate
```

### 3. Crear el proyecto Vue, con soporte TypeScript, con [Vite](https://vite.dev)

```bash
pnpm create vite@latest mi-proyecto --template vue-ts
```

La estructura de carpetas o *scaffolding* creada será como la siguiente:

```text
mi-proyecto/
+-- public/
+-- src/
¦   +-- assets/
¦   +-- components/
¦   ¦   +-- HelloWorld.vue
¦   +-- App.vue
¦   +-- main.ts
+-- index.html
+-- ... (otros archivos de configuración)
```

Puedes eliminar los ficheros "superfluos":

```bash
cd mi-proyecto
echo '# README' > README.md
rm public/vite.svg
echo '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="blue" /></svg>' > public/favicon.svg
rm src/assets/vue.svg
rm src/components/HelloWorld.vue
rm src/style.css
```

Edita el fichero `index.html` con el siguiente contenido:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi proyecto</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

Edita el fichero `src/App.vue` con el siguiente contenido:

```javascript
<script setup lang="ts">
</script>

<template>
  <h1>¡Bienvenido!</h1>
</template>

<style scoped>
</style>
```

Edita el fichero `src/main.ts` con el siguiente contenido:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

### 4. Asignar `pnpm` al proyecto recién creado

```bash
corepack use pnpm@latest
```

El comando anterior también mostrará las dependencias del proyecto, incluidas en el fichero `package.json`. Algo como lo siguiente:

```text
dependencies:
+ vue 3.5.13

devDependencies:
+ @vitejs/plugin-vue 5.2.1
+ @vue/tsconfig 0.7.0
+ typescript 5.7.3
+ vite 6.1.0
+ vue-tsc 2.2.2
```

### 5. Extender la declaración de tipos de TypeScript en un proyecto Vue.js

Crea y edita el fichero `src/shims-vue.d.ts` para que los archivos `.vue` sean reconocidos como módulos válidos y proporcionando tipado al componente que exportan:

```bash
touch src/shims-vue.d.ts
```

```javascript
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

### 6. Instalar Pinia y Vue Router

Crearemos también la estructura de directorios para el manejador de estados (`stores`) y para el *router* (`router`):

```bash
pnpm add pinia vue-router
mkdir -p src/stores
touch src/stores/index.ts
mkdir -p src/router
touch src/router/index.ts
```

Edita el fichero `src/stores/index.ts` para configurar Pinia como biblioteca de administración de estado:

```javascript
import { createPinia } from 'pinia'
import type { Pinia } from 'pinia'

const store: Pinia = createPinia()

export default store
```

Edita el fichero `src/router/index.ts` para configurar Vue Router como biblioteca de enrutado, de momento sin rutas:

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import type { Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

Edita el fichero `src/main.ts` para incorporar las instancias de Pinia y de Vue Router:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
```

### 7. Instalar Vue Use y Vue I18n (no es obligatorio, sólo instálalos si los consideras útiles para tu proyecto)

```bash
pnpm add @vueuse/core
pnpm add vue-i18n
```

### 8. Instalar Tailwind CSS 4 o superior (recomendado)

```bash
pnpm add tailwindcss @tailwindcss/vite
touch tailwind.config.js
mkdir -p src/assets/css
touch src/assets/css/tailwind.css
```

Asegúrate que el fichero `tailwind.config.js` tiene el siguiente contenido:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

Asegúrate que el fichero `src/assets/css/tailwind.css` tiene el siguiente contenido:

```css
@import 'tailwindcss';
```

Añade en el fichero `vite.config.ts` el *plugin* de `tailwindcss`. Debería quedar así:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

### 9. Instalar todas las dependencias y arrancar el proyecto, para comprobar que todo funciona correctamente

```bash
pnpm install
pnpm run dev
```

Podemos configurar el proyecto para servir la aplicación en un puerto fijo y para que se abrá el navegador automáticamente al hacer el `pnpm run dev`, editando `vite.config.ts` y añadiendo:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    open: true,
    host: "localhost",
    port: 8888,
    proxy: {},
  },
})
```

Quizá veamos en la consola de JavaScript un *warning* del tipo `[Vue Router warn]: No match found for location with path "/"`. Esto es debido a que todavía no hemos definido ninguna ruta, lo arreglaremos más adelante 😉.

### 10. Instalar EsLint y Prettier, como dependencias de desarrollo

```bash
pnpm create @eslint/config@latest
```

y responde a las preguntas con lo siguiente:

- How would you like to use ESLint? · <span style="color: green;">To check syntax and find problems</span>
- What type of modules does your project use? · <span style="color: green;">JavaScript modules (import/- export)</span>
- Which framework does your project use? · <span style="color: green;">Vue.js</span>
- Does your project use TypeScript? · <span style="color: green;">Yes</span>
- Where does your code run? · <span style="color: green;">Browser</span>
- Would you like to install them now? · <span style="color: green;">Yes</span>
- Which package manager do you want to use? · <span style="color: green;">pnpm</span>

```bash
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier
touch .prettierrc.json
```

Edita el fichero `.prettierrc.json` para configurar Prettier. La siguiente propuesta define un estilo de código donde las funciones flecha siempre llevan paréntesis alrededor de sus argumentos (arrowParens: "always"), se utilizan espacios alrededor de los corchetes (bracketSpacing: true), la longitud máxima de las líneas es de 140 caracteres (printWidth: 140), las comillas en las propiedades de los objetos solo se usan cuando es necesario (quoteProps: "as-needed"), no se utilizan punto y coma al final de las líneas (semi: false), se prefieren las comillas simples (singleQuote: true), cada tabulación equivale a 2 espacios (tabWidth: 2), se añaden comas al final de las líneas según las reglas de ES5 (trailingComma: "es5") y se utilizan espacios en lugar de tabulaciones (useTabs: false).

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "printWidth": 140,
  "quoteProps": "as-needed",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}
```

Edita el fichero `package.json` para añadir, dentro de la propiedad `scripts`, los siguientes tres *scripts*:

```json
"scripts": {
  // otras configuraciones de scripts...
  "lint": "eslint src/**/*.{js,ts,vue}",
  "lint:fix": "eslint src/**/*.{js,ts,vue} --fix",
  "format": "prettier --write src/**/*.{js,ts,vue,json,css,md}",
}
```

Para comprobar si tu proyecto supera todas las recomendaciones de estilo configuradas con EsLint:

```bash
pnpm run lint
```

Para formatear tu proyecto siguiendo las recomendaciones de formato configuradas con Prettier:

```bash
pnpm run format
```

### 11. Configurar Vite para resolver '@' como un alias de la carpeta 'src'

Las ventajas de usar estos alias son: una mayor **legibilidad**, las rutas de importación son más cortas y fáciles de entender, mejora la **mantenibilidad** y la **consistencia** del código en todo el proyecto.

Edita el fichero `vite.config.ts` para añadir la siguiente configuración:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define el alias '@' para la carpeta 'src'
    },
  },
  server: {
    open: true,
    host: 'localhost',
    port: 8888,
    proxy: {},
  },
})
```

Como estamos usando TypeScript, debemos asegurarnos que la configuración de TypeScript esté actualizada para reconocer el alias @. Puedes hacerlo modificando el archivo `tsconfig.json` y añadiendo donde corresponda:

```json
{
  "compilerOptions": {
    // otras configuraciones de TypeScript...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
