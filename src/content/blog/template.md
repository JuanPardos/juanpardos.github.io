---
titulo: 'Plantilla'
descripcion: 'Un artículo de ejemplo para el blog.'
etiquetas: ['ejemplo', 'markdown']
fecha: 2026-06-10
borrador: true
---

¡Bienvenido al blog! Este es un artículo de ejemplo escrito en **Markdown**.

## Cómo añadir más artículos

Crea un nuevo archivo `.md` dentro de `src/content/blog/`. El nombre del
archivo será la URL del artículo (por ejemplo, `mi-articulo.md` →
`/blog/mi-articulo`).

Cada artículo necesita una cabecera (*frontmatter*) como esta:

```yaml
---
titulo: 'Título del artículo'
descripcion: 'Un resumen corto.'
fecha: 2026-06-10
borrador: false   # ponlo en true para ocultarlo del listado
---
```

A partir de ahí, escribe lo que quieras en Markdown: listas, enlaces,
imágenes, bloques de código...

> Y listo, el artículo aparece solo en la página del blog.
