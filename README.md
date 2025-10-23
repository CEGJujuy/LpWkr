# Taller Matemática Mágica - Landing Page

## Descripción del Proyecto

Landing page responsiva y amigable para un taller de matemáticas local dirigido a niños de 7 a 12 años. La aplicación web permite a los padres registrar a sus hijos en el taller mediante un formulario interactivo que almacena los datos en una base de datos Supabase.

## Características Principales

### Funcionalidades
- **Hero Section**: Sección de bienvenida con ilustración SVG animada y llamada a la acción destacada
- **Descripción del Evento**: Información completa sobre el taller, sus beneficios y metodología
- **Cronograma Detallado**: Horarios de las cuatro sesiones de fin de semana con temas específicos
- **Formulario de Inscripción**: Registro completo con validación que guarda datos en Supabase
- **Testimoniales**: Tres testimonios auténticos de padres satisfechos
- **Diseño Responsivo**: Adaptado para dispositivos móviles, tablets y escritorio

### Tecnologías Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework de Desarrollo**: Vite
- **Base de Datos**: Supabase (PostgreSQL)
- **Cliente de Base de Datos**: @supabase/supabase-js
- **Diseño**: CSS personalizado con animaciones y transiciones

## Estructura del Proyecto

```
project/
├── index.html                      # Página principal
├── src/
│   ├── main.js                     # Lógica de la aplicación
│   ├── styles.css                  # Estilos globales
│   └── supabase.js                 # Configuración de Supabase
├── supabase/
│   └── migrations/
│       └── 20251022235220_create_workshop_registrations.sql
├── package.json                    # Dependencias del proyecto
├── .env                           # Variables de entorno
└── README.md                      # Este archivo
```

## Base de Datos

### Tabla: workshop_registrations

La aplicación utiliza Supabase para almacenar las inscripciones con la siguiente estructura:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | uuid | Identificador único (clave primaria) |
| child_name | text | Nombre completo del niño |
| age | integer | Edad del niño (7-12 años) |
| parent_name | text | Nombre del padre/tutor |
| email | text | Correo electrónico de contacto |
| phone | text | Número de teléfono |
| special_requirements | text | Requerimientos especiales (opcional) |
| created_at | timestamptz | Fecha y hora de inscripción |

### Seguridad
- Row Level Security (RLS) habilitado
- Política de inserción pública para permitir registros sin autenticación
- Política de lectura solo para usuarios autenticados (administradores)

## Diseño

### Principios de Diseño
- **Confiable y Profesional**: Paleta de colores azules y verdes que transmiten confianza
- **Divertido y Atractivo**: Ilustraciones vectoriales, iconos emoji y animaciones suaves
- **Accesible**: Alto contraste, tipografía legible y navegación intuitiva
- **Responsivo**: Diseño fluido que se adapta a todos los tamaños de pantalla

### Paleta de Colores
- Azul Principal: #4299E1
- Verde Principal: #48BB78
- Naranja: #ED8936
- Amarillo: #ECC94B
- Texto Oscuro: #2D3748
- Fondos Claros: #F7FAFC, #FFFFFF

### Animaciones
- Efecto de flotación en la ilustración del hero
- Animaciones de entrada cuando los elementos entran en el viewport
- Transiciones suaves en hover de botones y tarjetas
- Scroll suave para navegación interna

## Instalación y Uso

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de Supabase (ya configurada)

### Instalación

1. Clonar el repositorio o descargar los archivos

2. Instalar dependencias:
```bash
npm install
```

3. Las variables de entorno ya están configuradas en `.env`:
```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_SUPABASE_ANON_KEY=[clave anónima]
```

### Desarrollo

Iniciar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Producción

Construir para producción:
```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `dist/`

## Secciones de la Landing Page

1. **Header**: Navegación fija con logo y botón de inscripción
2. **Hero**: Título impactante, descripción y CTA principal con ilustración
3. **Características**: Cuatro tarjetas destacando los beneficios del taller
4. **Cronograma**: Horarios detallados de las cuatro sesiones del fin de semana
5. **Testimoniales**: Tres reseñas de padres satisfechos con calificaciones
6. **Inscripción**: Formulario completo con validación y confirmación visual
7. **Footer**: Información de contacto, ubicación y derechos de autor

## Validación del Formulario

El formulario incluye validación HTML5 nativa:
- Campos obligatorios: nombre del niño, edad, nombre del padre, email, teléfono
- Validación de formato de email
- Selector de edad limitado a 7-12 años
- Campo opcional para requerimientos especiales

## Información del Desarrollador

**González César Eduardo**
- **Profesión**: Analista en Sistemas
- **Teléfono**: +549 3884858907
- **Email**: gonzalezeduardo_31@hotmail.com

## Características Técnicas

### Performance
- Construcción optimizada con Vite
- CSS modular y organizado
- JavaScript con carga de módulos ES6
- Imágenes SVG escalables sin pérdida de calidad

### Accesibilidad
- Estructura semántica HTML5
- Etiquetas ARIA cuando son necesarias
- Contraste de colores accesible
- Navegación por teclado funcional

### SEO
- Meta tags apropiados
- Estructura de encabezados jerárquica
- Texto alternativo en elementos visuales
- URLs descriptivas con anclas navegables

## Futuras Mejoras

- Sistema de autenticación para administradores
- Dashboard para visualizar inscripciones
- Sistema de notificaciones por email
- Integración con sistema de pagos
- Calendario de eventos interactivo
- Galería de fotos de talleres anteriores

## Licencia

© 2025 Taller Matemática Mágica. Todos los derechos reservados.
Desarrollado por González César Eduardo - Analista en Sistemas.

---

**Última actualización**: Octubre 2025