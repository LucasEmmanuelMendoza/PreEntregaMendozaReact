# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


------------------------------------------------------------------------
E COMMERCE - Tienda de productos impresos en 3D 

-Librerías utilizadas: Bootstrap y SweetAlert2.

Características:

-Diseño responsive

-Funcionalidades: Renderizado de categorías, página de detalles de cada producto, botones para agregar al carro. En carro: eliminar cada producto del carro, limpiar el carro, formulario de compra con verificación de email en caso de generar un pedido con emails erróneos. Cambiar entre la vista del carrito y del formulario con un estado. Componentes de "error" en caso de que no exista el id del producto o la ruta "/...". Alertas de confirmación al agregar productos, eliminar items del carro o borrarlo. Botón de "generar pedido" con confirmación de la compra y sus ítems. Componente auxiliar en caso de ingresar al carro sin haber agregado productos. Guardado de órdenes en firestore con su correspondiente comprador, items, fecha y precio total de la compra.

