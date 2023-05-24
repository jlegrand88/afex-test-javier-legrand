# Personalizar configuración

Ver [Referencia de configuración de Vite](https://vitejs.dev/config/).

# Project Setup

```sh
npm install
```

## Compilear y activar Hot-Reload para ambientes de Desarrollo

```sh
npm run dev
```

## Type-Check, Compilar and Minify para generar un directorio dist con la version para el ambiente de Produccion

```sh
npm run build
```

## Ejecutar Unit Tests con [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Ejecutar End-to-End Tests con [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

## Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
