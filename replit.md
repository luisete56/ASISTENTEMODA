# Asistente de Moda Inteligente - TFG

## Descripción

Servidor backend para un sistema de asistente de moda compuesto por tres componentes:
- **App Móvil**: Interfaz de usuario para consultas de moda
- **Servidor Central**: Backend con toda la lógica y estado (este proyecto)
- **Objeto Físico**: Sensor IoT en el armario con visión artificial

## Arquitectura

El servidor es el único punto de comunicación entre la app y el objeto físico. Expone una API REST que devuelve JSON.

## Stack Tecnológico

- **Backend**: Node.js + Express
- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Componentes UI**: Shadcn/ui

## Estructura del Proyecto

```
├── client/                 # Frontend React
│   └── src/
│       ├── pages/
│       │   └── home.tsx    # Página informativa principal
│       └── App.tsx
├── server/                 # Backend Express
│   ├── routes.ts           # Endpoints de la API
│   ├── storage.ts          # Almacenamiento en memoria
│   └── services/
│       ├── chatService.ts          # Mock de ChatGPT
│       ├── visionService.ts        # Mock de visión artificial
│       └── imageGenerationService.ts # Mock de generación de imágenes
└── shared/
    └── schema.ts           # Tipos y esquemas compartidos
```

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | /api/chat | Envía mensaje al asistente de moda |
| GET | /api/wardrobe | Obtiene inventario del armario |
| POST | /api/wardrobe | Añade nueva prenda |
| POST | /api/wardrobe/event | Recibe eventos del objeto físico |
| POST | /api/generate-outfit | Genera imagen de outfit (mock) |

## Estado Actual

- ✅ Frontend informativo en español
- ✅ Endpoints mock implementados
- ✅ Almacenamiento en memoria con datos de ejemplo
- ⏳ Integración real con ChatGPT (pendiente)
- ⏳ Integración real con visión artificial (pendiente)

## Notas de Desarrollo

- Todos los servicios de IA son **mocks** por ahora
- La integración real con ChatGPT usará variables de entorno
- El frontend es solo informativo, no consume la API directamente
