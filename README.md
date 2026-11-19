# ReactShop

Catálogo interactivo de comida construido con React. Permite editar el nombre de los productos, elegir cantidades, actualizar el contador del carrito y ajustar el tamaño de texto.

**React 18 · JavaScript · Vite · CSS**

[Ver demo](https://felipeh99.github.io/ReactShop/) · [Portfolio](https://felipeheredia.vercel.app)

## Qué muestra este proyecto

- Componentes de catálogo y producto con estado local.
- Comunicación entre componentes para actualizar la cantidad total.
- Controles de presentación y modo oscuro.
- Build estático y publicación automática en GitHub Pages.

Es un ejercicio de frontend: no procesa pagos, no genera pedidos y no tiene backend. El estado se reinicia al recargar. Las imágenes se cargan desde sitios externos.

## Ejecutar localmente

Con Node.js 22 y npm:

```sh
git clone https://github.com/FelipeH99/ReactShop.git
cd ReactShop
npm ci
npm run dev
```

Abrí la URL que muestra Vite, bajo `/ReactShop/`.

```sh
npm run lint
npm run build
npm run preview
```

## Estructura

| Archivo | Responsabilidad |
| --- | --- |
| `src/components/Shop.jsx` | Catálogo y contador total |
| `src/components/Product.jsx` | Edición y selección de cantidad |
| `src/components/DarkModeSwitch.jsx` | Cambio de tema |
| `vite.config.js` | Ruta base para GitHub Pages |

## Publicación

El workflow de Pages instala dependencias, compila y publica únicamente `dist/`. En GitHub, el origen de Pages debe ser **GitHub Actions**. El script `npm run deploy` es una alternativa manual que publica `dist/` en `gh-pages`; no es necesario para el flujo automático.

## Próximas mejoras

Persistencia del carrito, imágenes locales optimizadas y pruebas de interacción. Este proyecto complementa mis trabajos de backend e integración; no representa una tienda en producción.
