# Detectives del error en una página web rural - Versión 2

## Propósito

Esta actividad está diseñada para la **Semana 9** de la Unidad 2: **Pruebas y depuración inicial; errores comunes; herramientas de diagnóstico del entorno**.

El estudiante abrirá este proyecto en **Visual Studio Code**, ejecutará una página web con errores intencionales, usará herramientas de diagnóstico y documentará las correcciones realizadas.

La actividad combina:

- Lectura guiada.
- Exploración del IDE.
- Diagnóstico de errores en HTML, CSS y JavaScript.
- Uso de consola, inspector, panel de problemas y rutas de archivos.
- Micro-quiz.
- Glosario de comandos y menús.
- Bitácora de depuración.
- Retos para ir más allá.

---

## Caso contextualizado: Finca La Esperanza

La comunidad de la vereda necesita una página web sencilla para registrar la producción diaria de una finca.

La página debe permitir registrar:

- Fecha del registro.
- Litros de leche producidos.
- Kilos de maíz cosechados.
- Milímetros de lluvia.
- Observaciones del día.

Con esos datos, el sistema debe mostrar:

- Total de leche.
- Promedio diario de leche.
- Total de maíz.
- Promedio diario de maíz.
- Alertas cuando la producción sea baja o la lluvia sea alta.
- Una tabla con los registros ingresados.

El problema es que la página fue entregada con errores. Tu misión será actuar como **tester y depurador inicial**.

---

## ¿Qué mejora trae esta versión 2?

Esta versión incluye más elementos para que la actividad sea completa y evaluable:

1. Proyecto con errores intencionales para estudiantes.
2. Proyecto de referencia para el docente.
3. Datos rurales de prueba en formato CSV.
4. Casos de prueba con resultados esperados.
5. Bitácora de depuración.
6. Micro-quiz de 15 preguntas.
7. Glosario de comandos, menús y herramientas.
8. Rúbrica de evaluación.
9. Retos opcionales para estudiantes avanzados.
10. Archivo `.code-workspace` para abrir el proyecto más fácilmente en VS Code.

---

## Estructura del proyecto

```text

detectives-error-web-rural-v2/
│
├── README.md
├── abrir-en-vscode.code-workspace
│
├── app-con-errores/
│   ├── index.html
│   ├── css/
│   │   └── estilos.css
│   └── js/
│       └── app.js
│
├── app-referencia-docente/
│   ├── index.html
│   ├── css/
│   │   └── estilos.css
│   └── js/
│       └── app.js
│
├── datos/
│   ├── produccion_finca_esperanza.csv
│   └── casos-de-prueba.md
│
├── evidencias/
│   ├── plantilla-bitacora.md
│   ├── micro-quiz.md
│   ├── glosario-comandos-y-menus.md
│   ├── lista-chequeo.md
│   └── entrega-final.md
│
└── docente/
    ├── guia-rapida-docente.md
    ├── solucion-orientadora.md
    └── respuestas-micro-quiz.md
```

> Recomendación para el docente: si deseas entregar el material a estudiantes sin solución, elimina la carpeta `app-referencia-docente/` y la carpeta `docente/` antes de compartirlo.

---

## Requisitos previos

Para realizar la actividad necesitas:

- Visual Studio Code instalado.
- Un navegador web: Chrome, Edge, Firefox o similar.
- Conocer cómo abrir la consola del navegador con `F12` o clic derecho > **Inspeccionar**.

Opcional:

- Extensión **Live Server** en VS Code.
- Extensión de soporte para HTML, CSS y JavaScript.

---

## Cómo abrir el proyecto en VS Code

### Opción 1: abrir la carpeta completa

1. Descomprime el archivo `.zip`.
2. Abre Visual Studio Code.
3. Selecciona **File / Archivo > Open Folder / Abrir carpeta**.
4. Elige la carpeta `detectives-error-web-rural-v2`.
5. Lee primero este archivo `README.md`.

### Opción 2: abrir el workspace

1. En VS Code, selecciona **File / Archivo > Open Workspace from File**.
2. Selecciona el archivo:

```text
abrir-en-vscode.code-workspace
```

---

## Primera ejecución

1. Entra a la carpeta:

```text
app-con-errores/
```

2. Abre el archivo:

```text
index.html
```

3. Ejecútalo de una de estas formas:

- Con la extensión **Live Server**: clic derecho sobre `index.html` > **Open with Live Server**.
- Sin Live Server: doble clic sobre `index.html` para abrirlo en el navegador.

4. Observa lo que ocurre.

Preguntas iniciales:

- ¿La página se ve organizada?
- ¿Los estilos se aplican correctamente?
- ¿El botón registra datos?
- ¿Aparecen errores en la consola del navegador?
- ¿Hay archivos que no se están cargando?

---

## Herramientas que debes usar

Durante la actividad debes usar al menos cuatro herramientas de diagnóstico:

| Herramienta | Uso esperado |
|---|---|
| Explorador de VS Code | Revisar carpetas, nombres y rutas de archivos. |
| Panel de problemas | Observar advertencias del editor. |
| Consola del navegador | Detectar errores de JavaScript. |
| Inspector del navegador | Revisar estructura HTML y estilos aplicados. |
| Pestaña Network / Red | Confirmar si CSS o JS no cargan por rutas incorrectas. |
| Comentarios en el código | Documentar correcciones o ideas. |

---

## Ruta de trabajo sugerida

### Paso 1: Diagnóstico visual

Abre la página y responde:

- ¿Carga el diseño visual?
- ¿El formulario está organizado?
- ¿Aparecen colores, tarjetas y botones?

Registra tus observaciones en:

```text
evidencias/plantilla-bitacora.md
```

---

### Paso 2: Diagnóstico de rutas

Revisa en `index.html` si las rutas de CSS y JavaScript coinciden con la estructura real de carpetas.

Pista: compara estas carpetas:

```text
app-con-errores/css/
app-con-errores/js/
```

con las rutas escritas dentro de `index.html`.

---

### Paso 3: Diagnóstico en consola

Abre la consola del navegador:

- Windows/Linux: `F12` o `Ctrl + Shift + I`.
- Mac: `Cmd + Option + I`.

Luego entra a la pestaña **Console / Consola**.

Busca mensajes en rojo y responde:

- ¿Qué archivo genera el error?
- ¿Qué línea se menciona?
- ¿Qué elemento no fue encontrado?
- ¿El error parece de sintaxis, ejecución, lógica o ruta?

---

### Paso 4: Revisión de HTML

En `index.html`, revisa:

- Etiquetas mal cerradas.
- IDs que no coinciden con JavaScript.
- Rutas incorrectas.
- Botones con tipos incorrectos.
- Elementos de salida que no coinciden con los usados en el script.

---

### Paso 5: Revisión de CSS

En `css/estilos.css`, revisa:

- Propiedades mal escritas.
- Selectores que no coinciden con el HTML.
- Valores incompletos.
- Reglas que el navegador ignora.

Recuerda: el CSS normalmente no detiene la página, pero sí puede hacer que se vea mal.

---

### Paso 6: Revisión de JavaScript

En `js/app.js`, revisa:

- IDs llamados con `document.getElementById()`.
- Conversión de texto a número.
- Cálculo de totales y promedios.
- Lógica de alertas.
- Inserción de filas en la tabla.
- Uso de `localStorage`.

---

## Casos de prueba obligatorios

Usa los datos del archivo:

```text
datos/produccion_finca_esperanza.csv
```

Al ingresar los 7 registros, el sistema corregido debería producir aproximadamente:

| Indicador | Resultado esperado |
|---|---:|
| Total de leche | 214 litros |
| Promedio diario de leche | 30.57 litros |
| Total de maíz | 557 kg |
| Promedio diario de maíz | 79.57 kg |
| Total de lluvia | 100 mm |

También debe alertar que el viernes fue un día crítico por baja producción de leche y alta lluvia.

Consulta más detalles en:

```text
datos/casos-de-prueba.md
```

---

## Evidencias que debes entregar

Al finalizar, entrega:

1. Proyecto corregido.
2. Bitácora de depuración completa.
3. Micro-quiz resuelto.
4. Glosario de comandos y menús completado.
5. Captura de pantalla de la página funcionando.
6. Captura de pantalla de la consola sin errores críticos.
7. Respuesta breve a las preguntas de reflexión.

Usa el archivo:

```text
evidencias/entrega-final.md
```

---

## Retos para ir más allá

Cuando el proyecto funcione, intenta al menos dos retos:

1. Agregar un botón para limpiar todos los registros.
2. Guardar registros en `localStorage`.
3. Mostrar una alerta visual con colores.
4. Agregar un gráfico sencillo de barras usando HTML y CSS.
5. Permitir exportar el resumen como texto.
6. Agregar validación para impedir valores negativos.
7. Agregar un campo para responsable de la finca.
8. Crear una sección de recomendaciones automáticas.
9. Agregar comentarios explicativos al código.
10. Mejorar el diseño para que sea usable por personas con baja alfabetización digital.

---

## Preguntas de reflexión

Responde al final:

1. ¿Qué error fue más fácil de encontrar?
2. ¿Qué error fue más difícil de corregir?
3. ¿Qué herramienta de diagnóstico te ayudó más?
4. ¿Por qué es importante probar un programa antes de entregarlo?
5. ¿Cómo aplicarías esta práctica en una página web real para tu comunidad?

---

## Recomendación final

No corrijas todo al azar. Sigue este ciclo:

```text
Observar -> Probar -> Leer error -> Formular hipótesis -> Corregir -> Ejecutar otra vez -> Documentar
```

La meta no es solo que la página funcione. La meta es que aprendas a **diagnosticar, justificar y documentar** tus decisiones técnicas.

---

## Mejora adicional incluida en esta version

Tambien se agregaron dos apoyos nuevos:

```text
pistas/pistas-graduales.md
herramientas/validador-basico.py
```

El archivo de pistas permite orientar al estudiante sin darle la solucion completa desde el inicio.

El validador basico es opcional. Para ejecutarlo desde la carpeta principal del proyecto:

```bash
python herramientas/validador-basico.py
```

Este validador revisa algunas correcciones esperadas, pero no reemplaza la bitacora, las pruebas ni la revision del docente.
