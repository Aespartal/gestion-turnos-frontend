# 📅 Sistema de Gestión de Turnos

Aplicación web moderna para la gestión de citas y turnos, desarrollada con Angular 21.

## 🚀 Características

- ✅ **Lista de citas** con visualización en tabla responsive
- ✅ **Crear nuevas citas** mediante formulario validado
- ✅ **Estados de carga** y manejo de errores
- ✅ **UI moderna** con Bootstrap 5 y Bootstrap Icons
- ✅ **Arquitectura limpia** con separación de modelos y servicios
- ✅ **Componentes standalone** de Angular
- ✅ **Tipado fuerte** con TypeScript
- ✅ **Responsive design** para móviles y tablets

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm (v10 o superior)

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install
```

## 🏃‍♂️ Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# La aplicación estará disponible en http://localhost:4200
```

## 🏗️ Construcción

```bash
# Build para producción
npm run build
# Los archivos generados estarán en dist/
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── lista-citas/          # Componente principal de gestión
│   │   └── formulario-cita/      # Formulario de nueva cita
│   ├── models/
│   │   └── cita.model.ts         # Interfaces y modelos
│   ├── services/
│   │   └── cita.service.ts       # Servicio HTTP para API
│   ├── app.ts                    # Componente raíz
│   ├── app.routes.ts             # Configuración de rutas
│   └── app.config.ts             # Configuración de la app
├── environments/
│   ├── environment.ts            # Variables de desarrollo
│   └── environment.prod.ts       # Variables de producción
└── styles.scss                   # Estilos globales
```

## 🔧 Tecnologías Utilizadas

- **Angular 21** - Framework principal
- **TypeScript 5.9** - Lenguaje de programación
- **Bootstrap 5.3** - Framework CSS
- **Bootstrap Icons** - Iconografía
- **RxJS 7.8** - Programación reactiva
- **Vitest** - Testing

## 🌐 API

La aplicación se conecta a una API REST en:
- **Desarrollo**: `http://185.253.153.171:8080/api`
- **Producción**: Configurable en `environment.prod.ts`

### Endpoints utilizados:

- `GET /citas` - Lista todas las citas
- `POST /citas` - Crea una nueva cita

## 📝 Modelo de Datos

```typescript
interface Cita {
  id: number;
  clienteNombre: string;
  servicio: string;
  fechaHora: string;
}
```

## 🎨 Servicios Disponibles

- Peluquería
- Barbería
- Manicura
- Pedicura
- Tratamiento Facial
- Masaje

## 🐳 Docker

La aplicación incluye configuración para Docker:

```bash
# Construir imagen
docker build -t gestion-turnos .

# Ejecutar contenedor
docker run -p 80:80 gestion-turnos
```

## 🧪 Testing

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
