# Página personal de Raquel

Proyecto estático en HTML/CSS/JS con páginas internas y navegación simple.

## Accesos rápidos

<p align="left">
  <a href="https://statuesque-liger-3455ed.netlify.app/">
    <img alt="Abrir web" src="https://img.shields.io/badge/Abrir%20web-Netlify-success?style=for-the-badge">
  </a>
  <a href="./">
    <img alt="Repositorio" src="https://img.shields.io/badge/Ver%20repositorio-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
</p>

## Demo local

- Abrir el archivo [index.html](./index.html) en cualquier navegador moderno.
- Opcional: usar una extensión como Live Server para recarga en caliente.

## Estructura de carpetas

```
raquel-web/
├── index.html
├── styles.css
├── script.js
├── deportes/
│   ├── index.html
│   ├── styles.css
│   ├── ranking/
│   │   ├── index.html
│   │   └── styles.css
│   └── top/
│       ├── index.html
│       └── styles.css
├── amigos/
│   ├── index.html
│   └── styles.css
└── estudios/
    ├── index.html
    └── styles.css
```

## Contenidos principales

- Inicio: encabezado con título y descripción.
- Aficiones: tarjetas con texto e imagen.
- Horarios: tabla con actividades.
- Galería: cuadrícula de imágenes responsiva.
- Mis intereses: accesos a Deportes, Estudios y Amigos.

## Rutas y páginas

| Sección  | Ruta                                      | Descripción                                   |
|---------:|-------------------------------------------|-----------------------------------------------|
| Inicio   | [./index.html](./index.html)              | Página principal con resumen de contenidos    |
| Deportes | [./deportes/index.html](./deportes/index.html) | Índice de deportes y accesos internos     |
| Ranking  | [./deportes/ranking/index.html](./deportes/ranking/index.html) | Tabla de competiciones           |
| Top      | [./deportes/top/index.html](./deportes/top/index.html) | Deportes de raqueta destacados          |
| Amigos   | [./amigos/index.html](./amigos/index.html) | Información sobre amistades                  |
| Estudios | [./estudios/index.html](./estudios/index.html) | Información académica                      |

## Páginas internas

- Deportes: índice con enlaces a Ranking y Top.
- Top (deportes de raqueta): contenido específico, hereda estilos comunes.
- Ranking: listado de competiciones en formato tabla/ítems.

## Estilos y comportamiento

- Estilos globales en [styles.css](./styles.css).
- JavaScript común en [script.js](./script.js).
- Cada sección interna puede tener su propio `styles.css` además de heredar los estilos globales.
- Enlaces sin `target="_blank"` para mantener la navegación en la misma pestaña.
- Se usa `scroll-margin-top` en anclajes para no ocultarlos tras el menú fijo.

## Edición rápida

- Menús o secciones del inicio: editar [index.html](./index.html).
- Estilos globales: [styles.css](./styles.css).
- Estilos de páginas internas: sus respectivos `styles.css` en cada carpeta.

## Despliegue en Netlify

- URL de producción: https://statuesque-liger-3455ed.netlify.app/
- Desplegado en Netlify a partir del contenido de este repositorio.
- Cuando se actualiza `main`, Netlify puede publicar automáticamente la nueva versión (si está conectado).

## Licencia

Este proyecto se distribuye bajo la licencia indicada en [LICENSE](./LICENSE).

## Créditos

- Imágenes procedentes de bibliotecas públicas como Unsplash o Pexels. Sustituir por material propio si se prefiere.
