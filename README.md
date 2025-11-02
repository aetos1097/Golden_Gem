# Golden Gem - Sitio Web de Joyería

Sitio web moderno de e-commerce para Golden Gem, especializado en anillos de oro y esmeralda colombiana.

## 🚀 Características

- **Catálogo de Productos**: Navegación completa por categorías (Anillos, Aretes, Collares, Pulseras)
- **Carrito de Compras**: Funcionalidad completa de carrito con persistencia en localStorage
- **Búsqueda y Filtros**: Búsqueda de productos y filtrado por subcategorías
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Hero Slider**: Slider automático en la página principal
- **Testimonios**: Sección de testimonios de clientes
- **Páginas Informativas**: Sobre Nosotros, Contacto, Garantías
- **UI Moderna**: Diseño inspirado en sitios de joyería premium

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca UI
- **Vite**: Build tool y dev server
- **React Router**: Navegación SPA
- **TailwindCSS**: Framework CSS utilitario
- **Lucide React**: Iconos
- **Context API**: Gestión de estado del carrito

## 📦 Instalación

### Prerequisitos

- Node.js 16 o superior
- npm o yarn

### Pasos de instalación

1. **Navegar al directorio del proyecto**
   ```bash
   cd C:\Users\Juan Pablo\golden-gem-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
golden-gem-website/
├── public/                  # Archivos públicos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── CartDrawer.jsx
│   ├── context/            # Context API
│   │   └── CartContext.jsx
│   ├── data/               # Datos de productos
│   │   └── products.js
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   ├── Cart.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Guarantees.jsx
│   ├── utils/              # Utilidades
│   │   └── format.js
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- **Emerald**: #059669 (Verde esmeralda)
- **Gold**: #D4AF37 (Dorado)

### Productos

Los productos están definidos en `src/data/products.js`. Puedes agregar, modificar o eliminar productos editando este archivo.

### Rutas

Las rutas están configuradas en `src/App.jsx`. Puedes agregar nuevas rutas siguiendo el patrón existente.

## 📱 Responsive Design

El sitio está optimizado para:

- **Móviles**: 320px+
- **Tablets**: 768px+
- **Desktop**: 1024px+

## 🔒 Características del Carrito

- Persistencia en localStorage
- Agregar/remover productos
- Actualizar cantidades
- Calcular totales automáticamente
- Mensaje informativo en checkout (demo)

## 📝 Notas

- Este es un sitio de demostración. El procesamiento de pagos no está implementado.
- Las imágenes son placeholders de Unsplash.
- Los datos de contacto son de ejemplo.

## 🤝 Contribuir

Este proyecto es un template base. Siéntete libre de:

1. Personalizar los colores y estilos
2. Agregar más productos
3. Implementar procesamiento de pagos
4. Agregar autenticación de usuarios
5. Integrar con un backend

## 📄 Licencia

Proyecto educativo de demostración. Libre de uso y modificación.

## 👨‍💻 Autor

Desarrollado para Golden Gem - Joyería de Oro y Esmeralda

---

Para más información o soporte, contacta a info@goldengem.com

