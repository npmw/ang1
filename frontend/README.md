# Frontend (Angular 16)

This is a modular Angular 16 app scaffolded for future growth, with Core/Shared modules, lazy-loaded features, standalone component example, HTTP setup (interceptor/guard/resolver), and a proxy for a Spring Boot backend.

## Prerequisites

- Node.js 18+ (works on Node 22)
- npm 9+

## Install & Run

```bash
npm install
npm start # same as: ng serve -o --configuration development
```

Dev server: `http://localhost:4200`.

Proxy to backend: requests to `/api/**` are proxied to `http://localhost:8080` (config at `proxy.conf.json`).

## Project Structure

- `src/app/core`: singleton services, guards, interceptors, header/footer
- `src/app/shared`: shared components/directives/pipes
- `src/app/features/*`: lazy feature modules (auth, dashboard, users, contact)
- `src/app/pages/about`: standalone component demo
- `src/environments/*`: environment configs with file replacements

## Angular Concepts Used

- NgModules, Standalone component, Routing (lazy + standalone route)
- Template-driven and Reactive Forms
- Dependency Injection with `inject()` API
- HttpClient, Interceptors, Guards, Resolvers
- Directives, Pipes, and a basic shared component

## Backend Integration (Spring Boot)

- Use `ApiService` which prefixes calls with `/api`. Example:

```ts
this.api.get<User[]>('/users')
```

- Configure Spring Boot to run on `localhost:8080`. The dev proxy removes `/api` via `pathRewrite`.

## Build

```bash
npm run build # prod build (dist/frontend)
```

## Testing

```bash
npm test
```

## Adding New Features

- Generate a module: `ng g module features/products --routing`
- Add routes in the new `*-routing.module.ts`
- Lazy load by adding a route in `app-routing.module.ts`.
