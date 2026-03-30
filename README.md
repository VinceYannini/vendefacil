# Vendefacil Admin App

Aplicacion administrativa construida con React y Vite para evolucionar desde un
boilerplate hacia un MVP util para operacion real con cliente.

## Stack

- React 19
- Vite 8
- ESLint 9

## Scripts

- `npm run dev`: levanta entorno de desarrollo con HMR.
- `npm run build`: genera build de produccion.
- `npm run preview`: sirve la build de produccion localmente.
- `npm run lint`: valida reglas de calidad.

## Estructura actual

```text
src/
	assets/         Recursos estaticos
	components/     Componentes reutilizables de UI
	pages/          Composicion de pantallas
	hooks/          Hooks personalizados (pendiente)
	services/       Integraciones externas (pendiente)
	utils/          Utilidades puras (pendiente)
	styles/         Estilos compartidos (pendiente)
```

## Primeros pasos

1. Instalar dependencias con `npm install`.
2. Ejecutar `npm run dev`.
3. Validar calidad con `npm run lint` y `npm run build`.

## Variables de entorno

Existe un archivo `.env.example` con el contrato de configuracion minimo.
Copialo a `.env` y rellena solo lo que uses en tu iteracion actual.

Variables de acceso admin temporal:
- `VITE_ADMIN_ALLOWED_EMAILS`: lista separada por comas de correos habilitados.
- `VITE_ADMIN_ACCESS_CODE`: codigo compartido para acceso inicial.

## Rutas actuales

- `/`: landing publica para presentar servicios a negocios.
- `/admin`: acceso admin (correo + codigo temporal).
- `/admin/panel`: vista interna protegida por sesion.

Nota: esta proteccion es una base inicial de frontend. Para produccion debe
complementarse con autenticacion en backend y reglas de autorizacion.

## Roadmap cercano

1. Definir e implementar un flujo de negocio principal del cliente.
2. Agregar routing minimo para separar vistas.
3. Incorporar testing basico con Vitest y React Testing Library.
4. Evaluar adopcion incremental de TypeScript en nuevas piezas.
