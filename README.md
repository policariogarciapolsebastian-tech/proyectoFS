# CyberNova - Proyecto Web

Sitio web estático para la tienda **CyberNova**, que incluye secciones para catálogo de laptops, marcas, ofertas y carrito de compras.

---

## 🌐 ¿Por qué da error al compartir el enlace actual?

Actualmente, cuando abres tu página en tu computadora, el enlace en tu navegador se ve similar a esto:
*   `file:///C:/Users/.../index.html` (Un archivo local en tu disco duro)
*   `http://localhost:XXXX/` o `http://127.0.0.1:XXXX/` (Un servidor de pruebas local ejecutándose solo en tu computadora)

Estos enlaces **solo existen dentro de tu computadora**. Si se los envías a otra persona o intentas abrirlos desde tu celular, el navegador no podrá encontrarlos y mostrará un mensaje de **error de conexión** o **archivo no encontrado**.

Para solucionarlo, debemos **subir y publicar** los archivos en un servidor en internet (hosting) gratuito. A continuación, tienes las opciones más fáciles para hacerlo.

---

## 🚀 Opciones para publicar tu página gratis en Internet

### Opción 1: Netlify Drop (La más fácil y rápida ⚡)
No requiere instalar nada ni tener conocimientos técnicos. Tu página estará en línea en menos de un minuto.

1.  **Comprime tu proyecto:**
    *   Ve a tu escritorio.
    *   Haz clic derecho sobre la carpeta `proyectoFS` y selecciona **Enviar a > Carpeta comprimida (en zip)** (en Windows) o **Comprimir "proyectoFS"**.
2.  **Sube el archivo:**
    *   Abre tu navegador e ingresa a [Netlify Drop](https://app.netlify.com/drop).
    *   Arrastra y suelta tu archivo `.zip` recién creado en la zona indicada de la página web.
3.  **Comparte el enlace:**
    *   Netlify procesará tus archivos en segundos y te dará un enlace público (por ejemplo, `https://cybernova-tienda.netlify.app` o similar).
    *   **¡Listo!** Ese enlace lo puedes compartir con cualquier persona y funcionará en cualquier celular, tablet o computadora.

---

### Opción 2: GitHub Pages (Ideal para actualizaciones continuas 🛠️)
Si quieres poder actualizar tu página web fácilmente y tener tu código guardado de forma segura.

1.  **Crea una cuenta en GitHub:**
    *   Regístrate gratis en [GitHub](https://github.com).
2.  **Crea un repositorio:**
    *   Haz clic en **New** (Nuevo repositorio).
    *   Nómbralo como quieras (por ejemplo, `cybernova`).
    *   Asegúrate de marcarlo como **Public** (Público) y haz clic en **Create repository**.
3.  **Sube tus archivos desde el navegador:**
    *   En la página de tu nuevo repositorio, haz clic en el enlace que dice **"uploading an existing file"** (subir un archivo existente).
    *   Arrastra **todos** los archivos y carpetas que están **dentro** de tu carpeta `proyectoFS` (`index.html`, `CSS/`, `JS/`, `IMG/`) hacia la ventana de tu navegador.
    *   Espera a que se suban y haz clic en **Commit changes** (Guardar cambios) al final de la página.
4.  **Activa GitHub Pages:**
    *   Dentro de tu repositorio en GitHub, ve a la pestaña **Settings** (Configuración) en el menú superior.
    *   En la barra lateral izquierda, busca la sección **Pages** (Páginas).
    *   En la sección *Build and deployment*, bajo **Branch** (Rama), cambia *None* por **main** (o la rama que aparezca) y la carpeta déjala en `/ (root)`.
    *   Haz clic en **Save** (Guardar).
5.  **Obtén tu enlace:**
    *   Espera 1 o 2 minutos, refresca la página de Settings -> Pages y verás un recuadro verde arriba con el enlace público de tu sitio web (generalmente tiene el formato `https://tu-usuario.github.io/cybernova/`).

---

### Opción 3: Vercel (Excelente alternativa moderna 🌐)
1.  Ingresa a [Vercel](https://vercel.com) y regístrate con tu correo o cuenta de GitHub.
2.  Ve al Dashboard y selecciona **Add New > Project**.
3.  Puedes importar tu repositorio de GitHub o arrastrar directamente tu carpeta del proyecto para desplegarla al instante.
